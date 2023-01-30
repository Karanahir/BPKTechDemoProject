import {StyleSheet, Platform} from 'react-native';

import Colors from '../../Helper/Constant';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  itemView: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
  itemView2: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: '80%',
    height: '40%',
    marginTop: '5%',
  },
  image1: {
    width: 300,
    height: 300,
    marginTop: '5%',
  },
  cardStyle: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '80%',
    marginLeft: '10%',
    borderWidth: 2,
    borderColor: Colors.primaryColor,
    margin: '2%',
    paddingLeft: '1%',
    elevation: 8,
  },
  cardStyle1: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: '40%',
    marginLeft: '30%',
    marginBottom: '5%',
    marginTop: '10%',
    elevation: 8,
  },
  cardStyle2: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: '90%',
    marginBottom: '5%',
    marginTop: '10%',
    elevation: 8,
  },
  inputView: {
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    padding: Platform.OS === 'ios' ? 10 : 0,
  },
  progressView: {
    marginTop: '10%',
    marginBottom: '10%',
  },

  textView: {
    color: 'black',
  },
  forgot_button: {
    height: 30,
    marginTop: 30,
    color: 'black',
  },
  resend_button: {
    height: 40,
    color: 'black',
    elevation: 8,
  },
  textStyle2: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
    marginRight: 10,
  },
  loginBtn: {
    borderRadius: 10,

    backgroundColor: Colors.primaryColor,
    elevation: 8,
  },
  example: {
    marginVertical: 24,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});

export default styles;
