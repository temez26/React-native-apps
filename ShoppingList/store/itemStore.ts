import { useReducer, useEffect } from 'react';


export interface Item {
  id: string;
  name: string;
  quantity: number;
  favorite: boolean;
  deleted: boolean; 
  deletedAt: Date | null; 
}

// Define the types of actions that can be dispatched
type Action = 
  | { type: 'ADD_ITEM', payload: { name: string; quantity: number } }
  | { type: 'DELETE_ITEM', payload: { id: string } }
  | { type: 'SET_FAVORITE', payload: { id: string; favorite: boolean } };

// Define the reducer function that handles dispatched actions
const reducer = (state: Item[], action: Action): Item[] => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        { id: Math.random().toString(), favorite: false, deleted: false, deletedAt: null, ...action.payload },
      ];
    case 'DELETE_ITEM':
      return state.map(item => 
        item.id === action.payload.id ? { ...item, deleted: true, deletedAt: new Date() } : item
      );
    case 'SET_FAVORITE':
      return state.map(item => 
        item.id === action.payload.id ? { ...item, favorite: action.payload.favorite } : item
      );
    default:
      return state;
  }
};

// Define a custom hook to use the items store
export const useItemStore = () => {
  const [items, dispatch] = useReducer(reducer, []);

  const addItem = (item: { name: string; quantity: number }) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const deleteItem = (id: string) => {
    dispatch({ type: 'DELETE_ITEM', payload: { id } });
  };

  const setFavorite = (id: string, favorite: boolean) => {
    dispatch({ type: 'SET_FAVORITE', payload: { id, favorite } });
  };

  const getActiveItems = () => {
    return items.filter(item => !item.deleted);
  };

  const getDeletedItems = () => {
    return items.filter(item => item.deleted);
  };

  return { items: getActiveItems(), deletedItems: getDeletedItems(), addItem, deleteItem, setFavorite };
};