"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Pusher from "pusher-js";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { WavyBackground } from "@/components/ui/wavy-background";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { quantum } from "ldrs";

const ListenPage = () => {
  const [category, setCategory] = useState(null);
  const [imagePath, setImagePath] = useState(null);
  const [words, setWords] = useState("Listening to stream...");
  quantum.register();

  useEffect(() => {
    var pusher = new Pusher("a23354f7a99fcd36d314", { cluster: "ap2" });
    const classificationChannel = pusher.subscribe("classification");
    classificationChannel.bind("category", (data) => {
      const { message } = data;
      console.log("Category:", message);
      setCategory(message);
      //   console.log("Meow");
    });
  }, []);

  useEffect(() => {
    if (category === "Applause") {
      setWords("Detected Applause");
      setImagePath("/images/clap.png");
    } else if (category === "Cry") {
      setWords("Detected Crying");
      setImagePath("/images/cry.png");
    }
  }, [category]);

  useEffect(() => {
    // console.log("Words:", words);
    console.log("Category:", category);

    // Start a timer that will reset the state variables after 5 seconds
    const timer = setTimeout(() => {
      setCategory(null);
      setWords("Listening to stream...");
      setImagePath(null);
    }, 5000);

    // Clear the timer whenever words changes
    return () => clearTimeout(timer);
  }, [words]);

  const simulateSound = () => {
    const categories = ["Applause", "Cry"];
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    setCategory(randomCategory);
  };

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <header>
          <h1 className="text-center font-bold text-4xl p-4 mb-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white">
            Decible AI
          </h1>{" "}
        </header>

        <main>
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-8 bg-white dark:bg-black">
            {imagePath ? (
              <motion.img
                src={imagePath}
                alt={category}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              />
            ) : (
              // Default values shown

              <div className={"justify-center flex m-10"}>
                <l-quantum size="150" speed="4.0" color="white"></l-quantum>
              </div>
            )}

            <TextGenerateEffect words={words} key={words} className={"m-8"} />

            <button
              onClick={simulateSound}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Test
            </button>
          </BackgroundGradient>
        </main>
      </WavyBackground>
    </div>
  );
};

export default ListenPage;
