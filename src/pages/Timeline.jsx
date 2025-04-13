export function Timeline() {
  return (
    <div className="flex flex-col w-screen h-screen overflow-x-hidden px-4 lg:px-30 pt-30 bg-zinc-100 min-h-screen pb-20 pt-10 md:px-6">
      {/* Header */}
      <div>
        <div>
          <h1 className="text-3xl font-bold text-zinc-800">Timeline</h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg: gap-10">
        <div className="lg:max-w-2xl lg:px-10 py-6">
          {/* Timeline */}
          <div className="relative border-l-2 border-blue-200 pl-6 space-y-10 ">
            <div className="absolute top-0 left-[-10px] w-4 h-4 bg-blue-500 rounded-full" />

            <div>
              <p className="text-zinc-800 font-bold">Childhood → Teens</p>
              <p className="text-zinc-600">
                Always had abundant menstrual bleeding. Diagnosed with{" "}
                <strong>Migraines</strong> and <strong>Hypermenorrhoea</strong>{" "}
                around 1999.
              </p>
            </div>

            <div>
              <p className="text-zinc-800 font-bold">
                Early 2000s — First Signs of Deeper Imbalance
              </p>
              <p className="text-zinc-600">
                In my early 20s, I began developing <strong>rosacea</strong> and
                experiencing new <strong>food intolerances</strong>,
                particularly to dairy, gluten. These sensitivities worsened with
                time and became harder to manage after pregnancies.
              </p>
            </div>

            <div>
              <p className="text-zinc-800 font-bold">2015 — First Child</p>
              <p className="text-zinc-600">
                Fatigue started becoming extreme. Food intolerances and
                inflammation showed up gradually. This might’ve been the start
                of <strong>Hashimoto’s</strong>.
              </p>
            </div>

            <div>
              <p className="text-zinc-800 font-bold">
                2018 — Second Child + Gestational Diabetes
              </p>
              <p className="text-zinc-600">
                Gave birth to my second child. Diagnosed with{" "}
                <strong>pregnancy (gestational) diabetes</strong>. Postpartum
                fatigue, allergies, and migraines worsened.
              </p>
            </div>

            <div>
              <p className="text-zinc-800 font-bold">
                2018 — Diagnosed with Hashimoto’s
              </p>
              <p className="text-zinc-600">
                Official diagnosis. Symptoms: extreme tiredness, brain fog, food
                intolerances, mood dips, and more. Strong cross-allergy
                reactions to Rosaceae family fruits started.
              </p>
            </div>

            <div>
              <p className="text-zinc-800 font-bold">
                2022 — Factor XIII Deficiency + Rosacea Treatment
              </p>
              <p className="text-zinc-600">
                <strong>Possible acquired mild Factor XIII deficiency</strong>{" "}
                due to excessive bleeding. Received every 5 months an iron
                infusion to compensate blood loss. Also completed a{" "}
                <strong>9-month Soolantra course</strong> which improved my
                rosacea significantly.
              </p>
            </div>

            <div>
              <p className="text-zinc-800 font-bold">
                2024 — Hormonal Treatment Begins
              </p>
              <p className="text-green-700">
                Started <strong>Chlormadinone</strong>. Some symptoms like hot
                flashes and mood swings improved, but migraines and long periods
                remained.
              </p>
            </div>

            <div>
              <p className="text-zinc-800 font-bold">
                Feb 2025 — Eye Emergency
              </p>
              <p className="text-rose-700">
                Sudden vision loss in the right eye during a migraine. Diagnosed
                as <em>migraine with atypical aura</em>.
              </p>
            </div>

            <div>
              <p className="text-zinc-800 font-bold">May 2025 — Hormonal IUD</p>
              <p className="text-green-700">
                Started <strong>Mirena IUD</strong> for long-term cycle
                regulation and hormone balance.
              </p>
            </div>

            <div>
              <p className="text-zinc-800 font-bold">
                June 2025 — Allergy Desensitization
              </p>
              <p className="text-green-700">
                Beginning <strong>birch pollen allergy desensitization</strong>{" "}
                (3-year treatment plan).
              </p>
            </div>

            <div>
              <p className="text-zinc-800 font-bold">Now</p>
              <p className="text-zinc-600">
                Continuing daily medications (L-thyroxine, Chlormadinone),
                taking supplements, and living with food restrictions. I’m
                focused on light activity, managing stress, and slowly
                rebuilding my health.
              </p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div>
          <div className=" max-w-max bg-white rounded-xl shadow-md p-6 space-y-4 mt-10">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-2">
              Next Steps
            </h2>
            <ul className="list-disc list-inside text-zinc-700 leading-relaxed space-y-3">
              <li>
                Evaluate the effectiveness of the <strong>Mirena IUD</strong>{" "}
                for long-term bleeding/migraine management.
              </li>
              <li>
                Visit a <strong>nuclear medicine doctor</strong> to check my{" "}
                <span className="text-blue-800 font-semibold">thyroid</span>.
              </li>
              <li>
                Try to get an appointment with an{" "}
                <strong>endocrinologist</strong> to support hormone balance and
                fatigue.
              </li>
              <li>
                Continue{" "}
                <span className="font-bold text-green-700">
                  low-inflammatory diet
                </span>
                , <strong>therapy</strong>, and gentle exercise like yoga and
                biking.
              </li>
              <li>
                Track symptoms and potential triggers more consistently to
                connect patterns.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
