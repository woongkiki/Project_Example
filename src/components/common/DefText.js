import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colorSelect, fsize, fweight} from './StyleCommon';

const DefText = props => {
  const {text, style, numberOfLines = 1} = props;

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[fweight.r, fsize.fs14, styles.defText, style]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  defText: {
    color: colorSelect.black,
    textAlign: 'left',
  },
});

export default DefText;
