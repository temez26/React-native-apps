// store/itemStore.ts
import { useReducer } from 'react';

interface Item {
  id: string;
  name: string;
  quantity: number;
}

type Action = 
  | { type: 'ADD_ITEM', payload: { name: string; quantity: number } }
  | { type: 'DELETE_ITEM', payload: { id: string } };

const reducer = (state: Item[], action: Action): Item[] => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        { id: Math.random().toString(), ...action.payload },
      ];
    case 'DELETE_ITEM':
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

export const useItemStore = () => {
  const [items, dispatch] = useReducer(reducer, []);

  const addItem = (item: { name: string; quantity: number }) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const deleteItem = (id: string) => {
    dispatch({ type: 'DELETE_ITEM', payload: { id } });
  };

  return { items, addItem, deleteItem };
};