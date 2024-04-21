import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Decibel AI",
  description: "A cool proejct",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        {/* <!-- Footer Start --> */}
        <div className="fixed bottom-0 flex flex-col justify-center w-full py-4 bg-white dark:bg-black border-t dark:border-gray-700">
          <p className="text-sm text-center text-gray-600 dark:text-gray-200">
            Made with <span className="text-red-500">&hearts;</span> by{" "}
            <a
              href="https://github.com/Abu-Bakar777"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-indigo-500">Abu Bakar</span>
            </a>
          </p>
          <p className="text-sm text-center text-gray-600 dark:text-gray-200">
            Take a peak at my{" "}
            <a
              href="https://github.com/Abu-Bakar777/decibel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-indigo-500">Source Code</span>
            </a>
          </p>
        </div>
        {/* <!-- Footer End --> */}
      </body>
    </html>
  );
}
