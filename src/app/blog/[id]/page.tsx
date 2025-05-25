import { notFound } from "next/navigation";
import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  if (id !== "1") {
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

        <p className="text-2xl font-normal text-center mt-10">
          What is the point of life when the only people you care about start to
          no care about you?
          <b>
            <i> The dilemma of self love.</i>
          </b>{" "}
          <br /> <br /> I think we should all kill ourselves.
        </p>
      </div>
    </>
  );
}
