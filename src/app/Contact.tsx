"use client";

import { IoIosRadioButtonOff } from "react-icons/io";
import { useContact } from "@/reusable/useContact";
import { useAbout } from "@/reusable/useAbout";

export default function Contact() {
  const {
    contacts,
    handleClick,
    handleSubmit,
    name,
    email,
    message,
    setName,
    setEmail,
    setMessage,
  } = useContact();

  const { available } = useAbout();

  return (
    <div
      id="contact"
      className="bg-background flex flex-col md:grid md:grid-cols-4 gap-12 justify-between max-w-5xl mx-auto text-primary py-20 px-4"
    >
      <div className="flex flex-col md:col-span-2 gap-8">
        <h2 className="text-6xl md:text-8xl text-header/10 font-semibold">
          Contact
        </h2>
        <div>
          <p className="text-header text-3xl md:text-5xl ">Let&apos;s Build</p>
          <p className="text-primary text-3xl md:text-5xl ">Something Great</p>
        </div>
        <p className="font-light text-sm md:text-base">
          Have a project in mind or want to discuss opportunities? I&apos;m
          always interested in hearing about new challenges and collaborations.
        </p>
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="border border-header/10 hover:border-header/30 transition-colors cursor-pointer flex gap-4 rounded-xl p-4 "
              onClick={() => handleClick(contact.id)}
            >
              <span className="flex items-center border border-header/10 bg-background rounded-lg p-2">
                <contact.icon size={20} />
              </span>
              <span className="flex flex-col">
                <p className=" text-xs uppercase tracking-wider opacity-60 font-medium">
                  {contact.title}
                </p>
                <p className="text-header font-medium">{contact.content}</p>
              </span>
            </div>
          ))}
        </div>
        <div className=" border border-header/10 p-6 rounded-xl bg-header/[0.02]">
          <div className=" flex items-center gap-3">
            {available ? (
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
            ) : (
              <IoIosRadioButtonOff className="text-primary " />
            )}
            <p className="text-header font-medium">Currently available</p>
          </div>
          <p className="text-xs mt-2 opacity-60">
            Typically respond within 24 hours
          </p>
        </div>
      </div>
      <div className="md:col-span-2 border border-header/20 rounded-3xl p-6 md:p-10 h-fit bg-header/[0.01]">
        <h4 className="text-header text-xl md:text-2xl font-semibold mb-8">
          Send me a message
        </h4>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-header text-xs uppercase tracking-widest font-semibold opacity-70"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="bg-header/[0.03] border border-header/10 rounded-xl p-4 focus:border-header/30 outline-none transition-colors text-header placeholder:opacity-30"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-header text-xs uppercase tracking-widest font-semibold opacity-70"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="bg-header/[0.03] border border-header/10 rounded-xl p-4 focus:border-header/30 outline-none transition-colors text-header placeholder:opacity-30"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-header text-xs uppercase tracking-widest font-semibold opacity-70"
              >
                Your Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can I help you?"
                rows={4}
                className="bg-header/[0.03] border border-header/10 rounded-xl p-4 focus:border-header/30 outline-none transition-colors text-header placeholder:opacity-30"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-header hover:opacity-90 transition-opacity p-4 rounded-full text-background font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* <button className="w-20 cursor-pointer" onClick={sendMail}>
        <IoIosMail size={40} />
      </button>
      <button className="w-20 cursor-pointer" onClick={navigateGithub}>
        <IoLogoGithub size={40} />
      </button>
      <button className="w-20 cursor-pointer" onClick={navigateLinkedIn}>
        <CiLinkedin size={40} />
      </button> */}
    </div>
  );
}
