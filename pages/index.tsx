import React, { Fragment } from "react";
import Head from "next/head";
import type { GetStaticProps, GetServerSideProps } from "next";
import Events from "@/components/events/event";
import { MongoClient } from "mongodb";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image: "/images/coding-event.jpg",
    address: "some addrress",
    description: "This is a fFirst meetup",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image: "/images/coding-event.jpg",
    address: "some addrress",
    description: "This is a Second meetup",
  },
  {
    id: "m3",
    title: "Third Meetup",
    image: "/images/coding-event.jpg",
    address: "some addrress",
    description: "This is a Third meetup",
  },
];

type MeetupsProps = {
  meetups: [];
};

const HomePage = (props: MeetupsProps) => {
  return (
    <Fragment>
      <Head>
        <title>Next course</title>
        <meta name="description" content="Next meetups" />
      </Head>
      <Events events={props.meetups} />
    </Fragment>
  );
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export const getStaticProps: GetStaticProps = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URL);

  const db = client.db();

  const meetupsCollection = db.collection("meetup-events");
  const meetups = await meetupsCollection.find().toArray();

  console.log(meetups);
  client.close();

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },

    revalidate: 10,
  };
};

export default HomePage;
