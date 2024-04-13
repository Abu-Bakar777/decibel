"use client";
import { useState, useEffect } from "react";
import Pusher from "pusher-js";

const HomePage = () => {
  const [sound, setSound] = useState("Silence");
  const [category, setCategory] = useState("Listening");

  useEffect(() => {
    var pusher = new Pusher("a23354f7a99fcd36d314", { cluster: "ap2" });
    const actionsChannel = pusher.subscribe("actions");
    const classificationChannel = pusher.subscribe("classification");
    // actionsChannel.bind("sound", (data) => {
    //   const { message } = data;
    //   console.log("Sound:", message);
    //   setSound(message);

    //   setInterval(() => {
    //     setSound("Silence");
    //   }, 2);
    // });
    classificationChannel.bind("category", (data) => {
      const { message } = data;
      console.log("Category:", message);
      setCategory(message);
      console.log("Meow");
    });
  }, []);

  return (
    <div>
      <h1>Sound Detected: {category}</h1>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => setCategory("Silence")}
      >
        Reset
      </button>
    </div>
  );
};

export default HomePage;
