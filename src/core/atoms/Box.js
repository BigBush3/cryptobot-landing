import styled, { css } from 'styled-components';

import { spacingMixin, flexMixin, colorMixin } from '@/core/mixins';

const Box = styled.div`
  display: flex;
  ${spacingMixin}
  ${flexMixin}
  ${colorMixin}
  ${(p) =>
    p.zIndex &&
    css`
      z-index: ${p.zIndex};
    `}
  ${(p) =>
    p.position &&
    css`
      position: ${p.position};
    `}
  ${(p) =>
    p.borderTop &&
    css`
      border-top-width: 1px;
      border-top-color: ${p.theme.colors.gray.light};
    `}
  ${(p) =>
    p.borderBottom &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${p.theme.colors.gray.light};
    `}
`;

export default Box;
