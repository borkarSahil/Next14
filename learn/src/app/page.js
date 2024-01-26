

import Css from "@/components/Css";
import Header from "@/components/Header";
import LinkLearn from "@/components/LinkLearn";
import ImageUse from "../components/ImageUse";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
        {/*  <LinkLearn /> */}
        {/*  <Css /> */}
        <LinkLearn />
        <ImageUse />
        <Header />

      </main>
    </>
  );
}
