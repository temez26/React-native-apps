import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../../styles.js';
// Setting what filter to show
interface FilterButtonsProps {
  setFilter: (filter: string) => void;
}

export const FilterButtons: React.FC<FilterButtonsProps> = ({ setFilter }) => {
  return (
    <View style={[styles.filterButtons,{ flexDirection: 'row', justifyContent: 'space-between' }]}>
      <TouchableOpacity onPress={() => setFilter('all')} style={{backgroundColor: "#0A84FF", padding: 10,borderRadius: 5,}}>
        <Text style={{fontSize: 25, color: 'white'}}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setFilter('completed')} style={{backgroundColor: "#34C759", padding: 10,borderRadius: 5,}}>
        <Text style={{fontSize: 25, color: 'white'}}>Completed</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setFilter('active')} style={{backgroundColor: "#FF3B30", padding: 10,borderRadius: 5,}}>
        <Text style={{fontSize: 25, color: 'white'}}>Active</Text>
      </TouchableOpacity>
    </View>
  );
};