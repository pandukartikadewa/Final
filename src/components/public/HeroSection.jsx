export default function HeroSection() {
  return (
    <section className="relative h-[45vh] md:h-[50vh] w-full">

      {/* Background Image */}
      <img
        src="https://images.pexels.com/photos/3696394/pexels-photo-3696394.jpeg"
        alt="Event Hero"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-3">
            Temukan Event Terbaik Anda
          </h1>

          <p className="text-sm md:text-base mb-5 max-w-xl mx-auto">
            Booking tiket konser, seminar, dan festival favoritmu
            dengan mudah dan cepat.
          </p>
        </div>
      </div>
    </section>
  );
}
