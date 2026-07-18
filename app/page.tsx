import Link from "next/link";
import Botanical from "@/components/Botanical";
import BookBand from "@/components/BookBand";
import styles from "./page.module.css";

const HERO_IMG =
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1600&q=80";

const CONDITIONS: Array<{ area: string; list: string }> = [
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
  {
    area: "Mind",
    list: "Anxiety and all kinds of fears, acute and chronic depression, bipolar affective disorder, schizophrenia, acute psychosis — and childhood concerns such as poor concentration, reading and writing difficulties, headstrong or quarrelsome behaviour, and homesickness.",
  },
];

export default function Home() {
  return (
    <>
      {/* ——— Asymmetric hero ——— */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div data-reveal-item>
            <p className={styles.heroKicker}>
              Homoeopathy &amp; psychotherapy, one practice
            </p>
            <h1 className={styles.heroTitle}>
              Care that treats the whole of&nbsp;you
            </h1>
            <p className={styles.heroLead}>
              For twenty-five years, Dr. Sammeta Madhavi has treated the body
              and the mind together — homoeopathy for what hurts, counseling
              for what weighs — because they were never separate to begin with.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn btn-bright">
                Book an online consultation
              </Link>
              <Link href="/about" className="btn btn-quiet">
                Meet Dr. Madhavi
              </Link>
            </div>
            <p className={styles.heroMeta}>
              <strong>Dr. Sammeta Madhavi</strong> · BHMS, MS Psychotherapy ·
              Reg. No. A 6966 · all consultations online, over secure video,
              worldwide.
            </p>
          </div>

          <figure className={styles.heroFigure} data-reveal-item style={{ ["--reveal-delay" as string]: "0.12s" }}>
            <img
              src={HERO_IMG}
              alt="A single broadleaf tree standing whole in a green field under a clear sky"
              width={1600}
              height={1067}
              fetchPriority="high"
            />
            <Botanical variant="sprig" className={styles.heroSprig} />
            <figcaption className={styles.heroCaption}>
              Whole, from root to crown
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ——— The whole of you: two editorial panels ——— */}
      <section className={styles.whole} aria-labelledby="whole-heading">
        <div className="container">
          <div className={styles.wholeIntro} data-reveal-item>
            <h2 id="whole-heading">Two disciplines, one patient</h2>
            <p>
              Most clinics treat a symptom. This practice treats a person —
              which is why it keeps both a homoeopathic dispensary and a
              counseling room, and why one physician runs both.
            </p>
          </div>

          <div className={styles.panels}>
            <article className={styles.panel} data-reveal-item>
              <p className={styles.panelDiscipline}>the body</p>
              <h3>Physical treatment</h3>
              <p>
                Classical homoeopathy for chronic and acute illness — from
                respiratory allergies and gastric complaints to arthritis and
                skin disease. Remedies are matched to your whole constitution,
                not just the complaint that brought you in.
              </p>
              <Link href="/physical-treatment" className={styles.panelLink}>
                Explore physical treatment
              </Link>
            </article>

            <article className={`${styles.panel} ${styles.panelAlt}`} data-reveal-item style={{ ["--reveal-delay" as string]: "0.1s" }}>
              <p className={styles.panelDiscipline}>the mind</p>
              <h3>Psychological treatment</h3>
              <p>
                Psychotherapy and cognitive behaviour therapy for depression,
                anxiety, and the difficulties families carry quietly — from a
                counselor the Telangana police trust with their own family
                counseling work.
              </p>
              <Link href="/psychological-treatment" className={styles.panelLink}>
                Explore psychological treatment
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ——— What holistic care means ——— */}
      <section className={styles.means} aria-labelledby="means-heading">
        <div className={`container ${styles.meansGrid}`}>
          <h2 id="means-heading" data-reveal-item>
            What &ldquo;holistic&rdquo; actually means here
          </h2>
          <div className={styles.meansBody} data-reveal-item>
            <p>
              In homoeopathy, it&rsquo;s not just about the symptoms — it&rsquo;s
              about <em>treating the whole person</em>. A skin condition can
              begin in stress. Insomnia can begin in the gut. Treating either
              alone means treating it twice.
            </p>
            <p>
              So a first consultation here is long and unhurried. Your medical
              history, your sleep, your appetite, your worries and your work all
              belong in the same conversation, because the remedy — homoeopathic,
              therapeutic, or both — is chosen for the person, not the ailment.
            </p>
            <p>
              And when conventional treatment is already underway, care here
              runs alongside it, never against it — easing side effects and
              supporting recovery rather than asking you to choose.
            </p>
          </div>
        </div>
      </section>

      {/* ——— Conditions: editorial index ——— */}
      <section className={styles.conditions} aria-labelledby="conditions-heading">
        <div className="container">
          <div className={styles.conditionsHead} data-reveal-item>
            <h2 id="conditions-heading">An index of what we treat</h2>
            <p>Compiled from twenty-five years of practice</p>
          </div>

          <dl className={styles.indexList}>
            {CONDITIONS.map((c, i) => (
              <div className={styles.indexRow} key={c.area} data-reveal-item style={{ ["--reveal-delay" as string]: `${Math.min(i * 0.05, 0.25)}s` }}>
                <dt>{c.area}</dt>
                <dd>{c.list}</dd>
              </div>
            ))}
          </dl>

          <p className={styles.conditionsFoot} data-reveal-item>
            Not sure where your condition fits?{" "}
            <Link href="/contact">Ask the clinic directly</Link> — a short
            message is enough to find out.
          </p>
        </div>
      </section>

      {/* ——— Meet Dr. Madhavi ——— */}
      <section className={styles.doctor} aria-labelledby="doctor-heading">
        <div className={`container ${styles.doctorGrid}`}>
          <div className={styles.doctorCard} data-reveal-item>
            <h3>Dr. Sammeta Madhavi</h3>
            <p className={styles.doctorCardRole}>
              Homeopathic Physician &amp; Psychotherapy Counselor
            </p>
            <ul className={styles.doctorCredList}>
              <li>
                BHMS — Homoeopathic Medicine
                <span>with 90% academic score</span>
              </li>
              <li>
                MS — Psychotherapy &amp; Bio-Informatics
                <span>with 90% academic score</span>
              </li>
              <li>
                Registered practitioner
                <span>Reg. No. A 6966</span>
              </li>
              <li>
                Woman Achiever&rsquo;s Award, ATA (USA)
                <span>March 2021</span>
              </li>
            </ul>
          </div>

          <div className={styles.doctorBody} data-reveal-item>
            <h2 id="doctor-heading">A physician who listens twice</h2>
            <p>
              Dr. Madhavi qualified in homoeopathic medicine, then went back to
              study the mind — a second postgraduate degree in psychotherapy —
              because her patients kept showing her that the two could not be
              treated apart.
            </p>
            <p>
              Twenty-five years on, her practice spans classical homoeopathy,
              cognitive behaviour therapy, palliative care, and patient
              advocacy. She counsels for women and child protection, leads
              gender-sensitization programs, and works with the Telangana
              police department on family counseling and divorce cases.
            </p>
            <p>
              She has judged and spoken at international and CBSE schools,
              appeared on television, and written for The Hindu and
              regional-language papers.
            </p>
            <Link href="/about" className={styles.doctorMore}>
              More about Dr. Madhavi
            </Link>
          </div>
        </div>
      </section>

      {/* ——— Cochies milestone: quiet feature ——— */}
      <section className={styles.milestone} aria-labelledby="milestone-heading">
        <div className="container">
          <div className={styles.milestoneInner} data-reveal-item>
            <p className={styles.milestoneYear}>2024</p>
            <h2 id="milestone-heading">
              Working alongside oncology, not around it
            </h2>
            <p>
              In 2024 the practice began a collaboration with Cochies Oncology
              Centre in the USA, with Dr. Nettleton — prescribing homoeopathy
              alongside radiation and chemotherapy to ease their side effects.
              It is holistic care exactly as this practice understands it:
              complementary, evidence-minded, and always on the patient&rsquo;s
              side.
            </p>
          </div>
        </div>
      </section>

      {/* ——— Quote interstitial ——— */}
      <section className={styles.quote} aria-label="A thought the practice lives by">
        <div className="container" data-reveal-item>
          <Botanical variant="divider" className={styles.quoteDivider} />
          <blockquote>
            You are not a drop in the ocean. You are the entire ocean in a drop.
          </blockquote>
        </div>
      </section>

      <BookBand />
    </>
  );
}
