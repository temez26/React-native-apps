import { useReducer, useEffect } from 'react';

// items store
export interface Item {
  id: string;
  name: string;
  quantity: number;
  favorite: boolean; // Add favorite property
}

// Define the types of actions that can be dispatched
type Action = 
  | { type: 'ADD_ITEM', payload: { name: string; quantity: number } }
  | { type: 'DELETE_ITEM', payload: { id: string } }
  | { type: 'SET_FAVORITE', payload: { id: string; favorite: boolean } }; // Add SET_FAVORITE action

// Define the reducer function that handles dispatched actions
const reducer = (state: Item[], action: Action): Item[] => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        { id: Math.random().toString(), favorite: false, ...action.payload }, // Set favorite as false by default
      ];
    case 'DELETE_ITEM':
      return state.filter(item => item.id !== action.payload.id);
    case 'SET_FAVORITE': // Handle SET_FAVORITE action
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

  useEffect(() => {
    console.log('Items:', items);
  }, [items]);

  const addItem = (item: { name: string; quantity: number }) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const deleteItem = (id: string) => {
    dispatch({ type: 'DELETE_ITEM', payload: { id } });
  };

  const setFavorite = (id: string, favorite: boolean) => { // Add setFavorite function
    dispatch({ type: 'SET_FAVORITE', payload: { id, favorite } });
  };

  return { items, addItem, deleteItem, setFavorite }; // Return setFavorite
};