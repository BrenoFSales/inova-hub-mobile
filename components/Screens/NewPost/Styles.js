import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: '100%'
    },

    inputs:{
        width: '80%',
        backgroundColor: 'white',
        borderWidth: 1.5,
        borderColor: 'grey',
        borderRadius: 10,
        padding: 10,
        marginBottom: 30,
        color: 'black',
        fontSize: 15,
        opacity: 0.7
    },

    button:{
        width: '50%',
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },

    txtButton:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    
      arrowBtn: {
        marginBottom: 40,
        marginTop: -60,
        marginLeft: -250
      }

});