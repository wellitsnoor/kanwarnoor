import {
  GetItemCommand,
  DynamoDBClient,
  PutItemCommand,
  UpdateItemCommand,
} from "@aws-sdk/client-dynamodb";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { NextRequest, NextResponse } from "next/server";

const sesClient = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_KEY!,
  },
});

const dynamoClient = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_KEY!,
  },
});

const RATE_LIMIT = 2;
const RATE_LIMIT_TIME = 60000;

export async function POST(req: NextRequest) {
  try {
    const { email, name, message } = await req.json();

    if (!email || !name || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // origin checking
    const origin = req.headers.get("origin");
    if (origin !== process.env.URL) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // rate limiting
    let ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip");
    if (!ip) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const getCommand = new GetItemCommand({
      TableName: "ratelimit",
      Key: {
        ip: { S: ip },
      },
    });

    const response = await dynamoClient.send(getCommand);
    const item = response.Item;

    if (item) {
      const count = Number(item.count.N);
      const time = Date.now();

      if (time - Number(item.time.N) > RATE_LIMIT_TIME) {
        const command = new UpdateItemCommand({
          TableName: "ratelimit",
          Key: { ip: { S: ip } },
          UpdateExpression: "SET #count = :count, #time = :time",
          ExpressionAttributeNames: {
            "#count": "count",
            "#time": "time",
          },
          ExpressionAttributeValues: {
            ":count": { N: "0" },
            ":time": { N: time.toString() },
          },
        });
        await dynamoClient.send(command);
      }

      if (count === RATE_LIMIT) {
        return NextResponse.json(
          { message: "Rate limit exceeded" },
          { status: 429 }
        );
      }

      const command = new UpdateItemCommand({
        TableName: "ratelimit",
        Key: { ip: { S: ip } },
        UpdateExpression: "SET #count = :count, #time = :time",
        ExpressionAttributeNames: {
          "#count": "count",
          "#time": "time",
        },
        ExpressionAttributeValues: {
          ":count": { N: (count + 1).toString() },
          ":time": { N: time.toString() },
        },
      });
      await dynamoClient.send(command);
    } else {
      const putCommand = new PutItemCommand({
        TableName: "ratelimit",
        Item: {
          ip: { S: ip },
          count: { N: "1" },
          time: { N: Date.now().toString() },
        },
      });
      await dynamoClient.send(putCommand);
    }

    // send email
    const emailCommand = new SendEmailCommand({
      Source: "contact@kanwarnoor.com",
      Destination: {
        ToAddresses: ["wellitsnoor@gmail.com"],
      },
      Message: {
        Subject: { Data: "Contact form submitted" },
        Body: {
          Text: {
            Data: `${name}\n${email}\n${message}`,
          },
        },
      },
      ReplyToAddresses: [email],
    });

    await sesClient.send(emailCommand);

    return NextResponse.json({ message: "Message sent successfully" });
  } catch (error) {
    console.log("Error sending mail: ", error);
    return NextResponse.json(
      { message: "Error sending message" },
      { status: 500 }
    );
  }
}
