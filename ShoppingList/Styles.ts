import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // layout styles
  container: {
    flex: 1,
    backgroundColor: '#24292e',
    
  },

  card: {
    marginTop: 20,
    width: '100%',
    alignSelf: 'center',
    padding: 15,
    borderRadius: 25,
    backgroundColor: '#1b2838',
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
    margin: 5,
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

  // AddItem styles
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    fontStyle: 'italic',
    fontVariant: ['small-caps'],
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 50,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },

  error: {
    color: 'red',
    marginLeft: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  fab: {
    alignSelf: 'center',  
    backgroundColor: 'rgba(211, 211, 211, 0.6)',
   
  },

  // Itemlist styles
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
    backgroundColor: 'rgba(10, 10, 10, 0.8)',
    width: 30,
    height: 30,
    borderRadius: 15,
    textAlign: 'center',
    lineHeight: 30,
    textAlignVertical: 'center',
  },

  // button styles from additem and itemlist


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

  // Header styles
  headerContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#24292e',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  headerText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  backButtonText: {
    fontSize: 30,
    color: '#ffffff',
  },

  menuButton: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 10,
  },

  menuButtonText: {
    fontWeight: 'bold',
  },
});