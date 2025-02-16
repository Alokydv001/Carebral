const CallToAction = () => {
    return (
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Take Control of Your Mental Health Today
          </h2>
          <p className="text-lg md:text-xl mt-4 mb-6 max-w-2xl mx-auto">
            Get personalized care from licensed psychiatrists. Book your consultation now and begin your journey to better mental well-being.
          </p>
  
          <div className="flex justify-center">
            <a
              href="#booking-form"
              className="inline-block bg-white text-gray-900 py-3 px-8 rounded-lg text-lg font-semibold shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
            >
              Book Your Appointment Now
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default CallToAction;
  