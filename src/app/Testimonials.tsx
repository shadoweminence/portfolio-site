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
        <h1 className="text-3xl md:text-5xl">Testimonials</h1>
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

      <div className="flex max-w-[90vw] w-full overflow-x-auto gap-6 mt-20 pb-8 hide-scroll snap-x snap-mandatory">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex-none max-w-[90vw] w-[320px] md:w-[380px] flex flex-col gap-4 border border-primary/20 rounded-2xl p-6 bg-primary/5 snap-center hover:border-primary/40 transition-colors"
          >
            <div className="flex items-center gap-1.25">
              {Array.from({ length: 5 }).map((_, index) => (
                <IoIosStar
                  key={index}
                  className={`${
                    index < testimonial.rating
                      ? "text-yellow-500"
                      : "text-primary/20"
                  } size-5`}
                />
              ))}
            </div>
            <p className="text-primary italic line-clamp-4 min-h-[100px] leading-relaxed">
              &quot;{testimonial.message}&quot;
            </p>
            <div className="mt-auto pt-4 border-t border-primary/10 flex items-center gap-3">
              <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-header text-background font-bold text-sm">
                {testimonial.name
                  ? testimonial.name
                      .split(" ")
                      .filter((n) => n.length > 0)
                      .map((name) => name[0].toUpperCase())
                      .join("")
                  : "?"}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-header font-semibold truncate leading-tight">
                  {testimonial.name}
                </span>
                <span className="text-primary text-sm truncate">
                  {testimonial?.company}
                </span>
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
