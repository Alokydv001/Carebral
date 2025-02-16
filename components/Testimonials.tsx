"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image"; // ✅ Use Next.js Image component

const testimonials = [
  {
    name: "Emily Johnson",
    role: "Patient",
    image: "/images.jpg",
    quote:
      "Cerebral changed my life. The personalized treatment and support I received helped me regain my confidence and mental well-being.",
  },
  {
    name: "Michael Davis",
    role: "Patient",
    image: "/images1.jpg",
    quote:
      "Finding a psychiatrist who truly listens and understands me has been a game-changer. I highly recommend Talkiatry!",
  },
  {
    name: "Sophia Lee",
    role: "Patient",
    image: "/images2.jpg",
    quote:
      "The convenience of online appointments and expert care made my therapy journey smooth and stress-free.",
  },
  {
    name: "James Carter",
    role: "Patient",
    image: "/images3.jpg",
    quote:
      "Cerebral helped me through one of the toughest times in my life. The doctors here truly care about their patients.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-white">Success Stories</h2>
        <p className="mt-4 mb-10 text-blue-200 max-w-2xl mx-auto">
          Real patients, real results. See how Cerebral has transformed lives through expert mental health care.
        </p>

        <div className="mt-10">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="w-full"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[320px] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  {/* Background Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl"
                    />
                  </div>

                  {/* Dark Overlay for Readability */}
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-xl"></div>

                  {/* Text Content on Image */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                    <p className="text-white italic text-sm font-medium leading-snug">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <h3 className="mt-3 text-lg font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-blue-300 text-xs">{testimonial.role}</p>
                  </div>

                  {/* Subtle Glowing Effect Around Card */}
                  <div className="absolute inset-0 border border-white/15 rounded-xl shadow-lg shadow-blue-500/20"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
