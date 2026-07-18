import type { Metadata } from "next";
import Link from "next/link";
import BookBand from "@/components/BookBand";
import Botanical from "@/components/Botanical";
import styles from "../editorial.module.css";

export const metadata: Metadata = {
  title: "Physical Treatment",
  description:
    "Classical homoeopathy for chronic and acute illness — respiratory, digestive, joint, heart, skin and eye conditions — treating the whole constitution, not just the complaint.",
};

const AREAS: Array<{ area: string; list: string }> = [
  {
    area: "Respiratory",
    list: "Sinusitis, asthma, dust allergy, bronchitis, flu, common and chronic cough, sore throat, laryngitis, tonsillitis, hoarseness of voice.",
  },
  {
    area: "Digestive",
    list: "Indigestion, acute and chronic gastritis, gastric and duodenal ulcers, appendicitis, inguinal and umbilical hernia, loss of appetite, anorexia, intestinal complaints.",
  },
  {
    area: "Joints & bones",
    list: "Pain in large and small joints, rheumatoid arthritis, osteoarthritis, gout, back pain, sciatica, frozen shoulder, tennis elbow, sprains, bone tuberculosis of the hip.",
  },
  {
    area: "Chest & heart",
    list: "Hypertension and hypotension, palpitations, rapid breathing, chest pain, angina pectoris, and supportive care after thrombosis or myocardial infarction.",
  },
  {
    area: "Skin",
    list: "Eczema, urticaria, erysipelas, fungal, viral and bacterial infections, vitiligo, psoriasis, acne, hyperpigmentation, dull skin, whitlow, nail infections, keloids.",
  },
  {
    area: "Eyes",
    list: "Styes, granular and paralysed eyelids, glaucoma, night blindness, cataracts, conjunctivitis, eye pain, dry eye, blepharitis, amblyopia.",
  },
];

export default function PhysicalTreatment() {
  return (
    <>
      <section className={styles.pageHead}>
        <div className="container">
          <div className={styles.pageHeadInner} data-reveal-item>
            <p className={styles.pageKicker}>the body</p>
            <h1 className={styles.pageTitle}>Physical treatment</h1>
            <p className={styles.pageLead}>
              Classical homoeopathy for chronic and acute illness — remedies
              matched to your whole constitution, prescribed after a
              consultation long enough to actually understand it.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="approach-heading">
        <div className={`container ${styles.split}`}>
          <h2 id="approach-heading" className={styles.splitTitle} data-reveal-item>
            Tapping the body&rsquo;s own healing
          </h2>
          <div className={styles.prose} data-reveal-item>
            <p>
              Homoeopathy works by <em>stimulating the body&rsquo;s natural
              healing response</em> rather than overriding it. Two patients
              with the same diagnosis will often leave with different
              remedies, because the medicine is chosen for the person: how
              your illness behaves, what worsens it, what else your body and
              mind are carrying.
            </p>
            <p>
              That makes it particularly suited to the conditions conventional
              medicine manages rather than resolves — recurring allergies,
              stubborn skin disease, joint pain that returns each winter.
            </p>
            <p>
              It also works alongside conventional treatment. Patients under
              specialist care — including oncology patients in the
              practice&rsquo;s collaboration with Cochies Oncology Centre, USA —
              continue their prescribed treatment while homoeopathy eases side
              effects and supports recovery.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionTint} aria-labelledby="areas-heading">
        <div className="container">
          <h2 id="areas-heading" style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)", marginBottom: "clamp(28px, 4vw, 44px)" }} data-reveal-item>
            Conditions treated
          </h2>
          <dl className={styles.indexList}>
            {AREAS.map((a, i) => (
              <div className={styles.indexRow} key={a.area} data-reveal-item style={{ ["--reveal-delay" as string]: `${Math.min(i * 0.05, 0.25)}s` }}>
                <dt>{a.area}</dt>
                <dd>{a.list}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={styles.sectionCard} aria-labelledby="visit-heading">
        <div className="container">
          <h2 id="visit-heading" style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)", marginBottom: "clamp(28px, 4vw, 44px)" }} data-reveal-item>
            How a course of treatment unfolds
          </h2>
          <ol className={styles.steps}>
            <li data-reveal-item>
              <div>
                <h3>The long first consultation</h3>
                <p>
                  Your full history — the complaint, but also sleep, appetite,
                  stresses, and past treatment — online, over secure video,
                  from wherever you are.
                </p>
              </div>
            </li>
            <li data-reveal-item>
              <div>
                <h3>An individualised remedy</h3>
                <p>
                  A constitutional prescription chosen for you, with clear
                  instructions — and honest guidance on what homoeopathy can
                  and cannot do for your condition.
                </p>
              </div>
            </li>
            <li data-reveal-item>
              <div>
                <h3>Follow-up and adjustment</h3>
                <p>
                  Chronic conditions change slowly; the remedy is reviewed and
                  adjusted as your body responds. Follow-ups happen online
                  too, at times that suit you.
                </p>
              </div>
            </li>
          </ol>
          <p style={{ marginTop: 28, fontSize: 16 }} data-reveal-item>
            Wondering whether your condition responds to homoeopathy?{" "}
            <Link href="/contact">Send the clinic a short message</Link>.
          </p>
        </div>
      </section>

      <section className={styles.pull} aria-label="The practice's view of treatment">
        <div className="container" data-reveal-item>
          <Botanical variant="divider" className={styles.pullDivider} />
          <blockquote>
            It&rsquo;s not just the symptoms — it&rsquo;s the whole person.
          </blockquote>
        </div>
      </section>

      <BookBand />
    </>
  );
}
