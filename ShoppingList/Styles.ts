import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
      },
    
    card: {
        width: '95%',
        alignSelf: 'center',
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#f8f8f8',
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        fontSize: 18,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        backgroundColor: '#f8f8f8',
        borderRadius: 5,
        marginVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
    },
    input: {
        marginBottom: 10,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        height: 50,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
    },
    badd: {
       
        alignSelf: 'center',
        width: 50, 
        
   
      },
    bdelete: {
        backgroundColor: '#FF3B30',
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
      },
});