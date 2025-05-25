import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Page({ params }: Props) {
  if (params.id !== "1") {
    return notFound();
  }

  return (
    <>
      <div className=" w-[50%] flex  flex-col justify-center m-auto items-center h-fit mt-32">
        <h1 className="text-7xl font-bold text-center  title">
          Why I think we should all kill ourselves?
        </h1>
        <p className="text-2xl font-normal text-center">
          By <span className="font-bold">Kanwarnoor</span>
        </p>

        <Image
          src="/sad.jpg"
          alt="blog"
          width={1000}
          height={1000}
          className="mt-5"
        />

        <p className="text-2xl font-normal mt-10 text-justify">
          What is the point of life when the only people you care about start to
          no care about you?
          <b>
            <i> The dilemma of self love.</i>
          </b>{" "}
          <br /> <br /> I think we should all kill ourselves. <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br />
          <br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>
      </div>
    </>
  );
}
