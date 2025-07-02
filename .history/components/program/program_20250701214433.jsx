import Navbar from "../home/Navbar";
import Image from "next/image";
export default function Program() {
  const programs = [
    {
      title: "Infants",
      age: "(12 months to 18 months)",
      focus: "Creating a nurturing and stimulating environment.",
      ratio: "4:1",
    },
    {
      title: "Toddlers",
      age: "(19 months to 35 months)",
      focus: "Guide students’ self-discovery during this sensitive stage of development.",
      ratio: "6:1",
    },
    {
      title: "Pre-schoolers",
      age: "(3 years to less than 4 years)",
      focus: "Building and strengthening the foundations learned in the Toddler program.",
      ratio: "8:1",
    },
    {
      title: "Kindergarden",
      age: "(4 years to 6 years)",
      focus: "Based on Montessori, Waldorf, Reggio, Specialty Enrichment, using emergent curriculum.",
      ratio: "10:1",
    },
  ];

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
      <div className="min-h-screen bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col space-y-4"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}{" "}
                  <span className="text-gray-500 font-normal">{item.age}</span>
                </h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                <li>
                  <span className="font-medium">Focus Areas:</span> {item.focus}
                </li>
                <li>
                  <span className="font-medium">Child-teacher ratio:</span> {item.ratio} student-to-teacher ratio, well-trained & experienced Early Childhood Educators.
                </li>
              </ul>
              <a
                href="#"
                className="flex items-center text-green-600 font-medium text-sm group"
              >
                Read More
                <svg
                  className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
