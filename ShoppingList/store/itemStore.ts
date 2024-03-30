import { useReducer } from 'react';
// items store
interface Item {
  id: string;
  name: string;
  quantity: number;
}
// Define the types of actions that can be dispatched
type Action = 
  | { type: 'ADD_ITEM', payload: { name: string; quantity: number } }
  | { type: 'DELETE_ITEM', payload: { id: string } };
// Define the reducer function that handles dispatched actions
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
// Define a custom hook to use the items store
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