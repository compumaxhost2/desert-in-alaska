"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "What services does Desert In Alaska provide in Detroit, MI?",
    answer:
      "Desert In Alaska Corp provides commercial fire suppression, commercial HVAC, kitchen exhaust and ventilation, gas piping, industrial dry chemical fire suppression, mechanical services, inspections, maintenance, and emergency repairs for commercial and industrial properties in Detroit and throughout Metro Detroit.",
  },
  {
    question:
      "Does Desert In Alaska provide commercial fire suppression services in Detroit?",
    answer:
      "Yes. Desert In Alaska provides commercial fire suppression system design, installation, inspection, testing, maintenance, upgrades, and emergency repair services for businesses in Detroit and surrounding Metro Detroit communities. Services include commercial kitchen fire suppression and industrial dry chemical systems.",
  },
  {
    question: "What types of businesses does Desert In Alaska serve?",
    answer:
      "Desert In Alaska serves restaurants, commercial buildings, warehouses, manufacturing facilities, industrial properties, retail buildings, and other commercial facilities that require fire protection, HVAC, ventilation, gas piping, or mechanical services.",
  },
  {
    question: "Does Desert In Alaska install commercial HVAC systems?",
    answer:
      "Yes. Desert In Alaska provides commercial HVAC installation, repair, maintenance, and mechanical services for commercial and industrial buildings throughout Metro Detroit. HVAC solutions can be designed around the building's size, use, equipment requirements, and operating conditions.",
  },
  {
    question:
      "Does Desert In Alaska install restaurant kitchen exhaust systems?",
    answer:
      "Yes. Desert In Alaska provides commercial kitchen exhaust and ventilation services, including hood, ductwork, exhaust fan, and make-up air system installation. Properly designed ventilation helps control heat, smoke, grease, odors, and airflow in commercial kitchens.",
  },
  {
    question: "Does Desert In Alaska provide commercial gas piping services?",
    answer:
      "Yes. Desert In Alaska provides commercial gas piping installation and mechanical services for commercial and industrial applications. Gas piping projects should be properly designed, installed, inspected, and maintained according to applicable safety and building requirements.",
  },
  {
    question: "What is an industrial dry chemical fire suppression system?",
    answer:
      "An industrial dry chemical fire suppression system is a specialized fire protection system designed to rapidly suppress certain high-risk fires using a dry chemical extinguishing agent. These systems can be used in industrial environments such as manufacturing facilities, paint booths, machinery areas, and other locations where specialized fire protection is required.",
  },
  {
    question:
      "Where are industrial dry chemical fire suppression systems used?",
    answer:
      "Industrial dry chemical systems are commonly used in high-risk areas such as manufacturing facilities, paint booths, machinery spaces, and locations involving combustible or flammable hazards. The appropriate suppression technology depends on the specific hazards, facility design, equipment, and applicable requirements.",
  },
  {
    question:
      "How often should a commercial fire suppression system be inspected?",
    answer:
      "Inspection and testing frequency depends on the type of fire suppression system and the applicable NFPA requirements. Desert In Alaska provides professional inspection, testing, maintenance, and compliance services to help commercial property owners maintain their fire protection systems.",
  },
  {
    question:
      "How much does commercial fire suppression installation cost in Detroit?",
    answer:
      "Commercial fire suppression installation costs vary based on the building size, protected hazards, system type, equipment, design requirements, installation complexity, and applicable code requirements. A professional site assessment is the most reliable way to determine the requirements and project cost for a specific facility.",
  },
  {
    question:
      "How much does commercial HVAC installation cost in Detroit?",
    answer:
      "The cost of commercial HVAC installation depends on factors such as building size, heating and cooling requirements, equipment type, system capacity, ductwork, electrical or mechanical modifications, accessibility, and installation complexity. Desert In Alaska can evaluate the property and determine the appropriate commercial HVAC solution.",
  },
  {
    question: "Can Desert In Alaska repair fire suppression systems?",
    answer:
      "Yes. Desert In Alaska provides fire suppression repair and emergency service for commercial and industrial facilities. Repairs may include addressing system problems, replacing components, performing modifications, and restoring the system to proper operating condition.",
  },
  {
    question: "Does Desert In Alaska offer emergency commercial service?",
    answer:
      "Yes. Desert In Alaska advertises emergency service for commercial fire protection and HVAC needs throughout Metro Detroit. Businesses can contact the company directly for urgent service requests.",
  },
  {
    question: "Is Desert In Alaska licensed and insured?",
    answer:
      "Desert In Alaska identifies itself on its website as a licensed and fully insured contractor and states that it has certified commercial technicians. The company also identifies its services as NAFED and NFPA certified.",
  },
  {
    question: "How long has Desert In Alaska served Detroit?",
    answer:
      "Desert In Alaska states that it has served Detroit and Metro Detroit since 1997. The company describes its experience as covering commercial HVAC, fire suppression, gas piping, exhaust hood systems, and other mechanical services.",
  },
  {
    question: "Does Desert In Alaska serve areas outside Detroit?",
    answer:
      "Yes. Desert In Alaska serves Detroit and the broader Metro Detroit area. Its service information also identifies coverage across communities and counties surrounding Detroit, including Wayne County, Macomb County, Oakland County, and Washtenaw County for certain commercial fire protection services.",
  },
  {
    question:
      "How does Desert In Alaska handle a commercial fire protection project?",
    answer:
      "A typical project begins with a site inspection to understand the facility and identify requirements. The team then develops a system design, completes installation, performs compliance testing, and provides ongoing maintenance when required.",
  },
  {
    question: "Can Desert In Alaska help with NFPA compliance?",
    answer:
      "Yes. Desert In Alaska provides fire suppression inspection, testing, maintenance, and compliance-related services. The company's website emphasizes NFPA-compliant fire protection systems for commercial and industrial facilities. Specific compliance requirements depend on the property, system, hazard classification, and applicable codes and standards.",
  },
  {
    question:
      "Why should a commercial property have its fire suppression system professionally maintained?",
    answer:
      "Professional inspection and maintenance help identify system deficiencies, damaged components, improper conditions, or other issues that could affect system performance. Regular service also helps commercial property owners maintain applicable safety and compliance requirements.",
  },
  {
    question: "How can I get a quote from Desert In Alaska?",
    answer:
      "You can contact Desert In Alaska to request a commercial service consultation or on-site inspection. The company lists its Detroit office at 11402 Schaefer Hwy, Detroit, MI 48227, with phone number 313-931-3070 and email desertinalaska@outlook.com.",
  },
  {
    question: "What areas does Desert In Alaska serve?",
    answer:
      "Desert In Alaska serves Detroit and Metro Detroit, including commercial and industrial properties in surrounding communities. Service coverage can vary by project and service type, so businesses outside Detroit should contact the company to confirm availability.",
  },
];

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e6ddd5] bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3">
          <span className="shrink-0 font-semibold text-[#8b5428]">Q:</span>

          <h3 className="text-base font-medium leading-snug text-[#3b2a1f] sm:text-lg">
            {faq.question}
          </h3>
        </div>

        <ChevronDown
          size={20}
          className={`shrink-0 text-[#8b5428] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-[#f1e7de] px-5 py-5 md:px-6">
            <div className="flex items-start gap-3">
              <span className="shrink-0 font-semibold text-[#8b5428]">
                A:
              </span>

              <p className="text-sm leading-relaxed text-[#6b5a4d] sm:text-base">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqHomePage() {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  // Only show the first 4 FAQs on the homepage
  const displayedFaqs = faqs.slice(0, 4);

  return (
    <section className="bg-[#f8f5f2] py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 text-center md:mb-14">
          <h2 className="text-3xl font-semibold tracking-tight text-[#3b2a1f] md:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#6b5a4d] sm:text-base">
            Answers to common questions about commercial fire suppression,
            inspections, compliance, and installation services in Detroit.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {displayedFaqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
            />
          ))}
        </div>

        {/* Read More Button */}
        <div className="mt-8 text-center">
          <Link
            href="/faqs"
            className="inline-flex items-center justify-center rounded-lg bg-[#8b5428] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#70431f]"
          >
            Read More FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}