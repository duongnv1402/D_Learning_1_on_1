/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 30,
    backgroundColor: 'lightskyblue',
  },
  imageLogoLogin: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  textTitle: {
    padding:10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  textInput: {
    marginTop:10,
    backgroundColor: 'white',
  },
  passwordInput: {
    marginTop:10,
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'deepskyblue',
    padding: 10,
    width: 200,
    borderRadius: 28,
    marginTop: 10,
    alignSelf: 'center',
  },
  imageLogoItemLogin: {
    width: 60,
    height: 60,
    borderRadius:30,
  },
});

export default styles;
