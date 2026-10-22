import Hero from "@/components/Hero";
import { CheckCircle } from "lucide-react";

export default function Admissions() {
  const steps = [
    {
      number: "01",
      title: "Submit Application",
      description:
        "Fill out our online admission form with your child's information",
    },
    {
      number: "02",
      title: "School Visit & Assessment",
      description:
        "Visit our campus and your child participates in a brief assessment",
    },
    {
      number: "03",
      title: "Interview",
      description:
        "Meet with our admissions team to discuss your child's needs",
    },
    {
      number: "04",
      title: "Admission Decision",
      description: "Receive confirmation of admission and next steps",
    },
  ];

  const requirements = [
    "Completed admission form",
    "Birth certificate",
    "Vaccination records",
    "Previous school records (if applicable)",
    "Parent identification documents",
  ];

  return (
    <main>
      <Hero title="Admissions" subtitle="Join our growing school community" />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Admission Process */}
          <div className="mb-20">
            <h2 className="section-title text-center mb-16">
              Admission Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-school-red text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-school-blue mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form Section */}
          <div className="bg-gradient-to-r from-school-blue to-blue-800 text-white rounded-lg p-12 mb-20">
            <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-lg mb-8">
              Start your child's journey with us today. Our admissions team will
              be in touch within 24 hours.
            </p>
            <button className="bg-school-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Start Application
            </button>
          </div>

          {/* Requirements */}
          <div>
            <h2 className="section-title text-center mb-8">
              Required Documents
            </h2>
            <div className="max-w-2xl mx-auto bg-gray-50 rounded-lg p-8">
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle
                      className="text-school-red flex-shrink-0 mt-1"
                      size={24}
                    />
                    <span className="text-gray-700 text-lg">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
