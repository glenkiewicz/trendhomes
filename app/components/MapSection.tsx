import { MOCKUP_DATA } from "../lib/mockup-data";

const g = MOCKUP_DATA.global;

export default function MapSection() {
	return (
		<section className="w-full">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2587.708431982091!2d22.171647177164683!3d49.56552437143672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473c6d8672978b9f%3A0x1f8a04df91375c7b!2sTRENDHOMES%20Okna%20i%20Drzwi!5e0!3m2!1spl!2spl!4v1775039480368!5m2!1spl!2spl"
				width="100%"
				height="500"
				loading="lazy"
			></iframe>
		</section>
	);
}
