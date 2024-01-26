import { useState } from "react";
import { EmptyState, HomeState } from "./EmptyStates";
import { HeroSelectMenu, RaritySelectMenu } from "./Select";

const Home = () => {
  const [selectedHeroId, setSelectedHeroId] = useState<string | null>(null);
  const [selectedRarityId, setSelectedRarityId] = useState<string | null>(null);

  const handleClick = () => {
    console.log("Selected Hero ID:", selectedHeroId);
    console.log("Selected Rarity ID:", selectedRarityId);
    // Perform actions with the selected hero ID
  };

  return (
    <div className="h-full w-full flex flex-col">
      <div className="bg-slate-100 flex justify-center items-center flex-grow">
        <HomeState />
      </div>
      {/* Section for select menus */}
      <div className="flex flex-row bg-slate-500 justify-center gap-3 py-1 border border-black items-center">
        <HeroSelectMenu onSelectHero={heroId => setSelectedHeroId(heroId)} />
        <RaritySelectMenu
          onSelectRarity={rarityId => setSelectedRarityId(rarityId)}
        />
        <div className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded flex ">
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
      {/* Section for empty state */}
      <div className="flex-grow flex justify-center items-center bg-slate-100">
        <EmptyState />
      </div>
    </div>
  );
};

export default Home;
