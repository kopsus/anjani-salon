import React from "react";
import { Input } from "../ui/input";

const FormContact = () => {
  return (
    <form className="flex flex-col gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-8">
        <div className="flex flex-col gap-[10px]">
          <label className="text-sm">Full Name</label>
          <Input type="text" placeholder="Enter your full name" />
        </div>
        <div className="flex flex-col gap-[10px]">
          <label className="text-sm">Email</label>
          <Input type="email" placeholder="Example@gmail.com" />
        </div>
      </div>
      <div className="flex flex-col gap-[10px] h-full">
        <label className="text-sm">Message</label>
        <textarea
          className="px-4 py-2 outline-primary border border-primary rounded h-44 lg:h-full"
          placeholder="Enter your full Message"
        ></textarea>
      </div>

      <button className="py-2 rounded-full text-white bg-primary">
        Submit
      </button>
    </form>
  );
};

export default FormContact;
