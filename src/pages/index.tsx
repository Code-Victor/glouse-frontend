import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Glouse</title>
        <meta name="description" content="The ultimate convinience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 style={{ fontFamily: "var(--fonts-heading)" }}>Hello world</h1>
      <p style={{ fontFamily: "var(--fonts-body)" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        ratione suscipit quas non aliquam aperiam, expedita id beatae sint!
        Officia!
      </p>
    </>
  );
}
