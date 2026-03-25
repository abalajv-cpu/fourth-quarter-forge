import { Link } from "react-router-dom";
import { Award, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              label="About"
              title="The Woman Behind 3QTR"
              description="Athlete. Engineer. Executive. Coach. A rare combination of experience, passion, and purpose."
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6 max-w-4xl">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
              <div className="md:col-span-3 space-y-6">
                <h3 className="font-display text-2xl font-bold">Colette M. Hosie</h3>
                <div className="gold-divider-left" />
                <p className="text-muted-foreground leading-relaxed">
                  Colette's journey began as a competitive athlete, where she experienced firsthand the power — and the gaps — of team dynamics. That early insight became a lifelong mission.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a background in engineering and 29 years of Fortune 500 executive leadership, Colette understands systems, strategy, and people. As an NCAA-certified AAU coach and Hall of Fame team member, she brings an unmatched perspective to sports performance.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  3QTR was born from the belief that the missing piece of team performance isn't physical or tactical — it's human. Communication, motivation, leadership, emotional intelligence, and cohesion are the factors that separate good teams from great ones.
                </p>
              </div>
              <div className="md:col-span-2 space-y-4">
                {[
                  { label: "Athlete & Engineer", color: "text-primary" },
                  { label: "NCAA-Certified AAU Coach", color: "text-primary" },
                  { label: "29-Year Fortune 500 Executive", color: "text-primary" },
                  { label: "Hall of Fame Team Member", color: "text-primary" },
                  { label: "DISC Certified", color: "text-brand-disc" },
                  { label: "Indigo Certified", color: "text-brand-indigo" },
                  { label: "EQ Certified", color: "text-brand-eq" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-sm bg-secondary/30 border border-border">
                    <Award size={16} className={`${c.color} shrink-0`} />
                    <span className="text-sm font-medium">{c.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <AnimatedSection>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 block">Philosophy</span>
            <blockquote className="font-display text-2xl md:text-3xl font-bold italic leading-relaxed text-foreground">
              "Every team has untapped potential. The difference between winning and dominating lives in the human connections your team builds — on and off the field."
            </blockquote>
            <p className="mt-6 text-primary font-semibold">— Colette M. Hosie</p>
            <div className="gold-divider mt-8" />
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <SectionHeading label="Values" title="What Drives 3QTR" />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Integrity", desc: "Honest, data-driven insights that serve the athlete first." },
              { title: "Excellence", desc: "Premium quality in every assessment, workshop, and engagement." },
              { title: "Impact", desc: "Measurable improvements in communication, leadership, and cohesion." },
              { title: "Partnership", desc: "Long-term relationships built on trust and shared commitment to growth." },
            ].map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-8 rounded-sm border border-border bg-secondary/20 text-center">
                  <h3 className="font-display text-lg font-semibold text-primary mb-3">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Ready to <span className="text-gradient-gold">Unlock</span> Your Team's Potential?</h2>
            <div className="mt-8">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-gold-gradient text-primary-foreground rounded-sm uppercase tracking-wider hover:opacity-90 transition-opacity">
                Start the Conversation <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default About;
