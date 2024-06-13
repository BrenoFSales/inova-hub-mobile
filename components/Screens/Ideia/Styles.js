import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      height: '100%'
    },

    title:{
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      marginTop: 20,
      color: 'orange'
    },

    image: {
      width: '100%',
      height: 200,
      marginBottom: 30,
      borderWidth: 3,
      borderColor: 'orange',
    },

    description:{
      fontSize: 15,
      margin: 20,
      textAlign: 'justify'
    },

    arrowBtn: {
      position: 'absolute',
      left: 20,
      top: 20,
      zIndex: 10
    }
});