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
          className="input input-bordered w-full input-primary"
        />
        <label className="label mt-4">
          <span className="label-text">And what's your message?</span>
        </label>
        <textarea
          className="textarea textarea-bordered textarea-primary h-24"
          placeholder="Enter your message"
        ></textarea>
        <button className="btn btn-primary mt-8">Send message</button>
      </div>
    </>
  );
}