"use client";
import Banner from "@/components/Banner";
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

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
  playerBackground: "#18191f",
  titleColor: "#ffffff",
  timeColor: "#ffffff",
  progressSlider: "#3e32e4",
  progressUsed: "#ffffff",
  progressLeft: "#151616",
  bufferLoaded: "#1f212b",
  volumeSlider: "#3e32e4",
  volumeUsed: "#ffffff",
  volumeLeft: "#151616",
  playlistBackground: "#18191f",
  playlistText: "#575a77",
  playlistBackgroundHoverActive: "#18191f",
  playlistTextHoverActive: "#ffffff",
};

export default function Home() {
  return (
    <main>
      <Banner />

      <section className="absolute top-[27vh] bg-white w-[80%] ml-[10%] shadow-2xl p-5 rounded-2xl">
        <div className="flex justify-between">
          <span className="shadow-md px-6 py-2 rounded-lg bg-green-600 text-white">
            <span className="h-[10px] w-[10px] bg-yellow-300 rounded-full inline-block"></span>{" "}
            hello
          </span>
          <Player
            trackList={tracks}
            includeTags={false}
            includeSearch={false}
            showPlaylist={false}
            sortTracks={false}
            autoPlayNextTrack={false}
            customColorScheme={colors}
          />
          <span className="shadow-md px-6 py-2 rounded-lg bg-blue-600 text-white">
            <span className="h-[10px] w-[10px] bg-blue-300 rounded-full inline-block"></span>{" "}
            phonetic: "hə'ləʊ"
          </span>
        </div>
      </section>
    </main>
  );
}
