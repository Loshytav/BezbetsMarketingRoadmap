import { motion, AnimatePresence } from "https://esm.sh/framer-motion";
import React, { useState } from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom/client";

const phases = {
  Q1: {
    title: "App = Digital Branch",
    subtitle: "Convert physical bettors into nationwide reach",
    goals: [
      "QR onboarding in all 15 branches",
      "30% branch-to-app conversion",
      "Teller-assisted installs",
      "Harare, Bulawayo & Beitbridge density"
    ]
  },
  Q2: {
    title: "Nationwide Expansion",
    subtitle: "Reach cities & towns without branches",
    goals: [
      "Billboards & flyers in major towns",
      "Kombi & bus branding with QR codes",
      "Street promoters paid per install",
      "Growth point activations"
    ]
  },
  Q3: {
    title: "Daily Betting Habits",
    subtitle: "Low stakes. High frequency.",
    goals: [
      "USD $0.50 – $1 daily football bets",
      "App-only odds & promos",
      "In-app notifications",
      "Dormant user reactivation"
    ]
  },
  Q4: {
    title: "Brand Authority at Scale",
    subtitle: "Trust beats hype",
    goals: [
      "Radio & TV football advertising",
      "Organic Facebook + compliant paid ads",
      "Bettor education content",
      "Nationwide brand dominance"
    ]
  }
};

function App() {
  const [active, setActive] = useState("Q1");

  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto">
      <motion.h1 
        initial={{opacity:0,y:-20}} 
        animate={{opacity:1,y:0}} 
        className="text-5xl font-extrabold mb-4 text-center">
        Bezbets 2026 Growth Roadmap
      </motion.h1>

      <p className="text-center text-slate-400 mb-10">
        A Zimbabwe-executable plan to achieve 10× reach using the Bezbets app
      </p>

      <div className="grid grid-cols-4 gap-4 mb-10">
        {Object.keys(phases).map(q => (
          <motion.button
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}
            key={q}
            onClick={() => setActive(q)}
            className={`p-4 rounded-xl border text-center font-bold ${
              active === q ? "bg-emerald-500/20 border-emerald-400 text-emerald-300" : "border-slate-700 text-slate-400"
            }`}
          >
            {q}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          exit={{opacity:0, y:-20}}
          transition={{duration:0.4}}
          className="bg-slate-900/70 backdrop-blur-xl p-8 rounded-3xl border border-slate-700 shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-2 text-emerald-400">
            {phases[active].title}
          </h2>
          <p className="text-slate-400 mb-6">
            {phases[active].subtitle}
          </p>

          <ul className="grid md:grid-cols-2 gap-4">
            {phases[active].goals.map((g,i)=>(
              <motion.li 
                key={i}
                initial={{opacity:0,x:-10}}
                animate={{opacity:1,x:0}}
                transition={{delay:i*0.1}}
                className="bg-black/40 p-4 rounded-xl border border-slate-700"
              >
                {g}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>

      <motion.div 
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        transition={{delay:0.8}}
        className="mt-16 text-center"
      >
        <div className="text-6xl font-extrabold text-emerald-400">10×</div>
        <p className="text-slate-400">National Reach by December 2026</p>
      </motion.div>
    </div>
  );
}

createRoot(document.getElementById("app")).render(<App />);
