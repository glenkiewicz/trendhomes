export default function SectionHeading({
  lines,
  light,
}: {
  lines: string[];
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-4 py-4 pr-4 md:gap-6 md:py-6 md:pr-6">
      <div className={`h-[60px] w-[3px] shrink-0 md:h-[90px] ${light ? "bg-white" : "bg-pink"}`} />
      <h2 className={`text-[28px] font-bold leading-tight sm:text-[32px] md:text-[36px] lg:text-[40px] ${light ? "text-white" : "text-dark"}`}>
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
