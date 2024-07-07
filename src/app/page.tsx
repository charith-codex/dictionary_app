"use client";
import Banner from "@/components/Banner";
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import { useState } from "react";

const tracks = [
  {
    url: "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3",
    title: "Hello",
    tags: ["hello"],
  },
];

const colors = {
  tagsBackground: "#3e32e4",
  tagsText: "#ffffff",
  tagsBackgroundHoverActive: "#6e65f1",
  tagsTextHoverActive: "#ffffff",
  searchBackground: "#18191f",
  searchText: "#ffffff",
  searchPlaceHolder: "#575a77",
  playerBackground: "#000",
  titleColor: "#16A343",
  timeColor: "#16A343",
  progressSlider: "#16A343",
  progressUsed: "#16A343",
  progressLeft: "#16A343",
  bufferLoaded: "#16A343",
  volumeSlider: "#3e32e4",
  volumeUsed: "#ffffff",
  volumeLeft: "#151616",
  playlistBackground: "#fff",
  playlistText: "#575a77",
  playlistBackgroundHoverActive: "#18191f",
  playlistTextHoverActive: "#ffffff",
};

export default function Home() {
  const [word, setWord] = useState("");
  return (
    <main>
      <Banner changeWord={setWord} />
      <h1>{word}</h1>
      <section className="absolute top-[27vh] bg-white w-[80%] ml-[10%] shadow-2xl p-5 rounded-2xl">
        <div className="flex justify-between">
          <span className="shadow-md px-6 py-2 rounded-lg bg-green-600 text-white">
            <span className="h-[10px] w-[10px] bg-yellow-300 rounded-full inline-block"></span>{" "}
            hello
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900 md:text-2xl lg:text-4xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              greenEYE
            </span>{" "}
            Dictionary
          </h1>
          <span className="shadow-md px-6 py-2 rounded-lg bg-blue-600 text-white">
            <span className="h-[10px] w-[10px] bg-blue-300 rounded-full inline-block"></span>{" "}
            {`phonetic:"hə'ləʊ"`}
          </span>
        </div>

        <section className="mt-5 pt-4 border-solid border-0 border-t border-gray-300">
          <span className="shadow-md px-6 py-2 rounded-lg font-semibold bg-white text-green-700 flex items-center justify-between max-w-[120px]">
            <span className="h-[10px] w-[10px] bg-yellow-300 rounded-full inline-block"></span>
            Origin
          </span>
          <p className="py-3 text-gray-600 bg-gray-100 mt-4 px-4 rounded-lg">
            "early 19th century: variant of earlier hollo ; related to holla."
          </p>
        </section>

        <section className="mt-8 shadow-2xl p-5 rounded-xl bg-gray-100">
          <span className="shadow-md px-8 py-2 rounded-lg font-semibold bg-gray-600 text-white flex items-center justify-between max-w-[150px]">
            <span className="h-[10px] w-[10px] bg-white rounded-full inline-block"></span>
            Meaning
          </span>

          <div>
            <span className="shadow-md mt-4 px-3 py-2 rounded-full font-semibold bg-white text-green-700 flex items-center justify-between max-w-[330px]">
              <span className="h-[10px] w-[10px] bg-yellow-300 rounded-full inline-block"></span>
              Part of speech
              <span className="shadow-md px-6 py-2 rounded-full font-semibold bg-green-600 text-white flex items-center justify-between max-w-[400px]">
                Exclamation
              </span>
            </span>
            <p className="py-3 text-gray-600 bg-white mt-4 px-4 rounded-lg">
              "used as a greeting or to begin a phone conversation."
            </p>
            <p className="py-3 text-gray-600 bg-white mt-4 px-4 rounded-lg">
              "hello there, Katie!"
            </p>
          </div>
        </section>

        <div className="mt-4">
          <Player
            trackList={tracks}
            includeTags={false}
            includeSearch={false}
            showPlaylist={false}
            sortTracks={false}
            autoPlayNextTrack={false}
            customColorScheme={colors}
          />
        </div>
      </section>
    </main>
  );
}
