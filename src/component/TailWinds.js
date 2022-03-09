import React from "react";
import "../assets/style.css";

export default function TailWinds() {
  return (
    <div>
      <div className="flex flex-wrap bg-red-500	h-60 lg:h-[300px]">
        <div className="mx-auto my-auto">
          <h1 className="text-center font-bold text-3xl text-slate-100 ">
            Belajar Coding Gratis
          </h1>
          <h1 className="text-center font-bold text-3xl text-slate-100">
            dan di salurkan kerja
          </h1>
        </div>
        <div className="hidden lg:block">
          <img src="https://source.unsplash.com/645x300?computer" alt="" />
        </div>
      </div>
    </div>
  );
}
