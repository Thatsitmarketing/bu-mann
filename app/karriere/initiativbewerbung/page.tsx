import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ApplicationForm from "@/components/ApplicationForm";

export const metadata: Metadata = {
  title: "Initiativbewerbung",
  description:
    "Kein passendes Stellenangebot dabei? Bewerben Sie sich initiativ beim Meisterbetrieb Bußmann in Sassenberg.",
};

export default function InitiativbewerbungPage() {
  return (
    <section className="section" style={{ paddingTop: "clamp(8rem, 15vw, 11rem)" }}>
      <div className="container job-detail__grid job-detail__grid--single">
        <Reveal>
          <p className="eyebrow">Initiativbewerbung</p>
          <h1 className="display">Kein Angebot dabei? Bewirb dich trotzdem.</h1>
          <p className="lead" style={{ marginTop: "1.2rem" }}>
            Wir wachsen ständig – erzähl uns, was du kannst, und wir schauen
            gemeinsam, wo du bei uns am besten passt.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="job-detail__form" style={{ marginTop: "2.5rem" }}>
            <ApplicationForm jobTitle="Initiativbewerbung" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
