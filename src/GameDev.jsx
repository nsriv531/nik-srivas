import { useState } from "react";

export default function GameDev() {
  const [activeTab, setActiveTab] = useState("projects");

  const tabs = [
    { id: "rigs", label: "3D Rigs" },
    { id: "projects", label: "Game Projects" },
    { id: "music", label: "Music" },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <section className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-bold mb-4">nashdashin's Game Dev Portfolio</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A separate space for my game projects, 3D rigs, music, prototypes,
            and creative work.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full border transition-all ${
                activeTab === tab.id
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white border-gray-700 hover:border-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <section className="rounded-2xl border border-gray-800 bg-zinc-950 p-8 shadow-lg">
          {activeTab === "rigs" && (
            <div>
              <h2 className="text-3xl font-bold mb-4">3D Rigs</h2>
              <p className="text-gray-400 mb-6">
                A showcase of character rigs, animation systems, model setups,
                and technical art experiments I have created.
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                <PortfolioCard
                  title="Character Rig"
                  description="A humanoid rig built for animation testing and gameplay prototyping."
                />
                <PortfolioCard
                  title="Creature Rig"
                  description="A custom rig designed for non-human movement and animation practice."
                />
                <PortfolioCard
                  title="Animation Test"
                  description="Movement, idle, attack, and transition experiments for game-ready rigs."
                />
              </div>
            </div>
          )}

          {activeTab === "projects" && (
            <div>
              <h2 className="text-3xl font-bold mb-4">Game Projects</h2>
              <p className="text-gray-400 mb-6">
                A collection of games, prototypes, jam submissions, and
                experiments I have worked on across different engines.
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                <PortfolioCard
                  title="First-Person Horror Prototype"
                  description="A retro-inspired horror action game concept focused on atmosphere, melee combat, and narrative."
                />
                <PortfolioCard
                  title="Godot Roguelike Prototype"
                  description="A 2D beat-em-up roguelike prototype with movement, upgrades, and combat systems."
                />
                <PortfolioCard
                  title="Unity Game Jam Project"
                  description="A fast-built game prototype developed under hackathon or game jam constraints."
                />
              </div>
            </div>
          )}

          {activeTab === "music" && (
            <div>
              <h2 className="text-3xl font-bold mb-4">Music</h2>
              <p className="text-gray-400 mb-6">
                A space for music, sound design, themes, loops, and audio work
                connected to my games and creative projects.
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                <PortfolioCard
                  title="Battle Theme"
                  description="A high-energy track idea for action sequences or boss fights."
                />
                <PortfolioCard
                  title="Ambient Loop"
                  description="Atmospheric background music for exploration, horror, or sci-fi environments."
                />
                <PortfolioCard
                  title="Sound Design Tests"
                  description="Experiments with footsteps, impacts, UI sounds, and environmental audio."
                />
              </div>
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

function PortfolioCard({ title, description }) {
  return (
    <div className="rounded-xl border border-gray-800 bg-black p-5 hover:border-gray-500 transition-all">
      <div className="mb-4 h-36 rounded-lg bg-zinc-900 border border-gray-800 flex items-center justify-center text-gray-600">
        Preview
      </div>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}