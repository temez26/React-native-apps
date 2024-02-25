import { Animated } from 'react-native';

export interface Todo {
  id: number;
  title: string;
  done: boolean;
  opacity: Animated.Value;
}