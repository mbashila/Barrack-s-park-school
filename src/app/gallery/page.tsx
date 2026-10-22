import Hero from "@/components/Hero";

export default function Gallery() {
  const galleryImages = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    category: ["Students", "Classrooms", "Events", "Activities"][i % 4],
  }));

  return (
    <main>
      <Hero
        title="Photo Gallery"
        subtitle="A glimpse into life at Barrack's Park School"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-school-blue to-school-red h-64 flex items-center justify-center text-white text-center p-8 group-hover:scale-110 transition-transform duration-300">
                  <div>
                    <div className="text-6xl mb-2">📷</div>
                    <p className="text-lg font-semibold">{image.category}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 p-8 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-bold text-school-blue mb-2">
              More Photos Coming Soon
            </h3>
            <p className="text-gray-600">
              Check back regularly for updated photos from our events and
              activities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
