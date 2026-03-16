import Image from "next/image";

export default function TopBar() {
  return (
    <div className="bg-pink">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-3 py-2 md:px-10">
        <div className="flex items-center gap-2">
          <Image
            src="/images/czyste-powietrze-logo.svg"
            alt="Czyste Powietrze"
            width={24}
            height={24}
            className="shrink-0"
          />
          <span className="text-xs font-bold text-light sm:text-sm md:text-sm">
            Skorzystaj z dofinansowania &quot;Czyste powietrze&quot;
          </span>
        </div>
        <span className="hidden text-sm font-bold text-light md:block">
          nowości w ofercie | aktualności
        </span>
      </div>
    </div>
  );
}
