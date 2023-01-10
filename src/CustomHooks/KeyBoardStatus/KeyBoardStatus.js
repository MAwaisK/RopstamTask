import React, { useState, useEffect, } from 'react';
import { Keyboard } from 'react-native';

const KeyBoardStatus = () => {
  const [keyboardStatus, setKeyboardStatus] = useState("Keyboard Hidden");

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("Keyboard Shown");
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("Keyboard Hidden");
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return [keyboardStatus]
}


export default KeyBoardStatus;