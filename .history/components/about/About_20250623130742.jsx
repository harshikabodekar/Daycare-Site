import Image from "next/image";
import Navbar from "../home/Navbar";
export default function About() {
    return (
<>
<Navbar/>
  <div className="bg-purple-100 text-black text-4xl font-bold px-6 py-10 w-full h-60 flex item-center justify center">
About Us
  </div>
  <Image
                src="/whale.jpg"
                alt="whale
                width={260}
                height={260}
                className="object-contain"
              />

</>
    );
}