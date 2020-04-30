import React, {useEffect, useRef, useImperativeHandle, forwardRef} from 'react';
import {TextInputProps} from 'react-native';
import {useField} from '@unform/core';

import {Input} from './styles';

interface InputProps extends TextInputProps {
  name: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const TextInput: React.RefForwardingComponent<InputRef, InputProps> = (
  {name, ...rest},
  ref,
) => {
  const inputElementRef = useRef<any>(null);

  const {registerField, defaultValue = '', fieldName, error} = useField(name);
  const inputValueRef = useRef<InputValueReference>({value: defaultValue});

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({text: value});
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Input
      ref={inputElementRef}
      defaultValue={defaultValue}
      onChangeText={(value) => {
        inputValueRef.current.value = value;
      }}
      {...rest}
    />
  );
};

export default forwardRef(TextInput);
