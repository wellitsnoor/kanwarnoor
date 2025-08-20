import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

let trasnporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true" ? true : false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const origin = req.headers.get("origin");
    if (origin !== process.env.URL) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { email, name, message } = await req.json();

    // if (!email || !name || !message) {
    //   return NextResponse.json(
    //     { message: "Missing required fields" },
    //     { status: 400 }
    //   );
    // }

    // await trasnporter.sendMail({
    //   from: `"Kanwarnoor.com" <${process.env.SMTP_FROM}>`,
    //   replyTo: email,
    //   to: "wellitsnoor@gmail.com",
    //   subject: `Contact form submitted by ${name}`,
    //   text: `
    //   Name: ${name}
    //   Email: ${email}
    //   Message: ${message}
    //   `,
    //   html: `<p>${name}</p>
    //   <p>${email},</p>
    //   <p>${message}</p>`,
    // });

    return NextResponse.json({ message: "Message sent successfully" });
  } catch (error) {
    console.log("Error sending mail: ", error);
    return NextResponse.json(
      { message: "Error sending message" },
      { status: 500 }
    );
  }
}
