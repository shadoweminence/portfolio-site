"use client";
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { IoIosStar, IoMdClose } from "react-icons/io";

interface TestimonialModalProps {
  onClose: () => void;
}

const TestimonialModal = ({ onClose }: TestimonialModalProps) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // adjust path

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please provide a rating!");
      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "testimonials"), {
        name: formData.name,
        company: formData.company,
        message: formData.message,
        rating,
        createdAt: serverTimestamp(), // optional: track submission time
      });

      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ name: "", company: "", message: "" });
          setRating(0);
        }, 500);
      }, 2000);
    } catch (err) {
      console.error("Error adding testimonial: ", err);
      alert("Failed to submit testimonial. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-background border border-primary/20 rounded-3xl p-12 max-w-xl w-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
          <IoIosStar size={40} className="text-green-500" />
        </div>
        <h2 className="text-2xl font-bold text-header mb-2">Thank You!</h2>
        <p className="text-primary">
          Your testimonial has been submitted successfully. It means a lot!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-background border border-primary/20 rounded-3xl p-8 sm:w-xl w-full relative shadow-2xl animate-in fade-in zoom-in duration-300 overflow-hidden">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 hover:bg-primary/10 rounded-full transition-all duration-300 z-10"
        aria-label="Close modal"
      >
        <IoMdClose size={24} className="text-header" />
      </button>

      <div className="mb-8 relative z-10">
        <h2 className="text-3xl font-bold text-header mb-2 tracking-tight">
          Add Testimonial
        </h2>
        <p className="text-primary text-sm">
          Share your experience of working together.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5  relative z-10"
      >
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-header/70 ml-1">
            Full Name
          </label>
          <input
            required
            type="text"
            className="bg-primary/5 border border-primary/20 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-transparent transition-all text-foreground placeholder:text-primary/40"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-header/70 ml-1">
            Company & Role
          </label>
          <input
            type="text"
            className="bg-primary/5 border border-primary/20 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-transparent transition-all text-foreground placeholder:text-primary/40"
            placeholder="Software Engineer at Google"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-header/70 ml-1">
            Rating
          </label>
          <div className="flex gap-2 w-fit p-3 rounded-2xl ">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className="cursor-pointer transition-transform hover:scale-125 focus:outline-none"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              >
                <IoIosStar
                  size={30}
                  className={`${
                    star <= (hover || rating)
                      ? "text-yellow-500 fill-yellow-500"
                      : "text-primary/30"
                  } transition-all duration-200`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-header/70 ml-1">
            Your Message
          </label>
          <textarea
            required
            rows={4}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-transparent transition-all text-foreground placeholder:text-primary/40 resize-none"
            placeholder="What was it like working with me?"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-header cursor-pointer text-background py-4 flex items-center justify-center gap-2 rounded-2xl font-bold hover:opacity-90 active:scale-[0.98] transition-all mt-2 shadow-lg shadow-header/10 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
          ) : (
            "Submit Testimonial"
          )}
        </button>
      </form>
    </div>
  );
};

export default TestimonialModal;
