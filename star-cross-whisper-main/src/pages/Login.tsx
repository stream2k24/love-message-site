import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import StarField from "@/components/StarField";

const EXPECTED = {
  name: "umukundwa audrine",
  dob: "17/12/2010",
  brother: "derrick",
  lastSms: "yg",
};

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [brother, setBrother] = useState("");
  const [lastSms, setLastSms] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState<"form" | "welcome">("form");

  const normalize = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const nameOk = normalize(name) === EXPECTED.name;
    const dobOk = dob.trim() === EXPECTED.dob;
    const brotherOk = normalize(brother) === EXPECTED.brother;
    const smsOk = normalize(lastSms) === EXPECTED.lastSms;

    if (nameOk && dobOk && brotherOk && smsOk) {
      setStep("welcome");
    } else {
      setError("Hmm… that doesn't quite match. Try again, gently.");
    }
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 text-foreground">
      <StarField density={100} />

      <AnimatePresence mode="wait">
        {step === "form" ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
            className="relative z-10 w-full max-w-md"
          >
            <div className="text-center mb-10">

              <h1 className="font-serif text-3xl md:text-4xl leading-tight mb-4">
                A letter waits <br />
                <span className="italic text-gradient">behind these stars.</span>
              </h1>
              <p className="text-sm text-moonlight/70 font-serif italic">
                Tell me it's really you.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl border border-rose-gold/30 bg-card/40 backdrop-blur-md glow-soft space-y-5"
            >
              <div>
                <label className="block text-xs uppercase tracking-[0.3em] text-rose-gold/80 mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  className="w-full bg-transparent border-b border-border/60 focus:border-rose-gold outline-none py-2 font-serif text-lg text-foreground placeholder:text-muted-foreground/50 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.3em] text-rose-gold/80 mb-2">
                  Date of birth
                </label>
                <input
                  type="text"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  placeholder="DD/MM/YYYY"
                  className="w-full bg-transparent border-b border-border/60 focus:border-rose-gold outline-none py-2 font-serif text-lg text-foreground placeholder:text-muted-foreground/50 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.3em] text-rose-gold/80 mb-2">
                  Your brother's name
                </label>
                <input
                  type="text"
                  value={brother}
                  onChange={(e) => setBrother(e.target.value)}
                  placeholder="First name"
                  className="w-full bg-transparent border-b border-border/60 focus:border-rose-gold outline-none py-2 font-serif text-lg text-foreground placeholder:text-muted-foreground/50 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.3em] text-rose-gold/80 mb-2">
                  The last SMS you sent me
                </label>
                <input
                  type="text"
                  value={lastSms}
                  onChange={(e) => setLastSms(e.target.value)}
                  placeholder="Just the words"
                  className="w-full bg-transparent border-b border-border/60 focus:border-rose-gold outline-none py-2 font-serif text-lg text-foreground placeholder:text-muted-foreground/50 transition-colors"
                  required
                />
              </div>

              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-rose-gold/90 font-serif italic text-center"
                >
                  {error}
                </motion.p>
              )}

              <button
                type="submit"
                className="w-full mt-4 px-8 py-4 rounded-full border border-rose-gold/40 text-rose-gold hover:bg-rose-gold hover:text-primary-foreground transition-all duration-700 font-serif italic text-base tracking-wide glow-soft"
              >
                Open the letter
              </button>
            </form>

            <p className="text-center text-xs text-muted-foreground/60 mt-8 tracking-widest uppercase">
              Written under the same sky
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-2xl text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -40 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="flex justify-center mb-8"
            >
              <Heart className="h-12 w-12 text-rose-gold fill-rose-gold/40 glow-star" />
            </motion.div>

            <motion.h2

              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 2, delay: 0.9 }}
              className="font-serif text-2xl md:text-4xl leading-relaxed text-foreground/95 mb-6"
            >
              "Hey, ni happy ukwandikiye."
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1.6 }}
              className="font-serif italic text-lg md:text-xl text-moonlight/90 leading-relaxed max-w-xl mx-auto"
            >
              Feel free to read this message and retain in mind that{" "}
              <span className="text-gradient not-italic font-semibold">I LOVE YOU!!!</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 2.4 }}
            >
              <button
                onClick={() => navigate("/letter")}
                className="mt-14 px-10 py-4 rounded-full border border-rose-gold/40 text-rose-gold hover:bg-rose-gold hover:text-primary-foreground transition-all duration-700 font-serif italic text-base tracking-wide glow-soft"
              >
                Continue →
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Login;
