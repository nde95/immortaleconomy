import React, { createContext, useState, useContext, ReactNode } from "react";

interface Item {
  icon_url: string;
  name: string;
  sell_listings: number;
  sell_price_text: string;
}

interface ItemContextType {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
  clearItems: () => void;
}

const ItemContext = createContext<ItemContextType | undefined>(undefined);

interface ItemProviderProps {
  children: ReactNode;
}

export const ItemProvider: React.FC<ItemProviderProps> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);

  const clearItems = () => {
    setItems([]);
  };

  return (
    <ItemContext.Provider value={{ items, setItems, clearItems }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItemContext = () => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error("useItemContext must be used within an ItemProvider");
  }
  return context;
};
