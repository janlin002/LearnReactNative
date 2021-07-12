import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

function MyButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
}

export default MyButton;

MyButton.PropTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};
MyButton.defaultProps = {
  text: 'hello',
};
