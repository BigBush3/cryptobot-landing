import styled, { css } from 'styled-components';
import { hiddenMixin } from '@/core/helpers';

const Container = styled.section`
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  width: ${(p) => p.theme.general.containerWidth.md};
  ${(p) =>
    p.relative &&
    css`
      position: relative;
    `}
  ${(p) =>
    p.noOverflow &&
    css`
      overflow: hidden;
    `}
  ${(p) =>
    p.toFront &&
    css`
      position: relative;
      z-index: 2;
    `}
  ${(p) => p.theme.max('md')`
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
  `}
  ${(p) => p.theme.min('lg')`
    width: ${(p) => p.theme.general.containerWidth.lg};
  `}
  ${(p) =>
    p.mobilePadding &&
    css`
      ${p.theme.max('md')`
      padding-left: ${p.theme.general.mobilePadding};
      padding-right: ${p.theme.general.mobilePadding};
    `}
    `}
  ${hiddenMixin}
`;

export default Container;
