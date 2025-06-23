import Image from "next/image";
export default function Location(){
    return(
        <div className=" bg-white text-black flex items-center justify-center">
            <div className=" text-black text-3xl font-bold">
                Locations
            </div>
             <Image
                    src="/loc1.jpg"
                    alt="Background"
                    width={130}
                    height={130}
                    className="w--1/2h-auto object-cover"
                    priority
                  />

        </div>
    )
}