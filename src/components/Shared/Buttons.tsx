import { Button } from '@mantine/core';

interface ButtonProps {
  text: string;
  styles: string;
  leftIcon?: React.ReactNode;
  event?: any;
  type?: 'button' | 'reset' | 'submit';
}

interface ButtonsType {
  Outlined: React.FC<ButtonProps>;
  Filled: React.FC<ButtonProps>;
}

const Outlined: React.FC<ButtonProps> = ({
  leftIcon,
  text,
  styles,
  type = 'button',
  event = () => {},
}: ButtonProps) => {
  return (
    <Button
      variant="outlined"
      radius="md"
      onClick={event}
      type={type}
      leftIcon={leftIcon}
      classNames={{
        root: `${styles} border-2 border-solid`,
      }}
    >
      {text}
    </Button>
  );
};

const Filled: React.FC<ButtonProps> = ({
  leftIcon,
  text,
  styles,
  type = 'button',
  event = () => {},
}: ButtonProps) => {
  return (
    <Button
      variant="filled"
      radius="md"
      type={type}
      onClick={event}
      leftIcon={leftIcon}
      classNames={{
        root: `${styles}`,
      }}
    >
      {text}
    </Button>
  );
};

const Buttons: ButtonsType = {
  Outlined,
  Filled,
};

export default Buttons;
