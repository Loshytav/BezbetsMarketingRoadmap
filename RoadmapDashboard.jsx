import React, { useState } from "https://esm.sh/react";
import { Smartphone, MapPin, RefreshCw, Trophy, Radio } from "https://esm.sh/lucide-react";

export default function RoadmapDashboard() {
  const [q, setQ] = useState("Q1");

  const data = {
    Q1: ["Digital branch rollout", "30% branch-to-app conversion", "QR onboarding"],
    Q2: ["City expansion", "Billboards & kombi branding", "Street promoters"],
    Q3: ["Daily $0.50-$1 bets", "App notifications", "Retention focus"],
    Q4: ["Radio & TV ads", "Organic Facebook + paid compliant platforms", "Bettor education"]
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Bezbets 2026 Roadmap</h1>
      <div className="flex gap-3 mb-6">
        {Object.keys(data).map(k => (
          <button key={k} onClick={() => setQ(k)} className="px-4 py-2 bg-slate-800 rounded">
            {k}
          </button>
        ))}
      </div>
      <ul className="space-y-3">
        {data[q].map((g,i)=>(
          <li key={i} className="bg-slate-900 p-4 rounded">{g}</li>
        ))}
      </ul>
    </div>
  );
}
