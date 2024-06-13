import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 20
    },

    comunidadesView:{
        minHeight: 220,
        width: '90%',
        flex: 1,
        flexWrap: 'wrap',
        justifyContent:'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#D9D9D9',
        borderRadius: 20
    },

    comunidadesItens:{
        backgroundColor: 'grey',
        borderRadius: 50,
        width: 60,
        height: 60,
    },

    textSection:{
        marginTop: 5
    },

    perfilInfo: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingBottom: 60,
        marginTop: 20,
        borderBottomWidth: 2,
        borderBottomColor: 'lightgrey',
    },

    perfilFoto:{
        width: 150,
        height: 150,
        borderRadius: 90,
        backgroundColor: '#D9D9D9',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    section:{
        alignItems: 'center',
    },

    floatingBtn:{
        position: 'absolute',
        right: 40,
        bottom: 60,
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },

    card:{
        marginTop: 50,
        backgroundColor: '#F2F3F4'
    },

    cardTitle:{
        fontSize: 25,
        padding: 10
    },

    upVote:{
        color: 'orange',
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center'
    },

    noPostText:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'orange'
    },

    image:{
        width: 150,
        height: 150,
        marginVertical: 15,
        margin: 'auto'
    }

});