import React from "react";
import { EventsProps } from "./event";

type DataProps = {
  data: EventsProps;
};

const EventDetails = (props: DataProps) => {
  if (!props.data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-10 font-bold">
      <ul className="flex flex-col gap-5 items-center max-w-3xl  mx-auto ">
        <li className="rounded-md overflow-hidden shadow-lg pb-3">
          <article className="flex flex-col items-center gap-3">
            <img src={props.data.image} alt="" className="w-[450px]" />
            <p>{props.data.title}</p>
            <em className="font-normal">{props.data.address}</em>
            <p>{props.data.description}</p>
          </article>
        </li>
      </ul>
    </div>
  );
};

export default EventDetails;
