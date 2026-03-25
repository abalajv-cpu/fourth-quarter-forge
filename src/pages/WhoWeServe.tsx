import { Link } from "react-router-dom";
import { ArrowRight, Shield, Award, Users, Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const audiences = [
  {
    icon: Shield,
    title: "Varsity High School Programs",
    description: "High school is where competitive habits are formed. 3QTR helps varsity programs develop team culture, communication skills, and leadership among student-athletes — setting the foundation for college-level performance.",
    benefits: [
      "Build leadership pipelines within your program",
      "Improve athlete-coach communication",
      "Develop emotional intelligence early",
      "Strengthen team cohesion and accountability",
    ],
  },
  {
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
  },
  {
    icon: Users,
    title: "AAU & Club Sports",
    description: "Club and AAU programs bring together athletes from different backgrounds, coaches, and cultures. 3QTR helps these teams build rapid cohesion, communication, and competitive unity — even with limited time together.",
    benefits: [
      "Accelerated team bonding and cohesion",
      "Communication frameworks for diverse groups",
      "Tournament-ready mental and emotional preparation",
      "Coach and parent alignment strategies",
    ],
  },
  {
    icon: Heart,
    title: "Parents of Student-Athletes",
    description: "Parents are a critical part of the performance ecosystem. 3QTR provides parents with insights into their child's behavioral style, motivators, and communication preferences — strengthening the support system around every athlete.",
    benefits: [
      "Understand your athlete's communication and motivation style",
      "Support their development with validated insights",
      "Improve parent-coach-athlete relationships",
      "Navigate the recruiting and college selection process with clarity",
    ],
  },
];

const WhoWeServe = () => (
  <main className="pt-20">
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            label="Audiences"
            title="Who We Serve"
            description="3QTR works with competitive sports programs and families committed to developing the complete athlete."
          />
        </AnimatedSection>

        <div className="space-y-12 max-w-4xl mx-auto">
          {audiences.map((a, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="p-8 md:p-10 rounded-sm border border-border bg-card hover:border-primary/30 transition-colors">
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

export default WhoWeServe;
