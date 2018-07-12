import styled from 'styled-components';
import { classNameFromProps } from '@app/utils';

const buttonTypeClasses = {
  primary: 'bg-light-green',
  default: 'bg-light-blue',
};

export const Button = styled.button.attrs({
  className: props => `
    f5 link br1 ph3 pv2 mb2 br3 dib white ${classNameFromProps(
      buttonTypeClasses,
      props,
    )}
  `,
})``;

export default Button;
