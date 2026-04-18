import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

interface HiddenMessageProps {
  hint: string;
  message: string;
}

const HiddenMessage = ({ hint, message }: HiddenMessageProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-8">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-rose-gold transition-colors duration-500 italic font-serif"
        >
          <Sparkles className="h-3.5 w-3.5 group-hover:animate-twinkle" />
          <span className="border-b border-dashed border-muted-foreground/40 group-hover:border-rose-gold/60 pb-0.5">
            {hint}
          </span>
        </button>
      ) : (
        <AnimatePresence>
          <motion.p
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-xl md:text-2xl italic text-rose-gold leading-relaxed"
          >
            “{message}”
          </motion.p>
        </AnimatePresence>
      )}
    </div>
  );
};

export default HiddenMessage;
