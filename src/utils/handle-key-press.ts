import { KeyboardEvent } from 'react';

export const handleKeyPress = (
  event: KeyboardEvent<HTMLFormElement>,
  key: string,
  fn: () => void,
) => {
  if (event.key === key) {
    fn();
  }
};
