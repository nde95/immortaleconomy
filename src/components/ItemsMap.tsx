import { FaSteam } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

interface Item {
  icon_url: string;
  name: string;
  sell_listings: number;
  sell_price_text: string;
}

interface ItemsMapProps {
  items: Item[];
}

const ItemsMap: React.FC<ItemsMapProps> = ({ items }) => {
  const handleItemClick = (itemName: string) => {
    const encodedName = itemName.replace(/\s+/g, "%20");
    const url = `https://steamcommunity.com/market/listings/570/${encodedName}`;

    window.open(url, "_blank");
  };

  return (
    <div className="mt-2 container mx-3">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="px-3 py-2 bg-slate-400 border border-black">
            <img
              src={`https://community.cloudflare.steamstatic.com/economy/image/${item.icon_url}`}
              width={100}
              height={125}
              alt={item.name}
            />
            <div className="font-bold">{item.name}</div>
            <div className="flex flex-col">
              <div>Current listings: {item.sell_listings}</div>
              <div>{item.sell_price_text}</div>
            </div>
            <button
              onClick={() => handleItemClick(item.name)}
              className="bg-green-500 gap-1 hover:bg-green-700 text-white font-bold py-2 px-4 border border-black rounded flex">
              <FaSteam /> <FaArrowRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsMap;
