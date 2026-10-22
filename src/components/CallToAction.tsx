import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-20 bg-school-blue text-white">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Enroll Your Child?
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Give your child the best start in life with a nurturing education at
          Barrack's Park School.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/admissions"
            className="bg-school-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
          >
            Apply Now <ArrowRight size={20} />
          </Link>
          <Link
            href="/contact"
            className="bg-white text-school-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
