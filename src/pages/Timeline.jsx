export function Timeline() {
  return (
    <div className="flex flex-col w-screen overflow-x-hidden bg-zinc-100 min-h-screen px-4 pb-20 pt-22 lg:pt-30 md:px-6 lg:px-30">
      {/* Page Header */}
      <h1 className="text-3xl font-bold text-zinc-800 mb-6">⏳ Timeline</h1>

      {/* Two-Column Layout */}
      <div className="flex flex-col lg:flex-row gap-10 items-stretch">
        {/* Timeline Column */}
        <div className="flex-1 bg-white rounded-xl shadow-md p-6">
          <div className="relative border-l-2 border-blue-200 pl-6 space-y-10">
            <div className="absolute top-0 left-[-10px] w-4 h-4 bg-blue-500 rounded-full" />

            <div>
              <p className="text-zinc-800 text-lg font-bold">
                Childhood → Teens
              </p>
              <p className="text-zinc-600">
                Always had abundant menstrual bleeding. Diagnosed with{" "}
                <strong>Migraines</strong> and <strong>Hypermenorrhoea</strong>{" "}
                around 1999.
              </p>
            </div>

            <div>
              <p className="text-zinc-800 font-bold text-lg">
                Early 2000s — First Signs of Deeper Imbalance
              </p>
              <p className="text-zinc-600">
                In my early 20s, I began developing <strong>rosacea</strong> and
                experiencing new <strong>food intolerances</strong>,
                particularly to dairy, gluten. These worsened after pregnancies.
              </p>
            </div>

            <div>
              <p className="text-zinc-800 font-bold text-lg">
                2015 — First Child
              </p>
              <p className="text-zinc-600">
                Fatigue became extreme. Food intolerances and inflammation
                emerged. Possibly the start of <strong>Hashimoto’s</strong>.
              </p>
            </div>

            <div>
              <p className="text-zinc-800 font-bold text-lg">
                2018 — Second Child + Gestational Diabetes
              </p>
              <p className="text-zinc-600">
                Gave birth to my second child. Diagnosed with{" "}
                <strong>gestational diabetes</strong>. Postpartum fatigue,
                allergies, and migraines worsened.
              </p>
            </div>

            <div>
              <p className="text-zinc-800 font-bold text-lg">
                2018 — Diagnosed with Hashimoto’s
              </p>
              <p className="text-zinc-600">
                Official diagnosis. Symptoms: tiredness, brain fog, mood dips,
                food intolerances. Developed strong reactions to Rosaceae
                fruits.
              </p>
            </div>

            <div>
              <p className="text-zinc-800 font-bold text-lg">
                2022 — Factor XIII Deficiency + Rosacea Treatment
              </p>
              <p className="text-zinc-600">
                <strong>Possible mild Factor XIII deficiency</strong> due to
                bleeding. Received iron infusions. 9-month{" "}
                <strong>Soolantra</strong> course improved rosacea.
              </p>
            </div>

            <div>
              <p className="text-zinc-800 font-bold text-lg">
                2024 — Hormonal Treatment Begins
              </p>
              <p className="text-green-700">
                Started <strong>Chlormadinone</strong>. Helped with mood swings
                and hot flashes. Migraines persisted.
              </p>
            </div>

            <div>
              <p className="text-zinc-800 font-bold text-lg">
                Feb 2025 — Eye Emergency
              </p>
              <p className="text-rose-700">
                Sudden vision loss during migraine. Diagnosed as{" "}
                <em>migraine with atypical aura</em>.
              </p>
            </div>

            <div>
              <p className="text-zinc-800 font-bold text-lg">
                May 2025 — Hormonal IUD
              </p>
              <p className="text-green-700">
                Started <strong>Mirena IUD</strong> to regulate cycle and
                hormones long-term.
              </p>
            </div>

            <div>
              <p className="text-zinc-800 font-bold text-lg">
                June 2025 — Allergy Desensitization
              </p>
              <p className="text-green-700">
                Began <strong>birch pollen allergy desensitization</strong>{" "}
                (3-year plan).
              </p>
            </div>

            <div>
              <p className="text-zinc-800 font-bold text-lg">Now</p>
              <p className="text-zinc-600">
                Continuing meds (L-thyroxine, Chlormadinone), supplements,
                restricted diet. Prioritizing light activity and recovery.
              </p>
            </div>
          </div>
        </div>

        {/* Next Steps Column */}
        <div className="flex-1 bg-white rounded-xl shadow-md p-6 max-h-max">
          <h1 className="text-3xl font-bold text-zinc-800 mb-6">
            🎯 Next Steps
          </h1>
          <ul className="list-disc list-inside text-zinc-700 leading-relaxed space-y-3">
            <li>
              Evaluate the effectiveness of the <strong>Mirena IUD</strong> for
              long-term bleeding/migraine management.
            </li>
            <li>
              Visit a <strong>nuclear medicine doctor</strong> to check my{" "}
              <span className="text-blue-800 font-semibold">thyroid</span>.
            </li>
            <li>
              Try to get an appointment with an <strong>endocrinologist</strong>{" "}
              to support hormone balance and fatigue.
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
              Track symptoms and potential triggers more consistently to connect
              patterns.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
