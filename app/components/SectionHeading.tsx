export default function SectionHeading({
  lines,
  light,
  as = "h2",
}: {
  lines: readonly string[];
  light?: boolean;
  as?: "h1" | "h2";
}) {
  const Tag = as;
  return (
    <div className="flex items-center gap-4 py-3 pr-3 md:gap-6 md:py-5 md:pr-5">
      <div className={`h-[60px] w-[3px] shrink-0 md:h-[90px] ${light ? "bg-white" : "bg-pink"}`} />
      <Tag className={`text-[22px] font-bold leading-tight sm:text-[26px] md:text-[29px] lg:text-[26px] ${light ? "text-white" : "text-dark"}`}>
        {lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </Tag>
    </div>
  );
}
