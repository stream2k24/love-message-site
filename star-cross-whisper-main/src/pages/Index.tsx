import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Heart } from "lucide-react";
import StarField from "@/components/StarField";
import Reveal from "@/components/Reveal";
import MusicToggle from "@/components/MusicToggle";
import HiddenMessage from "@/components/HiddenMessage";
import SectionLabel from "@/components/SectionLabel";

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="relative min-h-screen text-foreground">
      <StarField density={140} />
      <MusicToggle />

      {/* ───────────── HERO ───────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-4xl text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="text-xs uppercase tracking-[0.4em] text-rose-gold/80 mb-8"
          >
            ✦ A letter written in starlight ✦
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-8"
          >
            Even in silence,<br />
            <span className="text-gradient italic">my heart still speaks</span><br />
            your name.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.4 }}
            className="font-serif italic text-lg md:text-xl text-moonlight/80 max-w-xl mx-auto"
          >
            This is not a goodbye. <br className="md:hidden" />
            It's a pause — while I become better.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2.2 }}
            className="mt-20 flex flex-col items-center gap-3 text-moonlight/50"
          >
            <span className="text-xs tracking-widest uppercase">Scroll gently</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </motion.div>
        </motion.div>
      </section>

      {/* ───────────── OUR STORY ───────────── */}
      <section className="relative py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <SectionLabel number="I." label="Our Story" />
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl md:text-6xl mb-12 leading-tight">
              We met like two stars <br />
              <span className="italic text-rose-gold">finding each other in the dark.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-moonlight/90 font-light">
              <p>
                I still remember the way the world felt softer when you were near. Conversations
                that stretched into the early hours. The quiet laughter. The way you understood
                me without me having to explain.
              </p>
              <p>
                You were not just someone I loved — you were the person who made love feel
                possible. Real. Worth becoming better for.
              </p>
            </div>
          </Reveal>

          {/* Timeline */}
          <Reveal delay={0.3}>
            <div className="mt-20 space-y-10 border-l border-border/60 pl-8 relative">
              {[
                { moment: "The first hello", note: "And how the air changed." },
                { moment: "The quiet middle", note: "Where you became home." },
                { moment: "The unspoken pause", note: "Where I had to learn myself again." },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  className="relative"
                >
                  <span className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-rose-gold glow-star" />
                  <h3 className="font-serif text-2xl text-starlight italic">{m.moment}</h3>
                  <p className="text-muted-foreground mt-1">{m.note}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────── THE TRUTH ───────────── */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "var(--gradient-aurora)" }}
        />
        <div className="relative max-w-3xl mx-auto">
          <Reveal>
            <SectionLabel number="II." label="The Truth" />
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl md:text-6xl mb-12 leading-tight">
              I was carrying storms <br />
              <span className="italic text-rose-gold">you couldn't see.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-moonlight/90 font-light">
              <p>
                There were things in my mind I hadn't learned to hold. Quiet battles I fought
                without telling you. And in trying to protect you from them, I ended up
                protecting myself from the love you were offering.
              </p>
              <p>
                I lost parts of myself somewhere along the way — and in that losing,
                I couldn't love you the way you deserved to be loved.
              </p>
              <p className="text-starlight">
                That was never your fault. It was mine to carry, and mine to heal.
              </p>
            </div>
          </Reveal>

          <HiddenMessage
            hint="Something I never said out loud"
            message="I'm sorry for the silences I let grow. You deserved my whole heart, not its echo."
          />
        </div>
      </section>

      {/* ───────────── GROWTH ───────────── */}
      <section className="relative py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <SectionLabel number="III." label="The Becoming" />
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl md:text-6xl mb-12 leading-tight">
              I am building a quieter <br />
              <span className="italic text-rose-gold">stronger version of me.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl leading-relaxed text-moonlight/90 font-light mb-16">
              Not to win anyone back. Not as a performance. Just because I owe it to myself,
              and to whoever shares my life next — even if that's only me.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Mind", note: "Sitting with the things I used to run from." },
              { title: "Heart", note: "Learning to love without losing myself." },
              { title: "Soul", note: "Choosing peace, again and again, every day." },
            ].map((card, i) => (
              <Reveal key={card.title} delay={0.3 + i * 0.15}>
                <div className="p-8 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm h-full hover:border-rose-gold/40 transition-all duration-700 glow-soft">
                  <div className="text-xs uppercase tracking-[0.3em] text-rose-gold/80 mb-4">
                    {card.title}
                  </div>
                  <p className="font-serif text-xl italic text-starlight leading-relaxed">
                    {card.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.6}>
            <blockquote className="mt-20 font-serif italic text-2xl md:text-3xl text-center text-moonlight border-l-2 border-rose-gold/60 pl-6 max-w-2xl mx-auto">
              "Healing is not forgetting. It's learning to carry the weight without letting it
              shape who I become."
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ───────────── MESSAGE TO HER (Letter) ───────────── */}
      <section className="relative py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <SectionLabel number="IV." label="To You" />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="p-8 md:p-14 rounded-3xl border border-rose-gold/30 bg-card/30 backdrop-blur-md glow-soft relative">
              <Heart className="absolute -top-4 left-10 h-8 w-8 text-rose-gold fill-rose-gold/30 bg-background p-1 rounded-full" />

              <p className="font-serif italic text-rose-gold mb-8 text-lg">My love,</p>

              <div className="space-y-6 font-serif text-lg md:text-xl leading-relaxed text-foreground/90">
                <p>
                  I don't know if you'll ever read this. And maybe that's okay. Maybe some
                  letters are written more for the writer than the reader.
                </p>
                <p>
                  But if your eyes ever land on these words — I want you to know that the love
                  I had for you didn't end. It only learned to be quieter. More patient. Less
                  in the way of your life.
                </p>
                <p>
                  Live fully. Laugh loudly. Be loved the way you deserve. I am not here to
                  hold you to any past. I'm only here, in my own corner of the sky, becoming.
                </p>
                <p className="text-starlight">
                  And if life ever brings us back to the same page — I want to meet you as a
                  better version of the person you once knew. Not perfect. Just <em>truer</em>.
                </p>
              </div>

              <p className="mt-10 font-serif italic text-rose-gold">— Always, in some way, yours.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────── HOPE ───────────── */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <SectionLabel number="V." label="The Sky Ahead" />
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl md:text-6xl mb-10 leading-tight">
              I'm not chasing you. <br />
              <span className="italic text-gradient">I'm just trusting the sky.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl leading-relaxed text-moonlight/90 font-light max-w-xl mx-auto">
              Stars that are meant to align, eventually do. Roads that are meant to cross,
              find a way. Until then, I'll be walking mine — gently, honestly, hopefully.
            </p>
          </Reveal>

          {/* Symbolic constellation */}
          <Reveal delay={0.4}>
            <div className="mt-20 relative h-48 mx-auto max-w-md">
              <svg viewBox="0 0 400 200" className="w-full h-full">
                <defs>
                  <radialGradient id="starGlow">
                    <stop offset="0%" stopColor="hsl(var(--starlight))" stopOpacity="1" />
                    <stop offset="100%" stopColor="hsl(var(--starlight))" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <motion.path
                  d="M 50 150 Q 150 50, 250 100 T 380 60"
                  stroke="hsl(var(--rose-gold))"
                  strokeWidth="0.8"
                  strokeDasharray="3 6"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
                {[
                  [50, 150], [150, 90], [250, 100], [320, 75], [380, 60],
                ].map(([cx, cy], i) => (
                  <motion.g
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.4 }}
                  >
                    <circle cx={cx} cy={cy} r="14" fill="url(#starGlow)" />
                    <circle cx={cx} cy={cy} r="2.5" fill="hsl(var(--starlight))" />
                  </motion.g>
                ))}
              </svg>
              <p className="font-serif italic text-sm text-muted-foreground mt-4">
                — Two paths, one sky —
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────── CLOSING ───────────── */}
      <section className="relative py-40 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-rose-gold/80 mb-10">✦ Until then ✦</p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight italic text-gradient mb-12">
              "I'll be becoming someone <br />
              worthy of the love we once had."
            </h2>
          </Reveal>

          <Reveal delay={0.5}>
            <button
              onClick={() => {
                const el = document.getElementById("final-note");
                el?.classList.remove("opacity-0");
                el?.classList.add("opacity-100");
              }}
              className="mt-8 px-8 py-4 rounded-full border border-rose-gold/40 text-rose-gold hover:bg-rose-gold hover:text-primary-foreground transition-all duration-700 font-serif italic text-base tracking-wide glow-soft"
            >
              If you ever find this…
            </button>
          </Reveal>

          <p
            id="final-note"
            className="mt-12 font-serif italic text-xl md:text-2xl text-starlight opacity-0 transition-opacity duration-[2000ms]"
          >
            …just know — this was always for you. ✦
          </p>

          <Reveal delay={0.7}>
            <div className="mt-24 pt-10 border-t border-border/40">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60">
                Written under the same sky we once shared
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Index;
