export default function PakistanEconomicDashboard() {
  const kpis = [
    { label: "Public Debt FY2025", value: "PKR 80.5T", note: "Official review snapshot" },
    { label: "Best Avg Growth", value: "Nawaz Era", note: "~4.8% average" },
    { label: "Largest Debt Increase", value: "Shehbaz Era", note: "Nominal PKR terms" },
    { label: "Key Risk", value: "Debt Servicing", note: "Crowding out development" },
  ];

  const tenureRows = [
    {
      tenure: "Nawaz / PML-N",
      years: "FY2014–FY2018",
      growth: "~4.8%",
      debt: "+PKR 7.0T",
      verdict: "Strongest growth, but external vulnerabilities built up",
    },
    {
      tenure: "Imran Khan",
      years: "FY2019–FY2022",
      growth: "~2.9%",
      debt: "+PKR 27.2T",
      verdict: "Volatile cycle: slowdown, COVID hit, rebound, rising stress",
    },
    {
      tenure: "Shehbaz Sharif",
      years: "FY2023–FY2025",
      growth: "~1.6%",
      debt: "+PKR 31.4T",
      verdict: "Stabilization improved, but debt climbed sharply",
    },
  ];

  const lenders = [
    { name: "IMF", strength: 88, desc: "Balance-of-payments and stabilization anchor" },
    { name: "World Bank", strength: 64, desc: "Development and policy financing" },
    { name: "ADB", strength: 72, desc: "Infrastructure and reform-linked flows" },
    { name: "China", strength: 79, desc: "Bilateral and commercial-linked exposure" },
    { name: "Gulf Support", strength: 58, desc: "Deposits and oil facilities" },
  ];

  const scenarios = [
    {
      title: "PKR Devaluation Shock",
      impact: "Higher debt stock in PKR terms",
      detail: "External debt becomes more expensive immediately.",
    },
    {
      title: "Oil Price Shock",
      impact: "Bigger import bill + financing need",
      detail: "Pressure rises on reserves, subsidies, and fiscal space.",
    },
    {
      title: "Interest Stress",
      impact: "Servicing burden escalates",
      detail: "Revenue gets absorbed faster by interest payments.",
    },
  ];

  const provinces = [
    { name: "Punjab", stat: "PKR 1,757.2B", note: "Largest visible stock in latest bulletin" },
    { name: "Sindh", stat: "+PKR 284.9B", note: "FY25 increase marker" },
    { name: "Khyber Pakhtunkhwa", stat: "51.9%", note: "Debt to total revenue ratio marker" },
    { name: "Balochistan", stat: "Policy-led", note: "Debt scheduling and partner-linked framework" },
  ];

  const debtSeries = [14.4, 16.0, 17.4, 21.4, 25.0, 32.7, 36.4, 39.9, 49.2, 62.9, 71.2, 80.5];
  const growthSeries = [4.0, 4.2, 4.7, 5.3, 5.8, 2.1, -0.5, 3.9, 6.0, -0.2, 2.4, 2.7];
  const labels = ["14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"];

  const maxDebt = Math.max(...debtSeries);
  const maxGrowth = Math.max(...growthSeries.map((v) => Math.abs(v)));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <header className="mb-10 grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
              Portfolio Dashboard · Pakistan Economy 2013–2025
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Pakistan Economic Elite Dashboard
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              A portfolio-style web dashboard summarizing Pakistan’s macro trends, debt build-up,
              lender exposure, provincial debt signals, scenario stress tests, and political-tenure comparison.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#dashboard"
                className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:scale-[1.01]"
              >
                Explore Dashboard
              </a>
              <a
                href="#method"
                className="rounded-2xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
              >
                Method & Notes
              </a>
            </div>
          </div>

          <div className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-5 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="text-sm text-slate-400">Project focus</div>
            <div className="text-2xl font-semibold text-white">Debt, growth, lenders, risk</div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl bg-slate-950 p-4">
                <div className="text-slate-400">Format</div>
                <div className="mt-1 font-medium">Portfolio site</div>
              </div>
              <div className="rounded-2xl bg-slate-950 p-4">
                <div className="text-slate-400">Coverage</div>
                <div className="mt-1 font-medium">FY2014–FY2025</div>
              </div>
            </div>
          </div>
        </header>

        <section id="dashboard" className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-black/20">
              <div className="text-sm text-slate-400">{kpi.label}</div>
              <div className="mt-3 text-3xl font-semibold text-white">{kpi.value}</div>
              <div className="mt-2 text-sm text-slate-300">{kpi.note}</div>
            </div>
          ))}
        </section>

        <section className="mb-8 grid gap-6 xl:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Debt trajectory</h2>
                <p className="text-sm text-slate-400">Public debt trend in PKR trillion</p>
              </div>
              <div className="rounded-2xl bg-slate-950 px-3 py-2 text-xs text-slate-300">Illustrative visual from workbook series</div>
            </div>
            <div className="flex h-72 items-end gap-2 rounded-2xl bg-slate-950/80 p-4">
              {debtSeries.map((value, idx) => (
                <div key={labels[idx]} className="flex flex-1 flex-col items-center justify-end gap-2">
                  <div
                    className="w-full rounded-t-2xl bg-cyan-400/80 transition hover:bg-cyan-300"
                    style={{ height: `${(value / maxDebt) * 220}px` }}
                  />
                  <div className="text-[11px] text-slate-400">FY{labels[idx]}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20">
            <div className="mb-5">
              <h2 className="text-xl font-semibold text-white">Growth pattern</h2>
              <p className="text-sm text-slate-400">Real GDP growth by fiscal year</p>
            </div>
            <div className="space-y-3 rounded-2xl bg-slate-950/80 p-4">
              {growthSeries.map((value, idx) => {
                const positive = value >= 0;
                return (
                  <div key={labels[idx]} className="grid grid-cols-[48px_1fr_60px] items-center gap-3">
                    <div className="text-xs text-slate-400">FY{labels[idx]}</div>
                    <div className="h-3 rounded-full bg-slate-800">
                      <div
                        className={`h-3 rounded-full ${positive ? "bg-emerald-400" : "bg-rose-400"}`}
                        style={{ width: `${(Math.abs(value) / maxGrowth) * 100}%` }}
                      />
                    </div>
                    <div className="text-right text-sm font-medium text-slate-200">{value}%</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mb-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Political tenure comparison</h2>
                <p className="text-sm text-slate-400">Growth, debt increase, and verdict by PM era</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800">
              <div className="grid grid-cols-[1.4fr_.8fr_.8fr_1.5fr] bg-slate-950 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                <div>Tenure</div>
                <div>Avg Growth</div>
                <div>Debt Increase</div>
                <div>Verdict</div>
              </div>
              {tenureRows.map((row, idx) => (
                <div
                  key={row.tenure}
                  className={`grid grid-cols-[1.4fr_.8fr_.8fr_1.5fr] gap-3 px-4 py-4 text-sm ${idx !== tenureRows.length - 1 ? "border-t border-slate-800" : ""}`}
                >
                  <div>
                    <div className="font-semibold text-white">{row.tenure}</div>
                    <div className="text-slate-400">{row.years}</div>
                  </div>
                  <div className="font-medium text-emerald-300">{row.growth}</div>
                  <div className="font-medium text-cyan-300">{row.debt}</div>
                  <div className="text-slate-300">{row.verdict}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20">
            <div className="mb-5">
              <h2 className="text-xl font-semibold text-white">Lender heatmap</h2>
              <p className="text-sm text-slate-400">Selected lender intensity across the period</p>
            </div>
            <div className="space-y-4">
              {lenders.map((lender) => (
                <div key={lender.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-200">{lender.name}</span>
                    <span className="text-slate-400">{lender.strength}/100</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-800">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                      style={{ width: `${lender.strength}%` }}
                    />
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{lender.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20">
            <div className="mb-5">
              <h2 className="text-xl font-semibold text-white">Province-wise signals</h2>
              <p className="text-sm text-slate-400">Directional provincial debt indicators</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {provinces.map((province) => (
                <div key={province.name} className="rounded-2xl bg-slate-950 p-4">
                  <div className="text-sm text-slate-400">{province.name}</div>
                  <div className="mt-2 text-2xl font-semibold text-white">{province.stat}</div>
                  <div className="mt-2 text-sm text-slate-300">{province.note}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20">
            <div className="mb-5">
              <h2 className="text-xl font-semibold text-white">Scenario simulator</h2>
              <p className="text-sm text-slate-400">Simplified stress themes from the workbook</p>
            </div>
            <div className="space-y-4">
              {scenarios.map((scenario) => (
                <div key={scenario.title} className="rounded-2xl bg-slate-950 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-base font-semibold text-white">{scenario.title}</div>
                    <div className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">Stress Test</div>
                  </div>
                  <div className="mt-2 text-sm font-medium text-cyan-300">{scenario.impact}</div>
                  <div className="mt-2 text-sm text-slate-400">{scenario.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-8 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20">
            <div className="mb-5">
              <h2 className="text-xl font-semibold text-white">Power sector deep dive</h2>
              <p className="text-sm text-slate-400">Circular debt remains one of the hardest structural drags</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-950 p-4">
                <div className="text-sm text-slate-400">2018 marker</div>
                <div className="mt-2 text-2xl font-semibold text-white">PKR 1,148B</div>
                <div className="mt-2 text-sm text-slate-300">Budget-speech marker for circular debt</div>
              </div>
              <div className="rounded-2xl bg-slate-950 p-4">
                <div className="text-sm text-slate-400">2022 marker</div>
                <div className="mt-2 text-2xl font-semibold text-white">PKR 2,467B</div>
                <div className="mt-2 text-sm text-slate-300">Sharp increase during PTI years</div>
              </div>
              <div className="rounded-2xl bg-slate-950 p-4">
                <div className="text-sm text-slate-400">2025 facility</div>
                <div className="mt-2 text-2xl font-semibold text-white">PKR 1,275B</div>
                <div className="mt-2 text-sm text-slate-300">Banking facility to ease sector pressure</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20">
            <div className="mb-5">
              <h2 className="text-xl font-semibold text-white">Core conclusions</h2>
            </div>
            <ul className="space-y-3 text-sm leading-6 text-slate-300">
              <li className="rounded-2xl bg-slate-950 p-4">Debt expanded much faster than productivity gains across the period.</li>
              <li className="rounded-2xl bg-slate-950 p-4">Borrowing often financed deficits, rollovers, and servicing more than transformation.</li>
              <li className="rounded-2xl bg-slate-950 p-4">Political comparisons matter, but structural weaknesses outlast governments.</li>
              <li className="rounded-2xl bg-slate-950 p-4">FX depreciation and energy-sector stress remain central macro risks.</li>
            </ul>
          </div>
        </section>

        <section id="method" className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-xl font-semibold text-white">Method & portfolio framing</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                This site is designed as a portfolio presentation layer for the underlying Excel model.
                It summarizes macro series, political-tenure comparisons, lender mix, stress scenarios,
                provincial indicators, and power-sector debt themes in a cleaner web format.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-950 p-4">
                <div className="text-sm text-slate-400">Best next upgrade</div>
                <div className="mt-2 font-medium text-white">Connect real CSV / JSON data</div>
              </div>
              <div className="rounded-2xl bg-slate-950 p-4">
                <div className="text-sm text-slate-400">Portfolio use</div>
                <div className="mt-2 font-medium text-white">GitHub Pages / Vercel showcase</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
