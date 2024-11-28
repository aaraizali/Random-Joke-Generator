"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface JokeResponse {
  setup: string;
  punchline: string;
}

export default function RandomJoke() {
  const [joke, setJoke] = useState<string>("");

  useEffect(() => {
    fetchJoke();
  }, []);

  async function fetchJoke(): Promise<void> {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data: JokeResponse = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("Failed to fetch joke. Please try again.");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#1e293b] via-[#0f172a] to-[#1e293b] p-6">
    
      <div className="relative bg-gradient-to-r from-[#1f2937] to-[#374151] rounded-3xl shadow-2xl p-10 w-full max-w-lg text-white">
        
        <div className="absolute top-[-3rem] left-[-3rem] bg-blue-500 rounded-full h-24 w-24 blur-2xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-[-4rem] right-[-4rem] bg-pink-500 rounded-full h-32 w-32 blur-3xl opacity-50 animate-pulse"></div>

       
        <h1 className="text-4xl font-extrabold text-center mb-6">
          😂 <span className="text-gradient">Joke Machine</span> 🎉
        </h1>

      
        <div className="relative bg-[#111827] rounded-xl p-6 mb-6 shadow-inner transition-transform transform hover:scale-105">
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-md">
            <span className="text-white text-xl">✨</span>
          </div>
          <p className="text-lg text-gray-200 text-center">
            {joke || <span className="animate-pulse">Loading a hilarious joke...</span>}
          </p>
        </div>

        
        <Button
          onClick={fetchJoke}
          className="w-full py-3 px-6 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
        >
          Get Another Joke 🤩
        </Button>

        
        <div className="mt-8 text-center text-sm opacity-75">
          Made with ❤️ by <span className="text-gradient">Aaraiz Ali</span>
        </div>
      </div>
    </div>
  );
}
