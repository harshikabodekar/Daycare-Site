import Image from "next/image"
export default function Program() {
    return (
        <>
        <div className="bg-white text-black flex items-center justify-center "> Our Programs
            <Image
                src="/program.jpg"
                alt="Our Program "
                width={1100}
                height={950}
                className="absolute flex items-center justify-center object-contain min-h-scrren min-w-screen"

                style={{ objectFit: 'contain' }}
                priority
            />

        </div>
        </>
        
    )
}