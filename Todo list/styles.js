import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      padding: 20,
      paddingTop: 50,
      backgroundColor: '#000000', // pure black
    },
    header: {
      fontSize: 50, 
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      color: 'orange', // white
    },
    filterButtons: {
      borderRadius: 10,
      backgroundColor: '#1C1C1E', // dark gray
      padding: 15,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 10,
      elevation: 5,
    },
    emptyMessage: {
      color: '#FFFFFF', // white
      textAlign: 'center',
      marginTop: 20,
      fontSize: 20,
    },
  
    donebutton: {
      marginRight: 10,
      padding: 10,
      borderRadius: 10,
      fontWeight: 'bold',
      elevation: 3, 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 10,
    },
    animation: {
      width: 150,
      height: 150,
      alignSelf: 'center',
      marginBottom: 20,
    },
    input: {
      borderRadius: 10,
      height: 40,
      borderColor: '#3A3A3C', // even darker gray
      backgroundColor: '#1C1C1E', // dark gray
      fontWeight: 'bold',
      borderWidth: 1,
      fontSize: 17,
      marginBottom: 10,
      paddingHorizontal: 8,
      color: '#FFFFFF', // white
    },
    todoItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      justifyContent: 'space-between',
      backgroundColor: '#1C1C1E', // dark gray
      padding: 10, 
      borderRadius: 10, 
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 10,
      elevation: 5,
    },
    todoText: {
      flex: 1,
      color: '#FFFFFF', // white
      fontWeight: 'bold',
      fontSize: 18,
    },
  });

  export default styles;