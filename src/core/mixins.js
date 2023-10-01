import { Platform } from 'react-native';

import { vh, vw } from '@core/ui/helpers';

export const spacingMixin = (props) => {
  let rules = '';
  if (props.m) rules += `margin: ${props.m * props.theme.spaces.base}px;`;
  if (props.mx)
    rules += `margin-left: ${
      props.mx * props.theme.spaces.base
    }px; margin-right: ${props.mx * props.theme.spaces.base}px;`;
  if (props.my)
    rules += `margin-top: ${
      props.my * props.theme.spaces.base
    }px; margin-bottom: ${props.my * props.theme.spaces.base}px;`;
  if (props.mt) rules += `margin-top: ${props.mt * props.theme.spaces.base}px;`;
  if (props.mr)
    rules += `margin-right: ${props.mr * props.theme.spaces.base}px;`;
  if (props.mb)
    rules += `margin-bottom: ${props.mb * props.theme.spaces.base}px;`;
  if (props.ml)
    rules += `margin-left: ${props.ml * props.theme.spaces.base}px;`;
  if (props.p) rules += `padding: ${props.p * props.theme.spaces.base}px;`;
  if (props.px)
    rules += `padding-left: ${
      props.px * props.theme.spaces.base
    }px; padding-right: ${props.px * props.theme.spaces.base}px;`;
  if (props.py)
    rules += `padding-top: ${
      props.py * props.theme.spaces.base
    }px; padding-bottom: ${props.py * props.theme.spaces.base}px;`;
  if (props.pt)
    rules += `padding-top: ${props.pt * props.theme.spaces.base}px;`;
  if (props.pr)
    rules += `padding-right: ${props.pr * props.theme.spaces.base}px;`;
  if (props.pb)
    rules += `padding-bottom: ${props.pb * props.theme.spaces.base}px;`;
  if (props.pl)
    rules += `padding-left: ${props.pl * props.theme.spaces.base}px;`;
  if (props.pbx)
    rules += `padding-bottom: ${
      props.pbx * props.theme.spaces.base + props.theme.insets.bottom
    }px;`;
  if (props.mbx)
    rules += `margin-bottom: ${
      props.mbx * props.theme.spaces.base + props.theme.insets.bottom
    }px;`;
  if (props.ptx)
    rules += `padding-top: ${
      props.ptx * props.theme.spaces.base + props.theme.insets.top
    }px;`;
  if (props.mtx)
    rules += `margin-top: ${
      props.mtx * props.theme.spaces.base + props.theme.insets.top
    }px;`;
  if (props.mth) rules += `margin-top: ${props.mth * vh}px;`;
  if (props.mtw) rules += `margin-top: ${props.mtw * vw}px;`;
  if (props.mrw) rules += `margin-right: ${props.mrh * vw}px;`;
  if (props.mbh) rules += `margin-bottom: ${props.mbh * vh}px;`;
  if (props.mlw) rules += `margin-left: ${props.mlw * vw}px;`;
  if (props.pth) rules += `padding-top: ${props.pth * vh}px;`;
  if (props.prw) rules += `padding-right: ${props.prw * vw}px;`;
  if (props.pbh) rules += `padding-bottom: ${props.pbh * vh}px;`;
  if (props.plw) rules += `padding-left: ${props.plw * vw}px;`;
  if (props.mtp) rules += `margin-top: ${props.mth}%;`;
  if (props.mrp) rules += `margin-right: ${props.mrp}%;`;
  if (props.mbp) rules += `margin-bottom: ${props.mbp}%;`;
  if (props.mlp) rules += `margin-left: ${props.mlp}%;`;
  if (props.ptp) rules += `padding-top: ${props.ptp}%;`;
  if (props.prp) rules += `padding-right: ${props.prp}%;`;
  if (props.pbp) rules += `padding-bottom: ${props.pbp}%;`;
  if (props.plp) rules += `padding-left: ${props.plp}%;`;
  return rules;
};

export const basicSpacingMixin = (props) => {
  let rules = '';
  if (props.m) rules += `margin: ${props.m * props.theme.spaces.base}px;`;
  if (props.mt) rules += `margin-top: ${props.mt * props.theme.spaces.base}px;`;
  if (props.mr)
    rules += `margin-right: ${props.mr * props.theme.spaces.base}px;`;
  if (props.mb)
    rules += `margin-bottom: ${props.mb * props.theme.spaces.base}px;`;
  if (props.ml)
    rules += `margin-left: ${props.ml * props.theme.spaces.base}px;`;
  if (props.p) rules += `padding: ${props.p * props.theme.spaces.base}px;`;
  if (props.pt)
    rules += `padding-top: ${props.pt * props.theme.spaces.base}px;`;
  if (props.pr)
    rules += `padding-right: ${props.pr * props.theme.spaces.base}px;`;
  if (props.pb)
    rules += `padding-bottom: ${props.pb * props.theme.spaces.base}px;`;
  if (props.pl)
    rules += `padding-left: ${props.pl * props.theme.spaces.base}px;`;
  return rules;
};

export const colorMixin = (props) => {
  let rules = '';
  if (props.color) {
    if (props.color.includes('gray.')) {
      rules += `color: ${props.theme.colors.gray[props.color.substring(5)]};`;
    } else {
      rules += `color: ${props.theme.colors[props.color] || props.color};`;
    }
  } else {
    rules += `color: ${props.theme.colors.black};`;
  }
  if (props.bgColor) {
    if (props.bgColor.includes('gray.')) {
      rules += `background-color: ${
        props.theme.colors.gray[props.bgColor.substring(5)]
      };`;
    } else {
      rules += `background-color: ${
        props.theme.colors[props.bgColor] || props.bgColor
      };`;
    }
  }
  return rules;
};

const TYPOGRAPHY_LEVELS_LEGACY = [
  {
    fw: Platform.OS === 'android' ? 600 : 400,
    fs: 64,
    lh: 64,
    ls: Platform.OS === 'android' ? -2.5 : -4.5,
  },
  {
    fw: Platform.OS === 'android' ? 700 : 600,
    fs: 38,
    lh: 42,
    ls: Platform.OS === 'android' ? -1 : -1.3,
  },
  {
    fw: Platform.OS === 'android' ? 700 : 600,
    fs: 24,
    lh: 26.4,
    ls: Platform.OS === 'android' ? -0.5 : -1.5,
  },
  { fw: Platform.OS === 'android' ? 700 : 600, fs: 16, lh: 22 },
  { fw: Platform.OS === 'android' ? 700 : 600, fs: 14, lh: 20 },
  { fw: Platform.OS === 'android' ? 700 : 600, fs: 12, lh: 14.4 },
  { fw: 400, fs: 14, lh: 19.7 },
  { fw: 500, fs: 12, lh: 16 },
];

const TYPOGRAPHY_LEVELS = {
  h1: { fw: 600, fs: 56, lh: 56, ls: -4 },
  h2: { fw: 500, fs: 38, lh: 42 },
  h3: { fw: 600, fs: 24, lh: 26.4 },
  h4: { fw: 600, fs: 18, lh: 21.6, ls: -2 },
  h5: { fw: 600, fs: 16, lh: 19.2, ls: -2 },
  h6: { fw: 600, fs: 14, lh: 16.8, ls: -2 },
  h7: { fw: 600, fs: 12, lh: 14.4, ls: -1 },
  t1: { fw: 400, fs: 14, lh: 16.8 },
  t2: { fw: 400, fs: 12, lh: 14.4 },
  t3: { fw: 500, fs: 10, lh: 10 },
  c1: { fw: 400, fs: 16, lh: 19.2 },
};

const DEFAULT_TYPOGRAPHY_LEGACY = TYPOGRAPHY_LEVELS_LEGACY[5];
const DEFAULT_TYPOGRAPHY = TYPOGRAPHY_LEVELS_LEGACY[5];

export const typographyMixin = (props) => {
  let rules = '';
  const level = props.level;
  const isLegacy = typeof level !== 'string';
  const LEVEL = isLegacy
    ? TYPOGRAPHY_LEVELS_LEGACY[level - 1] || DEFAULT_TYPOGRAPHY_LEGACY
    : TYPOGRAPHY_LEVELS[level] || DEFAULT_TYPOGRAPHY;
  rules += `font-weight: ${LEVEL.fw}; font-size: ${LEVEL.fs}px; line-height: ${LEVEL.lh}px;`;
  if (LEVEL.ls) rules += `letter-spacing: ${LEVEL.ls}px;`;
  // switch (level) {
  //   case 1 : rules += `
  //     font-weight: 800;
  //     font-size: 24px;
  //     line-height: 29px;
  //   `; break;
  //   case 2 : rules += `
  //     font-weight: 800;
  //     font-size: 20px;
  //     line-height: 24px;
  //   `; break;
  //   case 3 : rules += `
  //     font-weight: 800;
  //     font-size: 18px;
  //     line-height: 21px;
  //   `; break;
  //   case 4 : rules += `
  //     font-weight: 500;
  //     font-size: 18px;
  //     line-height: 21px;
  //   `; break;
  //   case 5 : rules += `
  //     font-weight: 700;
  //     font-size: 16px;
  //     line-height: 19px;
  //   `; break;
  //   case 6 : rules += `
  //     font-weight: 600;
  //     font-size: 16px;
  //     line-height: 19px;
  //   `; break;
  //   case 7 : rules += `
  //     font-weight: 500;
  //     font-size: 14px;
  //     line-height: 17px;
  //   `; break;
  //   case 8 : rules += `
  //     font-weight: 510;
  //     font-size: 10px;
  //     line-height: 12px;
  //   `; break;
  //   default : rules += `
  //     font-weight: 500;
  //     font-size: 14px;
  //     line-height: 17px;
  //   `; break;
  // }
  if (props.fontWeight) rules += `font-weight: ${props.fontWeight};`;
  if (props.fontSize) rules += `font-size: ${props.fontSize}px;`;
  if (props.lineHeight) rules += `line-height: ${props.lineHeight}px;`;
  if (props.fontStyle) rules += `font-style: ${props.fontStyle};`;
  if (props.textAlign) rules += `text-align: ${props.textAlign};`;
  if (props.letterSpacing) rules += `letter-spacing: ${props.letterSpacing};`;
  return rules;
};

export const flexMixin = (props) => {
  let rules = '';
  if (props.flex) rules += `flex: ${props.flex};`;
  if (props.flexDirection) rules += `flex-direction: ${props.flexDirection};`;
  if (props.flexWrap) rules += `flex-wrap: ${props.flexWrap};`;
  if (props.flexGrow) rules += `flex-grow: ${props.flexGrow};`;
  if (props.flexShrink) rules += `flex-shrink: ${props.flexShrink};`;
  if (props.jc) rules += `justify-content: ${props.jc};`;
  if (props.ai) rules += `align-items: ${props.ai};`;
  if (props.position) rules += `position: ${props.position};`;
  if (props.left) rules += `left: ${props.left * props.theme.spaces.base}px;`;
  if (props.right)
    rules += `right: ${props.right * props.theme.spaces.base}px;`;
  if (props.top) rules += `top: ${props.top * props.theme.spaces.base}px;`;
  if (props.bottom)
    rules += `bottom: ${props.bottom * props.theme.spaces.base}px;`;
  if (props.leftp) rules += `left: ${props.leftp}%;`;
  if (props.rightp) rules += `right: ${props.rightp}%;`;
  if (props.topp) rules += `top: ${props.topp}%;`;
  if (props.bottomp) rules += `bottom: ${props.bottomp}%;`;
  // if (props.width) rules += `width: ${props.width}px;`;
  if (props.widthp) rules += `width: ${props.width}%;`;
  if (props.fullWidth) rules += `width: 100%;`;
  return rules;
};
