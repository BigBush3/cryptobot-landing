import styled, { css } from 'styled-components';
import { Typography } from '@/core/atoms';

// variants: default, darkOutline
const Button = ({ children, variant = 'default', ...props }) => {
  const darkOutline = variant === 'darkOutline';

  return (
    <ButtonContainer darkOutline={darkOutline} {...props}>
      <Typography color={'blue.regular'}>{children}</Typography>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  flex-direction: row;
  padding: 18px 42px;
  align-items: center;
  border-radius: 900px;
  border: none;
  background-color: ${(p) => p.theme.colors.blue.light};
  color: ${(p) => p.theme.colors.blue.regular};
  ${(p) =>
    p.darkOutline &&
    css`
      background-color: ${(p) => p.theme.colors.blue.dark};
      border: 1px solid rgba(255, 255, 255, 0.6);
      color: ${(p) => p.theme.colors.white};
    `};
`;

export default Button;
