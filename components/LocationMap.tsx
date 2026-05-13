import Reveal from "@/components/Reveal";

const mapEmbedUrl =
  "https://maps.google.com/maps?ll=17.503536,78.534729&z=18&t=m&hl=en&q=17.503536,78.534729&output=embed";

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=17.503536%2C78.534729";

export default function LocationMap() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid items-center gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">
                Healing | Clarity | Transformation
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#2f2822] sm:text-4xl">
                Find Preeti Semwal
              </h2>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8a7764]">
                Shwaastika Wellness
              </p>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[#66584d]">
                Located in Yapral, Secunderabad, with a calm and accessible space for
                in-person wellness sessions and consultations.
              </p>

              <div className="mt-7 rounded-[1.5rem] border border-[#e5d9c7] bg-[#fbf8f1]/85 p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7d8b65]">
                  Location
                </p>
                <p className="mt-3 text-lg font-semibold text-[#2f2822]">
                  Yapral, Secunderabad
                </p>
                <p className="mt-1 text-base text-[#6f6257]">
                  Telangana, India
                </p>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex rounded-full bg-[#2f2822] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2f2822]/12 transition hover:-translate-y-0.5 hover:bg-[#4f6574]"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#e5d9c7] bg-[#fbf8f1] p-3 shadow-xl shadow-[#6b513b]/10 transition hover:shadow-2xl hover:shadow-[#6b513b]/12 sm:p-4">
              <div className="overflow-hidden rounded-[1.5rem] bg-[#f3eadb]">
                <iframe
                  title="Shwaastika Wellness location on Google Maps"
                  src={mapEmbedUrl}
                  className="block h-[340px] w-full border-0 sm:h-[420px] lg:h-[460px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
