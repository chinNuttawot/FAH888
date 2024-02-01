import React from 'react';
import {Image, Linking, View} from 'react-native';
import styles from './Styles';
import {Buttom} from '../../components';
import Images from '../../assets/logo';
import AppSetting from '../../common/AppSettings.json';

const onOpen = url => {
  Linking.openURL(url);
};

const HomeScreen = () => {
  return (
    <View style={styles.main}>
      <View style={styles.mainImages}>
        <Image source={Images.Logo} style={styles.Images} />
      </View>
      <Buttom
        title={'เข้าสู่ระบบ'}
        onPress={() => {
          onOpen(AppSetting.urlLogin);
        }}
      />
      <Buttom
        title={'สมัครสมาชิก'}
        onPress={() => {
          onOpen(AppSetting.urlRegister);
        }}
      />
      <Buttom
        title={'Line'}
        onPress={() => {
          onOpen(AppSetting.urlLine);
        }}
      />
      <Buttom
        title={'ติดต่อเรา'}
        onPress={() => {
          onOpen(`tel:${AppSetting.tel}`);
        }}
      />
    </View>
  );
};
export default HomeScreen;
