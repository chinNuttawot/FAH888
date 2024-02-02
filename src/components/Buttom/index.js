import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './Styles';
import theme from '../../common/styles/theme.style';

const Buttom = props => {
  const {title, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress && onPress} style={styles.mainButtom}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Buttom;
