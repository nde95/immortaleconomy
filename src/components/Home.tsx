import { useState } from "react";
import { EmptyState, HomeState } from "./EmptyStates";
import { HeroSelectMenu, RaritySelectMenu } from "./Select";
import ItemsMap from "./ItemsMap";
import { useItemContext } from "../context/ItemContext";
import { ClipLoader } from "react-spinners";

const Home = () => {
  const [selectedHeroId, setSelectedHeroId] = useState<string | null>(null);
  const [selectedRarityId, setSelectedRarityId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { items, setItems } = useItemContext();

  const handleClick = async () => {
    console.log("Selected Hero ID:", selectedHeroId);
    console.log("Selected Rarity ID:", selectedRarityId);
    setIsLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          selectedHeroId,
          selectedRarityId,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Response from server:", data);
        setItems(data);
      } else {
        console.error("Error fetching items", response.statusText);
      }
    } catch (error) {
      console.error("Error sending request to server:", error);
    }
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto h-full w-full flex flex-col relative">
      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white/50">
          <ClipLoader />
        </div>
      )}
      <div className="bg-slate-100 flex justify-center items-center flex-grow">
        <HomeState />
      </div>
      {/* Section for select menus */}
      <div className="flex flex-row bg-slate-500 justify-center gap-3 py-1 border border-black items-center">
        <HeroSelectMenu
          isLoading={isLoading}
          onSelectHero={heroId => setSelectedHeroId(heroId)}
        />
        <RaritySelectMenu
          isLoading={isLoading}
          onSelectRarity={rarityId => setSelectedRarityId(rarityId)}
        />
        <div className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded flex ">
          <button disabled={isLoading} onClick={handleClick}>
            Search
          </button>
        </div>
      </div>
      <div className="flex-grow flex justify-center items-center bg-slate-100">
        {items.length === 0 ? <EmptyState /> : <ItemsMap items={items} />}
      </div>
    </div>
  );
};

export default Home;
