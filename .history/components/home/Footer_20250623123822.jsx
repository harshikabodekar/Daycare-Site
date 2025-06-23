import Image from "next/image";


export default function Footer() {
  return (
    <footer className="bg-purple-100 text-black px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
       
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Image
              src="/logo1.png"
              alt="Clearwater Logo"
              width={160}
              height={160}
              className="object-contain"
            />
            
          </div>

          <div className="flex space-x-4 mt-4">
            <div className="bg-white p-2 rounded shadow hover:bg-purple-200 cursor-pointer">
         <Image
              src="/twitter.png"
              alt="Clearwater Logo"
              width={10}
              height={10}
              className="object-contain"
            />
            </div>
            <div className="bg-white p-2 rounded shadow hover:bg-purple-200 cursor-pointer">
             <Image
              src="/instagram.png"
              alt="Clearwater Logo"
              width={10}
              height={10}
              className="object-contain"
            />
            </div>
            <div className="bg-white p-2 rounded shadow hover:bg-purple-200 cursor-pointer">
              <Image
              src="/linkedin.png"
              alt="Clearwater Logo"
              width={10}
              height={10}
              className="object-contain"
            />
            </div>
          </div>

          <p className="text-xs mt-6">Clearwater early learning 2024 | All Rights Reserved</p>
        </div>

        
        <div>
          <h3 className="text-lg font-bold border-b-2 border-black inline-block mb-3">Pages</h3>
          <ul className="space-y-2 mt-2 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Latest Service</a></li>
            <li><a href="#">Latest News & Events</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-bold border-b-2 border-black inline-block mb-3">Contact</h3>
          <ul className="space-y-3 mt-2 text-sm">
            <li className="flex items-center space-x-2">
             
              <span>info@clearwaterlearning.ca</span>
            </li>
            <li className="flex items-center space-x-2">
              
              <span>(+1) 825 559 7862</span>
            </li>
          </ul>
        </div>
      </div>

      
      <div className="flex justify-center md:justify-end mt-10 space-x-6 text-xs text-gray-700">
        <a href="#" className="hover:underline">Terms & Condition</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Contact Us</a>
      </div>
    </footer>
  );
}
