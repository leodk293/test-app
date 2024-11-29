import Image from "next/image";
import imageMe from "./images/me.png";

export default function Home() {
  return (
    <div className=" flex flex-col mt-10 items-center gap-7">
      <Image
        src={imageMe}
        alt="Me"
        width={300}
        height={100}
        className=" object-cover"
      />

      <p className=" text-4xl font-bold">Brooklyn</p>
    </div>
  );
}
