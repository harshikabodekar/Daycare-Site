import Image from "next/image";
import Navbar from "../home/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      
      <div className="bg-purple-100 py-10 px-6 flex justify-between items-center">
        <h1 className="text-5xl font-bold text-black">About Us</h1>
        <Image
          src="/whale.jpg"
          alt="whale icon"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>

      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-10 bg-white">
        <Image
          src="/about1.jpg"
          alt="Teacher and child"
          width={300}
          height={300}
          className="rounded-xl shadow-md"
        />
        <div className="max-w-2xl text-left">
          <h2 className="text-3xl font-bold text-black mb-4">About the Company</h2>
          <p className="text-black text-lg">
            Clearwater Early Learning Center offers an interactive, hands-on learning
            experience for children aged 12 months to 6 years, from toddlers to kindergarten.
            Our centers provide early childhood education with quality childcare under
            various programs suitable for children in infant, toddler, and pre-school age group.
          </p>
        </div>
      </div>

      
      <div className="bg-gray-50 px-6 py-12 flex flex-col items-center gap-6">
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl">
          
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-2xl text-black font-semibold mb-2">Mission</h3>
            <p className="text-gray-700">
             Our mission is to deliver high-quality education to children, 
             fostering the development of positive habits and attitudes that 
             empower them to achieve lifelong success.
            </p>
          </div>

      
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-2xl text-black font-semibold mb-2">Vision</h3>
            <p className="text-gray-700">
              Our vision is to create an environment where every child feels safe, respected, and encouraged to grow socially,
              emotionally, and academically.
            </p>
          </div>
        </div>

    
        <div className="bg-white p-6 border rounded-lg w-full max-w-5xl">
          <h3 className="text-2xl text-black font-semibold mb-2">Values</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong className="text-green-800">Empathy & Inclusion: Creating an inclusive environment for all children to thrive.
               We are dedicated to preparing children for future success while instilling a sense of responsibility towards others and the world around them.</li>
<li><strong className="text-green-800">Dream:</strong> Dreams play a key role in a child’s life, shaping their imagination, aspirations and overall development. 
  They serve as a foundation for growth, self-expression, and fulfilment. 
  They nurture a sense of wonder and provide a roadmap for achieving success and happiness in the future</li>.

<li><strong className="text-green-800">Explore:</strong> Exploration is vital in a child’s life, as it fosters a sense of discovery, learning, and growth.
   It is invaluable for nurturing curiosity, independence, creativity and emotional resilience. 
   It provides a dynamic pathway for holistic development, helping children grow into confident, adaptable and lifelong learners.</li>
 
<li><strong className="text-green-800">Grow:</strong> Taking off after dreaming and exploring plays a fundamental role in a child’s life by transforming ideas into action,
   fostering experimentation, resilience and problem-solving skills.
    It equips them with the confidence and independence to pursue their dreams, adapt to challenges, 
    and continually grow as they journey through life</li>
          </ul>
        </div>
      </div>

      
      <div className="bg-orange-100 px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="max-w-xl text-lg font-medium text-black">
          Our goal is to be the most preferred Early Childhood Education Provider in Canada, expand our scope or service globally
          to cater to various development needs of children in areas of physical and mental wellbeing as well as enhancing diverse abilities.
        </p>
        <Image
          src="/about2.png"
          alt="Tree and children"
          width={200}
          height={200}
        />
      </div>
    </>
  );
}
