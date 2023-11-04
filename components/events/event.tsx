import React from "react";
import { useRouter } from "next/router";

export  type EventsProps = {
  image: string;
  title: string;
  id: string;
  description: string;
  address: string;
};

type EventsArray = {
  events: EventsProps[];
};

const Events = (props: EventsArray) => {
  const router = useRouter();

  const showDetail = (id: string) => {
    router.push("/" + id);
  };

  return (
    <div className="my-10 font-bold">
      <ul className="flex flex-col gap-5 items-center max-w-3xl mx-auto ">
        {props.events.map((event) => (
          <li
            key={event.id}
            className="rounded-md overflow-hidden shadow-lg pb-3"
          >
            <article className="flex flex-col items-center gap-3">
              <img src={event.image} alt="" className="w-[450px]" />
              <p>{event.title}</p>
              <em className="font-normal">{event.address}</em>
              <button
                onClick={() => showDetail(event.id)}
                className="text-red-800 border border-red-800 rounded-md py-2 px-3"
              >
                Show Details
              </button>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
