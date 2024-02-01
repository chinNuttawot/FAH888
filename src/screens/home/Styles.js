import {StyleSheet} from 'react-native';
import theme from '../../common/styles/theme.style';

const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.M_NAVY_200,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  mainImages: {alignSelf: 'center', marginBottom: 100},
  Images: {width: 110, height: 110, borderRadius: 100},
});

export default styles;
