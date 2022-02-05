import React from 'react';

export const useForm = <T extends Object>(form: T) => {
  const [state, setState] = React.useState(form);
  const onChange = (name: keyof T, value: string) => {
    setState({...state, [name]: value});
  };

  return {
    ...state,
    state,
    onChange,
  };
};
