import Image from "next/image";
import Navbar from "../home/Navbar";

export default function Program() {
  return (
    <>
    
        <Navbar />
    
        <div className="bg-purple-100 py-10 px-6 flex justify-between items-center">
            <h1 className="text-5xl font-bold text-black">Programs</h1>
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
                <h3 className="text-2xl text-black font-semibold mb-2"><strong>Infants </strong> (12 months to 18 months)</h3> 
                <ul className="text-black">
                <li> <strong clasname="text-green-600">Focus Areas:</strong> Creating a nurturing and stimulating environment.</li>
                 <li> <strong clasname="text-green-600">Child-teacher Ratio:</strong> 4:1 student to teacher ratio; well-trained & experienced Early Childhood Educators.</li></ul>
            </div>
            </div>
            </div>
    
            
            <div className="bg-white p-6 rounded-lg border-2">
                <h3 className="text-2xl text-black font-semibold mb-2"><strong>Todlers</strong>(19 months to 35 months)</h3>
                <ul className="text-black">
                 <li> <strong className=">Focus Areas: Guide students’ self-discovery during this sensitive stage of development.
Child-teacher ratio: 6:1 student-to-teacher ratio; well-trained & experienced Early Childhood Educators.</ui>
                </div>
                

    </>

        );
    }
    