import React, { useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

const CustomKeyboard = () => {
  const [input, setInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [numericKeyboardOpen, setNumericKeyboardOpen] = useState(false);
  const [emailKeyboardOpen, setEmailKeyboardOpen] = useState(false);
  const [shiftPressed, setShiftPressed] = useState(false);

  const onChange = (input) => {
    setInput(input);
  };

  const onEmailChange = (input) => {
    setEmailInput(input);
  };

  const onKeyPress = (button) => {
    if (button === '{enter}') {
      console.log('CUSTOM AMOUNT:', input);
      // setInput('');
      setNumericKeyboardOpen(false);
    }
  };

  const onEmailKeyPress = (button) => {
    if (button === '{enter}') {
      console.log('EMAIL:', emailInput);
      // setEmailInput('');
      setEmailKeyboardOpen(false);
    } else if (button === '{shift}') {
      // Set the shiftPressed state to true when the shift button is pressed
      setShiftPressed(true);
    } else if (shiftPressed) {
      // If shift is pressed, add the shifted character
      setEmailInput(emailInput + button.toUpperCase());
      setShiftPressed(false); // Reset the shiftPressed state after adding the shifted character
    } else {
      // Otherwise, add the regular character
      setEmailInput(emailInput + button);
    }
  };

  const numericLayout = {
    default: ['1 2 3', '4 5 6', '7 8 9', '{bksp} 0 {enter}'],
  };

  const emailLayout = {
    default: [
      'google.com yahoo.com hotmail.com',
      '1 2 3 4 5 6 7 8 9 0',
      'q w e r t y u i o p',
      'a s d f g h j k l {bksp}',
      '{shift} z x c v b n m @ . {space}',
      '{accept} {enter}'
    ],
    shift: [
      'google.com yahoo.com hotmail.com',
      '~ ! @ # $ % ^ & * ( ) _ +',
      '1 2 3 4 5 6 7 8 9 0',
      'Q W E R T Y U I O P',
      'A S D F G H J K L {bksp}',
      '{shift} Z X C V B N M @ . {space}',
      '{accept} {enter}'
    ]
  };

  const onFocus = (field) => {
    if (field === 'numeric') {
      setNumericKeyboardOpen(true);
    } else if (field === 'email') {
      setEmailKeyboardOpen(true);
    }
  };

  return (
    <>
      <div>
        <input
          type="number"
          value={input}
          onChange={(e) => onChange(e.target.value)}
          placeholder="$Custom Amount..."
          onFocus={() => onFocus('numeric')}
          readOnly // Add the readonly attribute to disable the default keyboard
        />
        {numericKeyboardOpen && (
          <Keyboard
            onChange={onChange}
            onKeyPress={onKeyPress}
            layout={numericLayout}
          />
        )}
      </div>
      <div>
        <input
          type="email"
          value={emailInput}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="Email Address..."
          onFocus={() => onFocus('email')}
          readOnly // Add the readonly attribute to disable the default keyboard
        />
        {emailKeyboardOpen && (
          <Keyboard
            onChange={onEmailChange}
            onKeyPress={onEmailKeyPress}
            layout={emailLayout}
          />
        )}
      </div>
    </>
  );
};

export default CustomKeyboard;
