import Navbar from "../home/Navbar";

export default function Program() {
  const programs = [
    {
      title: "Infants",
      age: "(12 to 18 months)",
      focus: "Creating a nurturing and stimulating environment.",
      ratio: "4:1",
      icon: "🚗",
    },
    {
      title: "Toddlers",
      age: "(19 to 35 months)",
      focus: "Guide students’ self-discovery during this sensitive stage.",
      ratio: "6:1",
      icon: "🛒",
    },
    {
      title: "Pre-schoolers",
      age: "(3 to <4 years)",
      focus: "Building and strengthening foundations learned as toddlers.",
      ratio: "8:1",
      icon: "🤖",
    },
    {
      title: "Kindergarden",
      age: "(4 to 6 years)",
      focus: "Based on Montessori, Waldorf, Reggio, Specialty Enrichment.",
      ratio: "10:1",
      icon: "📚",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl shadow-sm p-6 space-y-4"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-50 rounded-full text-2xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}{" "}
                    <span className="text-gray-500 font-normal">
                      {item.age}
                    </span>
                  </h3>
                </div>
              </div>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                <li>
                  <span className="font-medium">Focus Areas:</span> {item.focus}
                </li>
                <li>
                  <span className="font-medium">Child-teacher ratio:</span>{" "}
                  {item.ratio} student-to-teacher ratio, well-trained &
                  experienced educators.
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
