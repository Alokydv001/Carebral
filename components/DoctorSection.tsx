
import Image from "next/image";

export default function DoctorsSection() {
  return (
    <div className="container mx-auto px-4">
      <div className="mt-3">
        <h3 className="text-3xl font-semibold text-center text-gray-700 mb-6">
          Meet Our Expert Doctors
        </h3>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctorsData.map((doctor, index) => (
            <div
              key={index}
              className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg group"
            >
              {/* Background Image using next/image */}
              <Image
                src={doctor.image}
                alt={doctor.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                <h4 className="text-lg font-semibold text-white">{doctor.name}</h4>
                <p className="text-sm text-gray-300">{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Sample Doctors Data
const doctorsData = [
  {
    name: "Dr. John Doe",
    specialty: "Cardiologist",
    image: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
  },
  {
    name: "Dr. Sarah Smith",
    specialty: "Dermatologist",
    image: "https://thumbs.dreamstime.com/b/african-male-doctor-happy-tablet-computer-34481166.jpg",
  },
  {
    name: "Dr. Mark Johnson",
    specialty: "Psychiatrist",
    image: "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
  },
  {
    name: "Dr. Emily Davis",
    specialty: "Pediatrician",
    image: "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8fDB8fHww",
  },
];
