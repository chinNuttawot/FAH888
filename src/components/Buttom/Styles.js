import {StyleSheet} from 'react-native';
import theme from '../../common/styles/theme.style';

const styles = StyleSheet.create({
  mainButtom: {
    backgroundColor: theme.M_NAVY_100,
    padding: 10,
    margin: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: theme.M_NAVY_950,
    alignItems: 'center',
  },
  text: {color: theme.BLACK_COLOR, fontSize: 20},
});

export default styles;
