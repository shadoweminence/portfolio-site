"use client";
import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { IoIosStar } from "react-icons/io";
import { LuMessageSquare } from "react-icons/lu";
import TestimonialModal from "./TestimonialModal";
import { useTestimonials } from "@/reusable/useTestimonials";

const Testimonials = () => {
  const [showModal, setShowModal] = useState(false);
  const { testimonials } = useTestimonials();

  return (
    <div
      id="testimonials"
      className="mb-20 py-20 flex flex-col gap-4 justify-center max-w-5xl mx-auto  items-center px-4"
    >
      <div className="flex flex-col items-center gap-2">
        <LuMessageSquare className="text-primary" size={40} />
        <h1 className="text-3xl md:text-5xl">Happy Clients</h1>
        <p className="text-primary">
          Real feedback from people I have worked with. Share yours too.
        </p>
      </div>
      <div>
        <button
          onClick={() => setShowModal(true)}
          className="flex cursor-pointer items-center mt-6 gap-2 border p-3 bg-header text-background rounded-2xl"
        >
          {" "}
          <BiPlus /> Add Your Testimonial
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className=" flex flex-col gap-3 border rounded-xl p-6"
          >
            <div className="flex items-center gap-2">
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <IoIosStar key={index} className="text-yellow-500" />
              ))}
            </div>
            <p className="text-primary min-h-[100px]">{testimonial.message}</p>
            <hr />
            <div className="flex items-center gap-2">
              <div className="border w-12 h-12 rounded-full flex items-center justify-center">
                {testimonial.name
                  .split(" ")
                  .map((name) => name[0].toUpperCase())
                  .join("")}
              </div>
              <div className="flex flex-col ">
                <span className="text-header">{testimonial.name}</span>
                <span className="text-primary">{testimonial?.company}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <dialog
        open={showModal}
        onClose={() => setShowModal(false)}
        className="fixed inset-0 z-50 m-auto bg-transparent p-0 border-none backdrop:bg-black/40 backdrop:backdrop-blur-sm"
      >
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        />
        <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
          <TestimonialModal onClose={() => setShowModal(false)} />
        </div>
      </dialog>
    </div>
  );
};

export default Testimonials;
