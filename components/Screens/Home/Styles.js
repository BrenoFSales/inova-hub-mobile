import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#FFFFFF'
    },

    comunidadesView:{
        minHeight: 80,
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        marginBottom: 15,
    },

    comunidadesItens:{
        backgroundColor: 'grey',
        borderRadius: 50,
        width: 60,
        height: 60,
    },

    textSection:{
        marginTop: 5
    }
});