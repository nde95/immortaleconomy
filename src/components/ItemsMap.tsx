import { itemData } from "../assets/itemdata";

interface ItemsMapProps {
  icon_url: string;
  name: string;
  sell_listings: number;
  sell_price_text: string;
}

const ItemsMap: React.FC<ItemsMapProps> = () => {
  return (
    <div className="mt-2 container mx-3">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
        {itemData.map((item, index) => (
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsMap;
