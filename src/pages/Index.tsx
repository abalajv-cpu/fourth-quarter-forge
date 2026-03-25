import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Users, Brain, TrendingUp, Shield, Award, Lightbulb, Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 container mx-auto px-6 text-center py-32">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-6"
          >
            Sports Performance Consulting
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl mx-auto"
          >
            Unlocking the <span className="text-gradient-gold">4th Quarter</span> of Human Performance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Assessment-Based Performance Solutions for Competitive Sports Teams
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="px-8 py-4 text-sm font-semibold bg-gold-gradient text-primary-foreground rounded-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Book a Discovery Call
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 text-sm font-semibold border border-primary text-primary rounded-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Problem / Opportunity */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              label="The Gap"
              title="What Most Teams Are Missing"
              description="Teams invest heavily in physical training and tactical preparation — but the human side of performance is often overlooked."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="p-8 rounded-sm border border-border bg-secondary/30">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">What Teams Invest In</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-center gap-3"><TrendingUp size={18} className="text-primary shrink-0" /> Physical Training & Conditioning</li>
                  <li className="flex items-center gap-3"><Target size={18} className="text-primary shrink-0" /> Tactical & Strategic Preparation</li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="p-8 rounded-sm border border-primary/30 bg-primary/5">
                <h3 className="font-display text-lg font-semibold text-primary mb-4">What's Often Missing</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-center gap-3"><Users size={18} className="text-primary shrink-0" /> Communication & Team Cohesion</li>
                  <li className="flex items-center gap-3"><Heart size={18} className="text-primary shrink-0" /> Motivation & Emotional Intelligence</li>
                  <li className="flex items-center gap-3"><Brain size={18} className="text-primary shrink-0" /> Leadership Development</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The 3QTR Solution */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              label="The Solution"
              title="The Missing Quarter"
              description="3QTR bridges the gap between athletic talent and peak team performance. We use scientifically validated assessments to develop the human side of your team — so athletes and coaches perform better, together."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Brain, title: "Assess", desc: "DISC, Indigo & EQ assessments reveal each individual's strengths and growth areas." },
                { icon: Lightbulb, title: "Develop", desc: "Customized coaching strategies that turn insights into actionable development." },
                { icon: TrendingUp, title: "Perform", desc: "Cohesive teams that communicate, lead, and compete at the highest level." },
              ].map((s, i) => (
                <div key={i} className="text-center p-8">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <s.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder Preview */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3 block">Founder</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Colette M. Hosie</h2>
                <div className="gold-divider-left mb-6" />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A unique combination of athlete, engineer, and executive leader. With 29 years in Fortune 500 leadership, NCAA-certified AAU coaching experience, and triple certification in DISC, Indigo, and EQ — Colette brings a rare perspective to sports performance development.
                </p>
                <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider hover:gap-3 transition-all">
                  Read Full Bio <ArrowRight size={16} />
                </Link>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Athlete & Engineer", color: "text-primary" },
                  { label: "NCAA-Certified AAU Coach", color: "text-primary" },
                  { label: "29-Year Fortune 500 Executive", color: "text-primary" },
                  { label: "Hall of Fame Team Member", color: "text-primary" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-sm bg-secondary/30 border border-border">
                    <Award size={18} className={`${item.color} shrink-0`} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 p-4 rounded-sm bg-secondary/30 border border-border">
                  <span className="text-sm font-medium">Triple-Certified:</span>
                  <div className="flex gap-2">
                    <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider rounded-sm text-white bg-brand-disc">DISC</span>
                    <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider rounded-sm text-white bg-brand-indigo">Indigo</span>
                    <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider rounded-sm text-white bg-brand-eq">EQ</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              label="Services"
              title="Performance Solutions"
              description="Tailored assessment and development programs for every level of competitive sports."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Student-Athlete Profile", price: "From $225", desc: "Indigo + DISC assessments for individual athlete development." },
              { title: "Coaching Staff Development", price: "From $2,800", desc: "DISC + EQ programs for coaching staff alignment and growth." },
              { title: "The 3QTR Edge", price: "From $12,000", desc: "Our flagship comprehensive team performance program.", featured: true },
              { title: "Season Retainer", price: "From $750/mo", desc: "Ongoing strategic support throughout your competitive season." },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`p-8 rounded-sm border h-full flex flex-col ${s.featured ? "border-primary bg-primary/5 ring-1 ring-primary/20" : "border-border bg-card"} hover:border-primary/50 transition-colors`}>
                  {s.featured && <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Flagship</span>}
                  <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-primary font-semibold text-sm mb-4">{s.price}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{s.desc}</p>
                  <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider hover:gap-3 transition-all">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve Preview */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              label="Audiences"
              title="Who We Serve"
              description="From high school varsity to elite college programs, 3QTR empowers athletes, coaches, and parents."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Shield, title: "Varsity High School" },
              { icon: Award, title: "College Programs" },
              { icon: Users, title: "AAU & Club Sports" },
              { icon: Heart, title: "Parents" },
            ].map((a, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center p-8 rounded-sm border border-border bg-secondary/20 hover:border-primary/30 transition-colors">
                  <a.icon size={32} className="text-primary mx-auto mb-4" />
                  <h3 className="font-display text-base font-semibold">{a.title}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3}>
            <div className="text-center mt-10">
              <Link to="/who-we-serve" className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider hover:gap-3 transition-all">
                Explore All Audiences <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why 3QTR */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              label="Why 3QTR"
              title="Built Different"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Assessment-Based", desc: "Every recommendation is grounded in validated behavioral and emotional intelligence data." },
              { title: "Customized Solutions", desc: "No cookie-cutter programs. Every engagement is tailored to your team's unique needs." },
              { title: "Communication & Leadership", desc: "We develop the skills that separate good teams from championship-caliber teams." },
              { title: "Athlete + Executive + Coach", desc: "A rare blend of real-world experience from the field, the boardroom, and the bench." },
            ].map((w, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-8 rounded-sm border border-border bg-card hover:border-primary/30 transition-colors">
                  <h3 className="font-display text-lg font-semibold mb-3 text-primary">{w.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto leading-tight">
              Let's Talk About What Your Team Is <span className="text-gradient-gold">Missing</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
              Schedule a complimentary discovery call to explore how 3QTR can elevate your team's performance.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-block px-10 py-4 text-sm font-semibold bg-gold-gradient text-primary-foreground rounded-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Book Your Discovery Call
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Home;
