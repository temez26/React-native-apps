import React, {  ReactNode } from 'react';
import { useItemStore, Item as ItemType } from './itemStore';


interface ItemStore {
    items: Item[];
    addItem: (item: { name: string; quantity: number }) => void;
    deleteItem: (id: string) => void;
    setFavorite: (id: string, favorite: boolean) => void;
  }
  
  const ItemStoreContext = React.createContext<ItemStore | null>(null);

interface ItemStoreProviderProps {
  children: ReactNode;
}
export type Item = ItemType;
export const ItemStoreProvider = ({ children }: ItemStoreProviderProps) => {
  const itemStore = useItemStore();

  return (
    <ItemStoreContext.Provider value={itemStore}>
      {children}
    </ItemStoreContext.Provider>
  );
};

export function useItemStoreContext() {
    const context = React.useContext(ItemStoreContext);
    if (context === null) {
      throw new Error('useItemStoreContext must be used within a ItemStoreContext.Provider');
    }
    return context;
  }
