interface SectionLabelProps {
  number: string;
  label: string;
}

const SectionLabel = ({ number, label }: SectionLabelProps) => {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="font-serif italic text-rose-gold/80 text-sm tracking-widest">{number}</span>
      <span className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-rose-gold/60 to-transparent" />
      <span className="text-xs uppercase tracking-[0.3em] text-moonlight/70">{label}</span>
    </div>
  );
};

export default SectionLabel;
