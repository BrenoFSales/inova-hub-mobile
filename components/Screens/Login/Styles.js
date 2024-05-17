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
    marginTop: 140,
    marginBottom: 60
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
    backgroundColor: '#0047FF',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    width: '70%',
    alignItems: 'center'
  }

});