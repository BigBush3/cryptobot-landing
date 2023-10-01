import styled, { css } from 'styled-components';

import { colorMixin, spacingMixin, typographyMixin } from '@/core/mixins';

const Typography = styled.p`
  font-style: normal;
  ${typographyMixin}
  ${spacingMixin}
  ${colorMixin}
  ${(p) =>
    p.elevated &&
    css`
      text-shadow: 0 0 0.5px rgba(0, 0, 0, 0.7);
    `}
    margin-block-start: 0;
  margin-block-end: 0;
`;

export default Typography;
