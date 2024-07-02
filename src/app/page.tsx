import Banner from "@/components/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner />

      <section className="absolute top-[27vh] bg-white w-[80%] ml-[10%] shadow-2xl p-5 rounded-2xl">
        <span>hello</span>
      </section>
    </main>
  );
}
