import Image from "next/image";

export default function Program() {
  return (
    <div className="bg-white text-black flex flex-col items-center justify-center py-10">
      <h2 className="text-2xl font-bold mb-4">Our Programs</h2>
      <div className="relative w-full max-w-4xl">
        <Image
          src="/program.jpg"
          alt="Our Program"
          width={1100}
          height={950}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}
