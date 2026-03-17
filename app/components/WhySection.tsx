import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import AnimateOnScroll from "./AnimateOnScroll";
import { MOCKUP_DATA } from "../lib/mockup-data";

const d = MOCKUP_DATA.home.why;
const benefits = d.benefits;

export default function WhySection() {
	return (
		<section className="bg-white py-10 md:py-20">
			<div className="mx-auto max-w-[1440px] px-3 md:px-5">
				<SectionHeading
					lines={[...d.heading]}
				/>

				<p className="mt-4 max-w-[867px] text-base leading-relaxed text-dark md:mt-6 md:text-xl">
					{d.intro}
				</p>

				<div className="mt-10">
					{benefits.map((benefit, i) => {
						const textBlock = (
							<div
								className="flex flex-col gap-3 p-3 md:gap-6 md:p-5"
								key="text"
							>
								<h3 className="text-xl font-light text-dark sm:text-2xl md:text-[29px]">
									{benefit.title}
								</h3>
								<p className="text-sm leading-relaxed text-dark/80 md:text-lg">
									{benefit.description}
								</p>
							</div>
						);
						const imageBlock = (
							<div
								className="relative h-[200px] overflow-hidden md:h-[212px]"
								key="image"
							>
								<Image
									src={benefit.image}
									alt={benefit.title}
									fill
									sizes="(max-width: 768px) 100vw, 50vw"
									loading="lazy"
									className="object-cover"
								/>
							</div>
						);

						return (
							<AnimateOnScroll
								key={i}
								delay={i * 100}
								direction={i % 2 === 0 ? "left" : "right"}
							>
								<div className="grid grid-cols-1 border-t border-dark/10 md:grid-cols-2 items-center py-8">
									{/* On mobile: always text then image. On desktop: alternate */}
									<div className="md:hidden">
										{textBlock}
										{imageBlock}
									</div>
									<div className="hidden md:contents">
										{i % 2 === 0 ? (
											<>
												{textBlock}
												{imageBlock}
											</>
										) : (
											<>
												{imageBlock}
												{textBlock}
											</>
										)}
									</div>
								</div>
							</AnimateOnScroll>
						);
					})}
				</div>

				<div className="mt-8 flex justify-center md:mt-14">
					<Link
						href="#kontakt"
						className="btn-pink h-12 px-6 text-sm md:px-8"
					>
						{MOCKUP_DATA.global.cta.skontaktujSie}
					</Link>
				</div>
			</div>
		</section>
	);
}
