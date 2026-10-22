import { Phone, MapPin, Facebook } from "lucide-react";

export default function AdmissionsCTA() {
  return (
    <section
      id="admissions"
      className="bg-navy-primary py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-2xl">📚</div>
        <div className="absolute top-32 right-20 text-2xl">✏️</div>
        <div className="absolute bottom-20 left-1/4 text-2xl">🎓</div>
        <div className="absolute bottom-10 right-1/3 text-2xl">⭐</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {/* Left Side - Heading */}
          <div>
            <div className="bg-accent-red w-16 h-1 rounded-full mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Enroll Your Child Today
            </h2>
            <p className="text-gray-300 text-sm">
              Give your child the best start in life. Join our growing school
              family!
            </p>
          </div>

          {/* Contact Groups */}
          {/* Call Us */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-3">
              <div className="bg-accent-red rounded-full p-3">
                <Phone size={24} className="text-white" />
              </div>
            </div>
            <h3 className="text-white font-bold text-sm mb-2">Call Us</h3>
            <p className="text-gray-300 text-xs">0976 488 969</p>
            <p className="text-gray-300 text-xs">0974 885 241</p>
          </div>

          {/* Visit Us */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-3">
              <div className="bg-accent-red rounded-full p-3">
                <MapPin size={24} className="text-white" />
              </div>
            </div>
            <h3 className="text-white font-bold text-sm mb-2">Visit Us</h3>
            <p className="text-gray-300 text-xs">Twin Palm Extension,</p>
            <p className="text-gray-300 text-xs">Lusaka</p>
          </div>

          {/* Follow Us */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-3">
              <div className="bg-accent-red rounded-full p-3">
                <Facebook size={24} className="text-white" />
              </div>
            </div>
            <h3 className="text-white font-bold text-sm mb-2">Follow Us</h3>
            <p className="text-gray-300 text-xs">Barrackas Park School</p>
          </div>
        </div>

        {/* Apply Now Button - separate row on mobile, right on desktop */}
        <div className="mt-8 md:mt-0 md:absolute md:right-8 md:top-1/2 md:transform md:-translate-y-1/2">
          <button className="btn-primary w-full md:w-auto">Apply Now →</button>
        </div>
      </div>
    </section>
  );
}
