import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/screens/home/HomeScreen';
import theme from './src/common/styles/theme.style';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: theme.M_NAVY_300,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <HomeScreen />
    </SafeAreaView>
  );
}

export default App;
