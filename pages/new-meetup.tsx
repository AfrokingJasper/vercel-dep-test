import React, { Fragment, useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NewMeetupPage = () => {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const imageRef = useRef<HTMLInputElement | null>(null);
  const addressRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
  const router = useRouter();

  const addMeetup = async (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTitle = titleRef.current?.value;
    const enteredImage = imageRef.current?.value;
    const enteredAddress = addressRef.current?.value;
    const enteredDesc = descriptionRef.current?.value;

    const data = {
      image: enteredImage,
      title: enteredTitle,
      address: enteredAddress,
      description: enteredDesc,
    };

    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify({
        image: enteredImage,
        title: enteredTitle,
        address: enteredAddress,
        description: enteredDesc,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const gotData = await response.json();

    console.log(gotData);
    router.push("/");
  };

  return (
    <Fragment>
      <Head>
        <title>Add meetup</title>
        <meta name="description" content="Next meetups" />
      </Head>
      <form
        onSubmit={addMeetup}
        className="flex flex-col gap-3 max-w-3xl my-10 mx-auto p-10 bg-gray-200 shadow-lg rounded-md overflow-hidden"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" ref={titleRef} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="image">Image</label>
          <input type="text" id="image" ref={imageRef} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" ref={addressRef} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Description</label>
          <textarea id="description" rows={8} ref={descriptionRef} />
        </div>
        <button className="bg-red-800 py-2 px-7 self-end text-white rounded-md font-bold mt-5">
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default NewMeetupPage;
