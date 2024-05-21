import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },

  logo: {
    marginTop: 50,
    marginBottom: 30,

    width: 230,
    resizeMode: 'contain',
  },

  viewInputs:{
    width: '70%',
    marginBottom: 20,
    marginHorizontal: 60,
  },

  inputs:{
    marginBottom: 20,

    backgroundColor: 'white',
    borderRadius: 10,
    margin: 4,
    padding: 5,
  },

  labelInput:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10
  },

  button:{
    backgroundColor: '#FF9913',
    borderRadius: 10,
    padding: 10,
    marginTop: 40,
    width: '70%',
    alignItems: 'center'
  },

  arrowBtn: {
   position: 'absolute',
   left: 20,
   top: 90,
  }

});