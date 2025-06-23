import Image from "next/image";

export default function Herosection() {
  return (
    <div className="w-full relative">
      <Image
        src="/bg.jpg"
        alt="Background"
        width={1920}
        height={1080}
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  );
}
