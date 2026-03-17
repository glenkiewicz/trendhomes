import { MOCKUP_DATA } from "../lib/mockup-data";

const g = MOCKUP_DATA.global;

export default function MapSection() {
  return (
    <section className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2588.123!2d22.2045!3d49.5561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473c4f1a1a1a1a1a%3A0x0!2sPiastowska%203%2C%2038-500%20Sanok!5e0!3m2!1spl!2spl!4v1700000000000"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`${g.companyName} - ${g.address.street}, ${g.address.city}`}
      />
    </section>
  );
}
