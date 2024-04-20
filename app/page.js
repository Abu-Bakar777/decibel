import { WavyBackground } from "@/components/ui/wavy-background";
import Link from "next/link";

const HomePage = () => {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Decibel AI
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Leverage the power of Machine Learning to detect sound and classify it
      </p>

      <div className="flex justify-center mt-8">
        <Link
          href={"/listen"}
          className="bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Start Listening
        </Link>
      </div>
    </WavyBackground>
  );
};

export default HomePage;
