import Image from "next/image";

export default function Location() {
  return (
    <div className="bg-white py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-black mb-10">Locations</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        
        <div className="bg-white rounded-lg shadow-md p-4">
          <Image
            src="/loc1.jpg"
            alt="Stampede Center"
            width={500}
            height={300}
            className="w-full h-56 object-cover rounded"
          />
          <div className="mt-4">
            <h3 className="font-bold text-lg text-black">
              Clearwater Early Learning —{" "}
              <span className="text-purple-700">Stampede Center</span>
            </h3>
            <ul className="list-disc pl-5 text-sm mt-2 text-graspace-y-1">
              <li>
                <strong>Address:</strong> 1505 Macleod Trail SE, Calgary, AB, T2G 2N6
              </li>
              <li>
                Located in the heart of downtown Calgary, the center is poised for significant
                growth in the coming years. Our spacious 4,600-square-foot facility features
                bright, open areas with ample natural light, creating a stimulating and positive
                environment for children’s exploration and discovery.
              </li>
              <li>
                <strong>Commencement Date:</strong> December 1, 2024
              </li>
            </ul>
          </div>
        </div>

        
        <div className="bg-white rounded-lg shadow-md p-4">
          <Image
            src="/loc2.jpg"
            alt="Red Deer North Center"
            width={500}
            height={300}
            className="w-full h-56 object-cover rounded"
          />
          <div className="mt-4">
            <h3 className="font-bold text-lg text-black">
              Clearwater Early Learning —{" "}
              <span className="text-purple-700">Red Deer North Center</span>
            </h3>
            <ul className="list-disc pl-5 text-sm mt-2 text-gray-600 space-y-1">
              <li>6751 52 Avenue, Red Deer, AB, T4N 4K8</li>
              <li>
                <strong>Commencement Date:</strong> January 5, 2025
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <Image
            src="/loc3.jpg"
            alt="Lacombe Center"
            width={500}
            height={300}
            className="w-full h-56 object-cover rounded"
          />
          <div className="mt-4">
            <h3 className="font-bold text-lg text-black">
              Clearwater Early Learning —{" "}
              <span className="text-purple-700">Lacombe Center</span>
            </h3>
            <ul className="list-disc pl-5 text-sm mt-2 text-gray-600 space-y-1">
              <li>
                <strong>Address:</strong> 4041 63 Avenue, Lacombe, T4L 1V6
              </li>
              <li>
                <strong>Commencement Date:</strong> February 1, 2025
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
