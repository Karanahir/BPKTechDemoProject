import {StyleSheet, Platform} from 'react-native';
import Colors from '../../Helper/Constant';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  container2: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  itemView: {
    marginLeft: '25%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  itemView2: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputContainer: {
    borderLeftWidth: 4,
    borderRightWidth: 4,
    height: 70,
  },
  titleStyle: {
    fontSize: hp('2.5%'),
    textAlign: 'center',
    color: Colors.primaryColor,
    marginTop: 5,
    marginBottom: 5,
  },
  inputView: {
    width: '75%',
    backgroundColor: '#FFF',
    fontSize: hp('2.5%'),
    textAlign: 'center',
    color: 'black',
    marginLeft: 10,
    marginRight: 10,
    marginTop: Platform.OS === 'ios' ? 10 : 0,
    marginBottom: Platform.OS === 'ios' ? 10 : 0,
    alignSelf: 'center',
  },
  itemStyle3: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 30,
    color: Colors.primaryColor,
    borderWidth: 1.0,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    borderColor: Colors.primaryColor,
  },
  itemStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    alignItems: 'center',
    padding: 5,
  },
  itemStyle2: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  underLine: {
    height: 1,
    backgroundColor: 'grey',
    marginTop: 5,
  },
  textStyle: {
    fontSize: 12,
    color: 'black',
  },
  textStyle2: {
    fontSize: 16,
    color: 'black',
  },
  cardStyle: {
    margin: 10,
    elevation: 8,
  },
  cardStyle2: {
    margin: 10,
    elevation: 8,
    borderRadius: 20,
    alignSelf: 'baseline',
  },
  cardStyle3: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    width: '40%',
    margin: '5%',
    alignItems: 'center',
    padding: 10,
    elevation: 8,
  },
  bottomView: {
    height: '8%',
  },
});

export default styles;
