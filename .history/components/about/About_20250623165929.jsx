import Image from "next/image";
import Navbar from "../home/Navbar";
export default function About() {
    return (
<>
<Navbar/>
<div className="bg-white">
  <div className="bg-purple-100 text-black text-4xl font-bold px-6 py-10 w-full h-60 flex item-center justify center">
About Us
  
  <Image
                src="/whale.jpg"
                alt="whale"
                width={260}
                height={260}
                className="object-contain flex items-end rounded-max"
              />
              </div>
    <div className="bg-white text-black flex items-center w-full min-h-screen">
    
  <Image
                src="/about1.jpg"
                alt="image 1"
                width={260}
                height={260}
                className="object-contain flex items-end "
              />
               <h2 className="text-black flex items-center justify-center"> About the Company </h2>
               <span> Clearwater Early Learning Center offers an interactive, hands-on learning experience for children aged 12 months to 6 years,<br from toddlers to kindergarten. Our centers provide early childhood education with quality childcare under various programs suitable for children in infant, toddler and pre-school age group.</span>

              </div>
              </div>
              

</>
    );
}