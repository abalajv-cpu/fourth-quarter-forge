import { useState } from "react";
import { Link } from "react-router-dom";
import { Award, ArrowRight, GraduationCap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ExpandableCredential from "@/components/ExpandableCredential";
import AssessmentModal from "@/components/AssessmentModal";
import founderGreenShirt from "@/assets/founder-green-shirt.jpg";
import coachingSession from "@/assets/coaching-session.jpg";
import athletesBanner2 from "@/assets/athletes-banner-2.jpg";
import performanceAbstract from "@/assets/performance-abstract.jpg";

const About = () => {
  const [assessModal, setAssessModal] = useState(false);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img src={coachingSession} alt="" loading="lazy" width={1280} height={720} className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative z-10 container mx-auto px-6">
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
        <div className="container mx-auto px-6 max-w-5xl">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
              <div className="md:col-span-2">
                <div className="relative">
                  <img src={founderGreenShirt} alt="Colette M. Hosie, Founder of 3QTR" loading="lazy" width={800} height={1024} className="w-full rounded-sm object-cover aspect-[3/4]" />
                  <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-primary/40 rounded-br-sm" />
                </div>
              </div>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  <ExpandableCredential
                    label="Athlete & Hall of Fame Team Member"
                    details="Missouri University of Science & Technology Women's Varsity Basketball"
                  />
                  <ExpandableCredential label="NCAA-Certified AAU Coach" />
                  <ExpandableCredential
                    label="29-Year Fortune 500 Executive"
                    details={
                      <ul className="space-y-1">
                        <li>• Harley Davidson</li>
                        <li>• Texas Instruments</li>
                        <li>• Tiffany & Co.</li>
                        <li>• Amazon</li>
                        <li>• Nike, Inc.</li>
                      </ul>
                    }
                  />
                  <ExpandableCredential
                    icon={<GraduationCap size={16} className="text-primary shrink-0" />}
                    label="Engineer & MBA"
                    details={
                      <ul className="space-y-1">
                        <li>• BS – Mechanical Engineering – Missouri University of Science & Technology, Rolla, MO</li>
                        <li>• MBA – University of Dallas, Irving, TX</li>
                      </ul>
                    }
                  />
                  <div className="flex items-center gap-3 p-3 rounded-sm bg-secondary/30 border border-border sm:col-span-2">
                    <span className="text-sm font-medium">Triple-Certified:</span>
                    <div className="flex gap-2">
                      <button onClick={() => setAssessModal(true)} className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider rounded-sm text-white bg-brand-indigo hover:opacity-80 transition-opacity cursor-pointer">Indigo</button>
                      <button onClick={() => setAssessModal(true)} className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider rounded-sm text-white bg-brand-disc hover:opacity-80 transition-opacity cursor-pointer">DISC</button>
                      <button onClick={() => setAssessModal(true)} className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider rounded-sm text-white bg-brand-eq hover:opacity-80 transition-opacity cursor-pointer">EQ</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Assess Modal */}
      <AssessmentModal isOpen={assessModal} onClose={() => setAssessModal(false)} title="Assessment Certifications">
        <div className="space-y-6">
          <div>
            <h4 className="font-display text-lg font-semibold text-brand-indigo mb-2">Indigo</h4>
            <p>A motivational assessment that uncovers why athletes and coaches do what they do. Indigo measures 12 driving forces that shape attitude, effort, and commitment — helping programs align individual purpose with team goals to unlock sustained motivation and reduce burnout.</p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold text-brand-disc mb-2">DISC</h4>
            <p>A behavioral assessment that reveals how individuals communicate, compete, and collaborate under pressure. DISC identifies four core behavioral styles — Dominance, Influence, Steadiness, and Conscientiousness — giving coaches and athletes a shared language for building trust, managing conflict, and performing when it matters most.</p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold text-brand-eq mb-2">EQ (Emotional Intelligence)</h4>
            <p>An assessment that measures an individual's ability to recognize, understand, and manage emotions — both their own and others'. For coaches and athletes alike, high EQ translates to better decision-making under pressure, stronger team chemistry, and the mental resilience to push through adversity.</p>
          </div>
        </div>
      </AssessmentModal>

      {/* Athletes Celebration Divider */}
      <section className="relative h-56 md:h-72 overflow-hidden">
        <img src={athletesBanner2} alt="Athletes celebrating victory" loading="lazy" width={1920} height={640} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/40" />
      </section>

      {/* Philosophy */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img src={performanceAbstract} alt="" loading="lazy" width={1280} height={856} className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-background/90" />
        <div className="relative z-10 container mx-auto px-6 max-w-3xl text-center">
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
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img src={coachingSession} alt="" loading="lazy" width={1280} height={720} className="absolute inset-0 w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-background/90" />
        <div className="relative z-10 container mx-auto px-6 text-center">
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
