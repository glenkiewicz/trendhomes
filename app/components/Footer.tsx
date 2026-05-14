import Image from "next/image";
import Link from "next/link";
import type { StrapiGlobalSettings, StrapiNavigation } from "../types/strapi";

const hoverUnderline =
	"relative after:absolute after:-bottom-0.5 after:left-1/2 after:h-[1.5px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-white/60 after:transition-all after:duration-300 after:ease-out hover:after:w-full";

type Props = {
	global: StrapiGlobalSettings;
	navigation: StrapiNavigation;
};

export default function Footer({ global, navigation }: Props) {
	const sanok = global.branches.find((b) => b.name === "sanok");
	const rzeszow = global.branches.find((b) => b.name === "rzeszow");

	return (
		<footer
			className="relative overflow-hidden"
			style={{
				background: "linear-gradient(90deg, #d32360 0%, #e8574a 50%, #f0a030 100%)",
			}}
		>
			<div className="relative z-10 mx-auto max-w-[1440px] px-3 pb-0 pt-10 md:px-5 md:pt-20">
				<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
					{/* Column 1: Logo + description */}
					<div>
						<Image
							src="/images/logo-white.png"
							alt={global.companyName}
							width={443}
							height={70}
							className="h-auto w-[200px] md:w-[260px]"
						/>
						{global.footerDescription && (
							<div className="mt-6 space-y-4 text-sm leading-relaxed text-white md:text-base">
								{global.footerDescription.map((text, i) => (
									<p key={i}>{text}</p>
								))}
							</div>
						)}
						<div className="mt-5 flex items-center gap-4">
							{global.socialFacebook && (
								<a
									href={global.socialFacebook}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Facebook"
									className="text-white/80 transition-colors hover:text-white"
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
										<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
									</svg>
								</a>
							)}
							{global.socialInstagram && (
								<a
									href={global.socialInstagram}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Instagram"
									className="text-white/80 transition-colors hover:text-white"
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
										<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
									</svg>
								</a>
							)}
						</div>
					</div>

					{/* Dynamic footer columns from CMS Navigation */}
					{navigation.footerColumns.map((col) => (
						<div key={col.id}>
							<h3 className="text-lg font-bold tracking-tight text-white">{col.heading}</h3>
							<ul className="mt-4 space-y-2 md:mt-6">
								{col.links.map((link) => (
									<li key={link.id}>
										<Link
											href={link.href}
											className={`text-sm text-light transition-colors hover:text-white ${hoverUnderline}`}
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}

					{/* Contact column */}
					<div>
						<h3 className="text-lg font-bold tracking-tight text-white">{global.companyName}</h3>
						<div className="mt-4 space-y-1 text-sm leading-relaxed text-light md:mt-6">
							{global.addressStreet && (
								<p>
									{global.addressStreet}
									{global.addressCity && `, ${global.addressCity}`}
								</p>
							)}
							{sanok?.email && (
								<p>
									E-mail:{" "}
									<a href={`mailto:${sanok.email}`} className="hover:text-white transition-colors">
										{sanok.email}
									</a>
								</p>
							)}
							{sanok?.phone && (
								<p>
									Telefon:{" "}
									<a href={`tel:${sanok.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
										{sanok.phone}
									</a>
								</p>
							)}
						</div>
						{rzeszow && (
							<div className="mt-4 space-y-1 text-sm leading-relaxed text-light">
								{rzeszow.label && <p>{rzeszow.label}</p>}
								{rzeszow.email && (
									<p>
										E-mail:{" "}
										<a href={`mailto:${rzeszow.email}`} className="hover:text-white transition-colors">
											{rzeszow.email}
										</a>
									</p>
								)}
								{rzeszow.phone && (
									<p>
										Telefon:{" "}
										<a href={`tel:${rzeszow.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
											{rzeszow.phone}
										</a>
									</p>
								)}
							</div>
						)}
						{(global.nip || global.regon) && (
							<div className="mt-4 space-y-1 text-sm leading-relaxed text-light">
								{global.nip && <p>NIP {global.nip}</p>}
								{global.regon && <p>REGON {global.regon}</p>}
							</div>
						)}
					</div>
				</div>

				{/* Bottom bar */}
				<div className="mt-10 flex flex-col gap-3 border-t border-white/20 py-5 sm:flex-row sm:items-center sm:justify-between md:mt-16">
					<p className="text-sm text-light md:text-base">
						{global.footerBottomLinks.map((link, i) => (
							<span key={link.id}>
								{i > 0 && " | "}
								<Link href={link.href} className={`transition-colors hover:text-white ${hoverUnderline}`}>
									{link.label}
								</Link>
							</span>
						))}
					</p>
					{global.copyright && <p className="text-sm text-light md:text-base">{global.copyright}</p>}
				</div>
			</div>

			<div className="relative z-10 bg-dark/50 py-2">
				<div className="mx-auto max-w-[1440px] px-3 text-center sm:text-right md:px-5">
					<p className="text-sm text-dark md:text-sm">
						Projekt: Koala Marketing | Realizacja:{" "}
						<a href="mailto:grzegorz.lenkiewicz@gmail.com">GL</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
