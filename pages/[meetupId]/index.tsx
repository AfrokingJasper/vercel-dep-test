import EventDetails from "@/components/events/event-details";
import React, { Fragment } from "react";
import Head from "next/head";
import type { GetStaticProps, GetStaticPaths } from "next";
import { EventsProps } from "@/components/events/event";

type DataProps = {
  data: EventsProps;
};

const meetupsData = [
  { id: "m1", title: "First Meetup" },
  { id: "m2", title: "Second Meetup" },
  { id: "m3", title: "Third Meetup" },
];

const initialMeetups = meetupsData.slice(0, 1);

const MeetupDetailsPage = (props: DataProps) => {
  return (
    <Fragment>
      <Head>
        <title>Next course</title>
        <meta name="description" content="Next meetups" />
      </Head>
      <EventDetails data={props.data} />
    </Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = initialMeetups.map((meetup) => ({
    params: {
      meetupId: meetup.id,
    },
  }));

  return {
    paths,
    fallback: true, // or false, depending on your needs
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const meetupId = context.params?.meetupId;

  if (!meetupId) {
    return {
      props: {
        data: {
          image: "/images/coding-event.jpg",
          id: "m1",
          title: "A First Meetup",
          address: "Some Street",
          description: "This is a Third meetup",
        },
      },
    };
  }

  return {
    props: {
      data: {
        id: "m1",
        image: `/images/coding-event.jpg`,
        title: "A First Meetup",
        address: "Some Street",
        description: "This is a Third meetup",
      },
    },
  };
};

export default MeetupDetailsPage;
