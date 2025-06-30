import Image from "next/image";
import Navbar from "../home/Navbar";

export default function Program() {
  return (
    <>
    
        <Navbar />
    
        <div className="bg-purple-100 py-10 px-6 flex justify-between items-center">
            <h1 className="text-5xl font-bold text-black">About Us</h1>
            <Image
            src="/whale.jpg"
            alt="whale icon"
            width={150}
            height={150}
            className="rounded-full"
            />
        </div>
    
       
    
        <div className="bg-white px-6 py-12 flex flex-col items-center gap-6">
            <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl">
            
            <div className="bg-white p-6 rounded-lg border-2">
                <h3 className="text-2xl text-black font-semibold mb-2">Infants</h3>
                <p className="text-black">
                Our mission is to deliver high-quality education to children, 
                fostering the development of positive habits and attitudes that 
                empower them to achieve lifelong success.
                </p>
            </div>
            </div>
            </div>
    
            
            <div className="bg-white p-6 rounded-lg border-2">
                <h3 className="text-2xl text-black font-semibold mb-2">Vision</h3>
                <p className="text-gray-700">
                Our vision is to create an environment where every child feels safe, respected, and encouraged to grow socially,
                emotionally, and academically.
                    </p>
                </div>
                

    </>

        );
    }
    