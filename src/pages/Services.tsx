import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import FaqSection from "@/components/FaqSection";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import coachingSession from "@/assets/coaching-session.jpg";
import serviceAthleteProfile from "@/assets/service-athlete-profile.jpg";
import serviceCoachingStaff from "@/assets/service-coaching-staff.jpg";
import service3qtrEdge from "@/assets/service-3qtr-edge.jpg";
import serviceSeasonRetainer from "@/assets/service-season-retainer.jpg";

const services = [
  {
    title: "Student-Athlete Profile",
    price: "Custom packages available",
    image: serviceAthleteProfile,
    description: "A comprehensive behavioral and motivational profile for each athlete. Understand how they communicate, what drives them, and how they respond under pressure. Equip coaches with the insights to lead each individual more effectively.",
    features: [
      "Science-based assessments delivering behavioral style and emotional intelligence insights for coaching staff alignment and growth.",
      "Personalized development report",
      "Coach consultation on athlete dynamics",
    ],
  },
  {
    title: "Coaching Staff Development",
    price: "Custom packages available",
    image: serviceCoachingStaff,
    description: "Elevate your coaching staff's ability to communicate, motivate, and lead. This program develops emotional intelligence and behavioral awareness across your entire coaching team.",
    features: [
      "Behavioral Assessment for each coach",
      "Emotional Quotient Assessment",
      "Team communication workshop",
      "Conflict resolution and leadership strategies",
    ],
  },
  {
    title: "The 3QTR Edge",
    price: "Custom packages available",
    image: service3qtrEdge,
    description: "Our flagship program, a comprehensive, season-long performance system that integrates athlete profiling, coaching development, team cohesion workshops, and ongoing strategic support.",
    features: [
      "Full athlete profiling (behavior, motivators, skills)",
      "Coaching staff behavioral and Emotional Quotient profiling",
      "Team cohesion and communication workshops",
      "Leadership development for captains",
      "Mid-season and post-season performance reviews",
      "Direct access to 3QTR consulting",
    ],
    featured: true,
  },
  {
    title: "Season Retainer",
    price: "Custom packages available",
    image: serviceSeasonRetainer,
    description: "Continuous strategic consulting throughout your competitive season. On-demand support for coaches, athletes, and parents, keeping your team aligned, motivated, and performing.",
    features: [
      "Monthly consulting sessions",
      "On-demand coaching support",
      "Real-time conflict mediation",
      "Parent communication support",
      "Season performance tracking",
    ],
  },
];

const Services = () => (
  <main className="pt-20">
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img src={coachingSession} alt="" loading="lazy" width={1280} height={720} className="absolute inset-0 w-full h-full object-cover opacity-15" />
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative z-10 container mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            label="Services"
            title="Performance Solutions"
            description="Scientifically validated assessments combined with elite consulting experience. Choose the program that fits your team's needs."
          />
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="space-y-8 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className={`overflow-hidden rounded-sm border ${s.featured ? "border-primary bg-primary/5 ring-1 ring-primary/20" : "border-border bg-card"} hover:border-primary/50 transition-colors`}>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="md:col-span-1 h-48 md:h-full overflow-hidden">
                    <img src={s.image} alt={s.title} loading="lazy" width={1024} height={768} className="w-full h-full object-cover" />
                  </div>
                  <div className="md:col-span-2 p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        {s.featured && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                            <Star size={14} /> Flagship Program
                          </span>
                        )}
                        <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                      </div>
                      <span className="text-lg font-semibold text-primary whitespace-nowrap">{s.price}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">{s.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {s.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* FAQ */}
        <FaqSection faqs={[
          { question: "Transfers are at an all-time high, partly because of NIL. How can 3Qtr help coaches retain talent?", answer: "Athletes leave programs when they feel unseen, misused, or disconnected from the coaching staff. The DISC + Indigo combination gives coaches a roadmap for how each athlete is wired — their communication preferences, what they need to feel valued, and where their ambitions are pointed." },
          { question: "Some NIL deals create athletes who act like free agents inside the program. How do assessments help?", answer: "3Qtr's approach helps coaches understand the behavioral profile of an athlete who may be pulling away from team identity. The EQ assessment specifically surfaces how an athlete manages self-regulation and relationships under pressure, so coaches can lead proactively." },
        ]} />

        <AnimatedSection delay={0.3}>
          <div className="text-center mt-16">
            <h3 className="font-display text-2xl font-bold mb-4">Not Sure Which Program Is Right?</h3>
            <p className="text-muted-foreground mb-8">Schedule a free discovery call and we'll build a custom recommendation for your team.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-gold-gradient text-primary-foreground rounded-sm uppercase tracking-wider hover:opacity-90 transition-opacity">
              Book a Discovery Call <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </main>
);

export default Services;
