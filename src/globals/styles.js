/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: 'lightskyblue',
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'lightskyblue',
    backgroundColor: 'white',
  },
  passwordInput: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'lightskyblue',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'springgreen',
    padding: 10,
    width: 100,
    borderRadius: 6,
    marginTop: 10,
    alignSelf: 'center',
  },
});

export default styles;