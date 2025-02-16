// import React from "react";

// const HeroSection = () => {
//   return (
//     <section className="relative w-full h-[500px] bg-cover bg-center">
//       {/* Video Background */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         src="/hero.mp4" // ✅ Corrected Path
//         autoPlay
//         loop
//         muted
//         playsInline // ✅ Ensures autoplay works on mobile devices
//       />
      
//       {/* Overlay for better readability */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
//       {/* Text Content */}
//       <div className="relative z-10 text-center text-white flex flex-col items-center justify-center h-full">
//         <h1 className="text-5xl font-bold">Psychiatrist Treatment</h1>
//         <p className="text-lg mt-4">
//           Find the best psychiatrists and treatments for your needs
//         </p>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// components/HeroSection.tsx

import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[700px] md:h-[800px] lg:h-[900px] xl:h-screen bg-cover bg-center">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Text Content */}
      <div className="relative z-10 text-center text-white flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl font-bold">Psychiatrist Treatment</h1>
        <p className="text-lg mt-4">
          Find the best psychiatrists and treatments for your needs
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
