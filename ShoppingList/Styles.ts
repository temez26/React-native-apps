import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#24292e', // GitHub's dark background color
    },
    title: {
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: '#ffffff', // White color for title
        fontStyle: 'italic',
        fontVariant: ['small-caps'],
    },
    card: {
        marginTop: 50,
        width: '95%',
        alignSelf: 'center',
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#1b2838', // Epic Games' dark background color
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
        margin:5,
        padding: 15,
        fontSize: 18,
    
        backgroundColor: '#1b2838', 
        borderRadius: 5,
        marginVertical: 5,
      
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
        margin: 5,
      
    },
 
    bdelete: {
        backgroundColor: '#FF3B30', 
        padding: 10,
        borderRadius: 10,
        fontWeight: 'bold',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
    },
    bfont: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontSize: 23,
        fontWeight: '600',
        color: '#ffffff', 
        marginLeft: 15,
    },
    quantity: {
        fontSize: 16,
        color: 'white',
        backgroundColor: '#1C1C1E', 
        borderRadius: 10, 
        padding: 5, 
        textAlign: 'center', 
    },
});