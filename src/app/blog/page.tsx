import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <>
    <div className="mt-16">
      <div className="w-full h-fit px-10">
        <p className="text-2xl font-bold">Blogs :</p>
        <ol className="list-decimal">
          <li>
            <Link href="/blog/1" className="text-xl font-normal underline">
              Why we should all kill ourselves?
            </Link>
          </li>
        </ol>
      </div>
    </div>
    <div className="w-full h-[20rem]">

    </div>
    </>


  );
}
