export default function SectionHeading({
  lines,
  light,
}: {
  lines: readonly string[];
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-4 py-3 pr-3 md:gap-6 md:py-5 md:pr-5">
      <div className={`h-[60px] w-[3px] shrink-0 md:h-[90px] ${light ? "bg-white" : "bg-pink"}`} />
      <h2 className={`text-[22px] font-bold leading-tight sm:text-[26px] md:text-[29px] lg:text-[26px] ${light ? "text-white" : "text-dark"}`}>
        {lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </h2>
    </div>
  );
}
