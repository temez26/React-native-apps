import { Item } from '../store/itemStore';
// It returns a new array that includes all the current items and the new item
// The new item is given a random id
  export const addItem = (currentItems: Item[], item: { name: string; quantity: number }): Item[] => {
    return [
      ...currentItems,
      { id: Math.random().toString(), ...item },
    ];
  };
// This function takes the current list of items and an id as parameters
// It returns a new array that includes all the items except the one with the given id
  export const deleteItem = (currentItems: Item[], id: string): Item[] => {
    return currentItems.filter(item => item.id !== id);
  };