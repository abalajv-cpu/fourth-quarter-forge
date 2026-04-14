import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "NIL has changed what athletes are focused on. How does 3Qtr help coaches keep athletes locked in on performance?",
    answer:
      "NIL creates real external pressure — brand deals, social media obligations, agent conversations — all competing for an athlete's mental bandwidth. 3Qtr uses the Indigo assessment to help each athlete understand their personal motivators and values. When an athlete knows why they compete and what drives them at their core, outside noise becomes easier to manage. Coaches get a clearer picture of who needs anchoring — and how to have those conversations before distraction becomes a performance issue.",
  },
  {
    question: "With NIL money on the table, team culture is harder to protect. Can 3Qtr help with that?",
    answer:
      "Compensation disparity within a locker room is one of the fastest ways to fracture team cohesion — and coaches are navigating it in real time. 3Qtr's DISC assessment maps the behavioral styles across your roster so you can see where tension is likely to surface before it does. It also gives coaches and athletes a shared language to talk about roles, respect, and accountability — without it feeling like a culture lecture.",
  },
  {
    question: "NIL means athletes are thinking about their personal brand earlier than ever. How does 3Qtr fit into that?",
    answer:
      "Brand is behavior. How an athlete shows up in practice, handles pressure, responds to criticism, communicates with teammates — that is the brand. 3Qtr's EQ assessment helps athletes understand their emotional intelligence profile so they can develop the self-awareness and interpersonal skills that make them marketable beyond their sport. Coaches who invest in this become known as developers of the whole athlete — which is a recruiting advantage in its own right.",
  },
  {
    question: "Transfers are at an all-time high, partly because of NIL. How can 3Qtr help coaches retain talent?",
    answer:
      "Athletes leave programs when they feel unseen, misused, or disconnected from the coaching staff. The DISC + Indigo combination gives coaches a roadmap for how each athlete is wired — their communication preferences, what they need to feel valued, and where their ambitions are pointed. When coaches speak to what actually drives an individual athlete, retention becomes a relationship, not a sales pitch.",
  },
  {
    question: "Recruits and their families are more sophisticated now. How does 3Qtr strengthen a program's recruiting pitch?",
    answer:
      "Today's recruits are asking: Will this coach develop me as a person, not just a player? 3Qtr gives programs a tangible, credentialed answer to that question. Incorporating behavioral assessments into your player development model signals that your program invests in the science of performance — not just Xs and Os. That's a differentiator in a recruiting conversation, and it gives families confidence that their student-athlete will be understood and developed with intention.",
  },
  {
    question: "Some NIL deals create athletes who act like free agents inside the program. How do assessments help with that?",
    answer:
      "The athlete hasn't changed — their leverage has. 3Qtr's approach helps coaches understand the behavioral profile of an athlete who may be pulling away from team identity. The EQ assessment specifically surfaces how an athlete manages self-regulation and relationships under pressure. Once a coach understands the why behind that behavior, they can make a deliberate choice — re-engage the athlete with a targeted approach, or prepare the team for a potential transition. Either way, you're leading proactively, not reacting.",
  },
];

const NilFaq = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-secondary/30">
        <div className="relative z-10 container mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              label="NIL & Coaching"
              title="Coaching in the NIL Era Requires a New Edge"
            />
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto text-center">
              Name, Image &amp; Likeness changed the game for athletes. Here's how 3Qtr helps coaches stay ahead of it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-3xl">
          <AnimatedSection>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-sm px-6 bg-secondary/20">
                  <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                    <span className="mr-4 text-primary font-display">{String(i + 1).padStart(2, "0")}</span>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-[15px]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection delay={0.2}>
            <div className="text-center mt-20">
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                NIL changed the game. Your development model <span className="text-gradient-gold">should too.</span>
              </h2>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-gold-gradient text-primary-foreground rounded-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  Contact 3Qtr <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default NilFaq;
