import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './Styles';

const Buttom = props => {
  const {title, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress && onPress} style={styles.mainButtom}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
export default Buttom;