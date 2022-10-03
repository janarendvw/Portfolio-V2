import React from "react";

type Props = {};

export default function ContactForm({}: Props) {
  return (
    <>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">What is your name?</span>
        </label>
        <input
          type="text"
          placeholder="Enter name"
          style={{boxShadow: '0 0 5px 1px #9ca3af30'}}
          className="input w-full bg-gray text-sm border border-1 border-gray-300/50"
        />
        <label className="label mt-4">
          <span className="label-text">And what's your message?</span>
        </label>
        <textarea
                  style={{boxShadow: '0 0 5px 1px #9ca3af30'}}
          className="textarea bg-gray h-24 border border-1 border-gray-300/50"
          placeholder="Enter your message"
        ></textarea>
        <button className="btn btn-primary mt-8">Send message</button>
      </div>
    </>
  );
}
