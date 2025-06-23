
import Hersosection from "@/components/home/Herosection";
import Navbar from "@/components/home/Navbar";
import Program from "@/components/home/Program";
import Image from "next/image";

export default function Home() {
  return (
    <div >
        <Program/> 
       <Navbar />
       <Hersosection/>
    </div>
  );
}
