import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f8f9fa',
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      },
      card: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 20,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        // Adicione uma sombra no iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        // Adicione uma sombra no Android
        elevation: 2,
      },
      largeCard: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 20,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        // Adicione uma sombra no iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        // Adicione uma sombra no Android
        elevation: 2,
      },
      cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
      },

});