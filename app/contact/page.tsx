import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import FAQSection from "@/components/contact/FAQSection";
import WhatsAppSection from "@/components/contact/WhatsAppSection";

export default function Contact() {
  return (
    <>
      <ContactHero />
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      <FAQSection />
      <WhatsAppSection />
    </>
  );
}
