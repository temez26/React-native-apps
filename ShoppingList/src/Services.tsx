// services/itemService.ts
interface Item {
    id: string;
    name: string;
    quantity: number;
  }
  
  export const addItem = (currentItems: Item[], item: { name: string; quantity: number }): Item[] => {
    return [
      ...currentItems,
      { id: Math.random().toString(), ...item },
    ];
  };
  
  export const deleteItem = (currentItems: Item[], id: string): Item[] => {
    return currentItems.filter(item => item.id !== id);
  };