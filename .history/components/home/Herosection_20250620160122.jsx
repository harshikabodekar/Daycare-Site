import Image from "next/image";
export default function Hersosection() {
    return (
        <div>

        <Image
            src="/bg.jpg"
            alt="Background"
            width={1100}
            height={950}
            className="absolute flex items-center justify-center object-contain min-h-scrren min-w-screen"

            style={{ objectFit: 'contain' }}
            priority
        />
</div>

    );
}
