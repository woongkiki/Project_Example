import React, {useEffect, useRef, useState} from 'react';
import {BackHandler, ToastAndroid} from 'react-native';
import Main from './src/srcreen/Main';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  const exitApp = useRef(false);
  const timeoutRef = useRef(null);

  const handleBackButton = () => {
    if (!exitApp.current) {
      ToastAndroid.show('한번 더 누르시면 종료됩니다.', ToastAndroid.SHORT);
      exitApp.current = true;

      timeoutRef.current = setTimeout(() => {
        exitApp.current = false;
      }, 2000);
    } else {
      clearTimeout(timeoutRef.current);
      BackHandler.exitApp();
    }
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButton,
    );

    const loadingTimer = setTimeout(() => {
      setIsLoading(true);
    }, 2000);

    return () => {
      backHandler.remove(); // ✅ RN 0.78 방식
      clearTimeout(loadingTimer);
      clearTimeout(timeoutRef.current);
      exitApp.current = false;
    };
  }, []);

  return <Main />;
};

export default App;
