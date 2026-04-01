import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Shield, Award, Users, Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import studentAthletes from "@/assets/student-athletes.jpg";
import teamHuddle from "@/assets/team-huddle.jpg";
import varsityAthletes from "@/assets/varsity-athletes.jpg";
import collegeAthletes from "@/assets/college-athletes.jpg";
import athletesBanner1 from "@/assets/athletes-banner-1.jpg";

const audiences = [
  {
    id: "varsity",
    icon: Shield,
    title: "Varsity High School Programs",
    description: "High school is where competitive habits are formed. 3QTR helps varsity programs develop team culture, communication skills, and leadership among student-athletes — setting the foundation for college-level performance.",
    benefits: [
      "Build leadership pipelines within your program",
      "Improve athlete-coach communication",
      "Develop emotional intelligence early",
      "Strengthen team cohesion and accountability",
    ],
    image: varsityAthletes,
  },
  {
    id: "college",
    icon: Award,
    title: "College Programs",
    subtitle: "D1, D2, D3, NAIA",
    description: "At the collegiate level, talent isn't the differentiator — team dynamics are. 3QTR equips college programs with the assessment tools and development strategies to maximize team chemistry and competitive performance.",
    benefits: [
      "Data-driven athlete profiling for roster management",
      "Coaching staff development and alignment",
      "Recruiting advantage through character and behavioral insights",
      "Season-long strategic performance consulting",
    ],
    image: collegeAthletes,
  },
  {
    id: "aau",
    icon: Users,
    title: "AAU & Club Sports",
    description: "Club and AAU programs bring together athletes from different backgrounds, coaches, and cultures. 3QTR helps these teams build rapid cohesion, communication, and competitive unity — even with limited time together.",
    benefits: [
      "Accelerated team bonding and cohesion",
      "Communication frameworks for diverse groups",
      "Tournament-ready mental and emotional preparation",
      "Coach and parent alignment strategies",
    ],
    image: teamHuddle,
  },
  {
    id: "parents",
    icon: Heart,
    title: "Parents of Student-Athletes",
    description: "Parents are a critical part of the performance ecosystem. 3QTR provides parents with insights into their child's behavioral style, motivators, and communication preferences — strengthening the support system around every athlete.",
    benefits: [
      "Understand your athlete's communication and motivation style",
      "Support their development with validated insights",
      "Improve parent-coach-athlete relationships",
      "Navigate the recruiting and college selection process with clarity",
    ],
    image: studentAthletes,
  },
];

const WhoWeServe = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "center" }), 300);
      }
    }
  }, [location.hash]);

  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img src={studentAthletes} alt="" loading="lazy" width={1280} height={720} className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 container mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              label="Audiences"
              title="Who We Serve"
              description="3QTR works with competitive sports programs and families committed to developing the complete athlete."
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Athletes Banner Divider */}
      <section className="relative h-48 md:h-64 overflow-hidden">
        <img src={athletesBanner1} alt="Diverse athletes in action across multiple sports" loading="lazy" width={1920} height={640} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-12 max-w-5xl mx-auto">
            {audiences.map((a, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div id={a.id} className={`rounded-sm border border-border bg-card hover:border-primary/30 transition-colors scroll-mt-24 overflow-hidden ${i % 2 === 0 ? '' : ''}`}>
                  {/* Image accent at top of each card */}
                  <div className="relative h-40 md:h-48 overflow-hidden">
                    <img src={a.image} alt={a.title} loading="lazy" width={1280} height={856} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card" />
                  </div>
                  <div className="p-8 md:p-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <a.icon size={22} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold">{a.title}</h3>
                        {a.subtitle && <span className="text-sm text-primary">{a.subtitle}</span>}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">{a.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {a.benefits.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="text-center mt-16">
              <h3 className="font-display text-2xl font-bold mb-4">See How 3QTR Can Help Your Program</h3>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-gold-gradient text-primary-foreground rounded-sm uppercase tracking-wider hover:opacity-90 transition-opacity">
                Get Started <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default WhoWeServe;
