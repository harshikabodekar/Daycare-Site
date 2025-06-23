import Image from "next/image";
export default function Footer(){
    return(
<div className="bg-purple-100 text-black w-full h-80 flex items-center justify-center">
 <div className="flex items-start ">
  <Image
            src="/logo1.pnj"
            alt="Stampede Center"
            width={500}
            height={300}
            className="w-1/2 h-56 object-cover rounded"
          />

 </div>

    </div>
  


    );
}