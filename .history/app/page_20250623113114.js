import Navbar from "@/components/home/Navbar";
import Herosection from "@/components/home/Herosection";
import Program from "@/components/home/Program";
import Location from"@/components/home/Location

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Herosection />
      <Program />
    </div>
  );
}
