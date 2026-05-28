import Image from "next/image";
import Link from "next/link";
import type { StrapiGlobalSettings } from "../types/strapi";

const linkClass =
	"group relative opacity-90 transition-opacity duration-300 hover:opacity-100 after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-white/80 after:transition-all after:duration-300 after:ease-out hover:after:w-full";

export default function TopBar({ global }: { global: StrapiGlobalSettings }) {
	return (
		<div className="bg-pink">
			<div className="mx-auto flex max-w-[1440px] items-center justify-between px-3 py-2 md:px-10">
				<Link
					href="/blog"
					className={`flex items-center gap-2 ${linkClass}`}
				>
					<Image
						src="/images/czyste-powietrze-logo.svg"
						alt="Czyste Powietrze"
						width={24}
						height={24}
						className="shrink-0"
					/>
					<span className="text-xs font-bold text-light sm:text-sm md:text-sm">
						{global.topBarLeft}
					</span>
				</Link>
				{global.topBarRight && (
					<Link
						href="/blog"
						className={`hidden text-sm font-bold text-light md:block ${linkClass}`}
					>
						{global.topBarRight}
					</Link>
				)}
			</div>
		</div>
	);
}
