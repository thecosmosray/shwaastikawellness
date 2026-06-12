import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ServiceContentSection, {
  ServiceBulletList,
  serviceBodyClass,
  serviceInsetGroupClass,
  serviceSubheadingClass,
  serviceTitleClass,
} from "@/components/ServiceContentSection";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Womb Healing & Prenatal Yoga Support | Preeti Semwal",
  description:
    "Womb healing and prenatal support by Preeti Semwal offer a nurturing space for pregnancy, emotional transitions, mother-baby connection, and mindful well-being.",
  path: "/womb-healing",
});

const approachExperiences = [
  {
    title: "Feeling Emotionally Held",
    text: "Pregnancy can bring tenderness, sensitivity, uncertainty, and joy. The approach offers a steady space where the mother can feel seen, supported, and gently held through these inner changes.",
  },
  {
    title: "Creating a Calmer Inner Environment",
    text: "The mother's inner state becomes an important space of care. The work supports emotional steadiness, a softer relationship with the body, and a more nurturing internal atmosphere.",
  },
  {
    title: "Deepening Conscious Connection",
    text: "The experience encourages a more aware connection with the baby and with the transition into motherhood, helping the journey feel more grounded, connected, and emotionally safe.",
  },
];

const wombDescription = [
  "Womb Healing is a deeply nurturing and intuitive practice designed to support women through the emotional, physical, and spiritual journey of conception, pregnancy, birth, and postpartum recovery. Rather than following a fixed structure or routine, each session unfolds as a personalized and responsive experience, carefully attuned to the unique needs, emotions, and stage of life of the individual.",
  "Rooted in compassion, presence, and energetic awareness, this work creates a safe and sacred space where women can reconnect with their bodies, release emotional tension, restore inner balance, and cultivate a deeper bond with themselves and their child. The process is gentle, supportive, and deeply grounding, allowing mothers to feel seen, heard, and emotionally supported throughout their journey.",
  "As a certified pre and postnatal yoga practitioner, I bring a grounded understanding of the physiological and emotional changes that occur during pregnancy and recovery. Through gentle movement, breath awareness, relaxation techniques, and intuitive guidance, I support holistic well-being for both mother and child.",
  "Beyond physical support, Womb Healing also works on subtle energetic levels, helping mothers feel emotionally held, spiritually aligned, and deeply connected to their inner wisdom. Whether preparing for birth, navigating postpartum transitions, healing emotional wounds connected to the womb space, or simply seeking peace and reconnection, this practice offers a compassionate pathway toward harmony, resilience, empowerment, and inner calm.",
];

const sessionIncludes = [
  "Safe and guided yoga asanas adapted to your stage",
  "Pranayama (breathwork) to support calm, stability and energy balance",
  "Meditation and awareness practices for emotional grounding and inner connection",
];

const forYouItems = [
  "Pregnant and seeking a calm, supported space",
  "Navigating emotional or physical changes",
  "Looking to connect more deeply with your body and inner state",
  "Seeking a more mindful and aware approach to this phase",
];

export default function WombHealingPage() {
  return (
    <main className="bg-white">
      <section className="relative isolate overflow-hidden bg-[#fffdf8] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_22%_18%,rgba(234,223,206,0.5),transparent_26%),linear-gradient(135deg,#fffdf8_0%,#fffaf2_58%,#f8f1e8_100%)]" />
        <Reveal>
          <div className="mx-auto max-w-6xl text-center">
            <h1 className="text-4xl font-semibold leading-[1.08] text-[#120f0c] sm:text-5xl lg:text-6xl">
              Womb Healing & Prenatal Support
            </h1>
            <p className="mx-auto mt-5 max-w-5xl text-xs font-semibold uppercase leading-6 tracking-[0.14em] text-[#8d735f] sm:text-sm sm:leading-7 sm:tracking-[0.22em]">
              Pregnancy Support &bull; Emotional Balance &bull; Conscious Motherhood &bull; Inner Steadiness &bull; Nurturing Connection
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto max-w-[75rem]">
          <Reveal delay={0.12}>
            <ServiceContentSection
              imageSrc="/images/womb%20healing.jpg"
              imageAlt="Womb Healing and prenatal support session"
              title="About This Practice"
              imagePosition="object-top"
              imageFit="object-contain"
              imageAspectRatio="aspect-[2/3]"
            >
              <div className="editorial-prose">
                <p>
                  Womb Healing is a{" "}
                  <span className="editorial-highlight">deeply nurturing and intuitive practice</span>{" "}
                  designed to support women through the emotional, physical, and spiritual
                  journey of conception, pregnancy, birth, and postpartum recovery. Rather
                  than following a fixed structure or routine, each session unfolds as a
                  personalized and responsive experience, carefully attuned to the unique
                  needs, emotions, and stage of life of the individual.
                </p>
                <p>
                  Rooted in compassion, presence, and energetic awareness, this work creates
                  a safe and sacred space where women can reconnect with their bodies,
                  release emotional tension, restore inner balance, and cultivate a deeper
                  bond with themselves and their child. The process is gentle, supportive,
                  and deeply grounding, allowing mothers to feel{" "}
                  <span className="editorial-highlight">seen, heard, and emotionally supported</span>{" "}
                  throughout their journey.
                </p>
                <p>{wombDescription[2]}</p>
                <p>
                  Beyond physical support, Womb Healing also works on subtle energetic levels,
                  helping mothers feel emotionally held, spiritually aligned, and deeply
                  connected to their <span className="editorial-highlight">inner wisdom</span>.
                  Whether preparing for birth, navigating postpartum transitions, healing
                  emotional wounds connected to the womb space, or simply seeking peace and
                  reconnection, this practice offers a compassionate pathway toward harmony,
                  resilience, empowerment, and inner calm.
                </p>
              </div>
            </ServiceContentSection>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-5 pb-12 sm:px-8 sm:pb-16 lg:px-10">
        <Reveal>
          <article className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-[52rem]">
              <h2 className={serviceTitleClass}>The Approach</h2>
              <p className={`mt-5 ${serviceBodyClass}`}>
                This part of the work is less about a fixed routine and more about the
                <span className="editorial-highlight"> emotional atmosphere</span> created
                around the mother and baby.
              </p>
            </div>

            <div className={serviceInsetGroupClass}>
              {approachExperiences.map((experience) => (
                <section
                  key={experience.title}
                  className="border-l border-[#d7c6a9] pl-4 sm:pl-5"
                >
                  <h3 className={serviceSubheadingClass}>
                    {experience.title}
                  </h3>
                  <p className="mt-2 text-left text-sm leading-7 text-[#66584d] sm:text-base">
                    {experience.text}
                  </p>
                </section>
              ))}
            </div>
          </article>
        </Reveal>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-5xl border-y border-[#eadfce] py-8 sm:py-10">
            <h2 className={serviceTitleClass}>
              What the session includes
            </h2>
            <ServiceBulletList items={sessionIncludes} />
            <p className={`mt-7 max-w-[52rem] ${serviceBodyClass}`}>
              These elements are woven together to support not just the physical body but
              also the deeper{" "}
              <span className="editorial-highlight">emotional and energetic experience</span>{" "}
              of this phase.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <Reveal>
            <article className="h-full border-y border-[#eadfce] py-7">
              <h2 className={serviceTitleClass}>
                Womb & Baby Connection
              </h2>
              <div className="editorial-prose mt-7">
                <p>
                  The work is held with a deep sensitivity to the womb space, creating a
                  sense of <span className="editorial-highlight">calm, connection and support</span>{" "}
                  that can be experienced by both the mother and the baby.
                </p>
                <p>
                  It offers a space where the mother can consciously slow down, reconnect
                  and cultivate a more balanced and nurturing internal environment through
                  her pregnancy journey.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="h-full border-y border-[#eadfce] py-7">
              <h2 className={serviceTitleClass}>
                This is for you if you are:
              </h2>
              <ServiceBulletList items={forYouItems} />
            </article>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
