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
    if (props.color.includes('blue.')) {
      rules += `color: ${props.theme.colors.blue[props.color.substring(5)]};`;
    } else {
      rules += `color: ${props.theme.colors[props.color] || props.color};`;
    }
  } else {
    rules += `color: ${props.theme.colors.primary};`;
  }
  if (props.bgColor) {
    if (props.bgColor.includes('blue.')) {
      rules += `background-color: ${
        props.theme.colors.blue[props.bgColor.substring(5)]
      };`;
    } else {
      rules += `background-color: ${
        props.theme.colors[props.bgColor] || props.bgColor
      };`;
    }
  }
  return rules;
};

const TYPOGRAPHY_LEVELS = {
  h1: { fw: 629, fs: 80, lh: 88, ls: -2.4 },
  h2: { fw: 629, fs: 56, lh: 61.6, ls: -1.68 },
  h3: { fw: 629, fs: 42, lh: 46.2, ls: -1.26 },
  t1: { fw: 700, fs: 20, lh: 24 },
  t2: { fw: 500, fs: 20, lh: 24 },
  t3: { fw: 400, fs: 20, lh: 24 },
};
const DEFAULT_TYPOGRAPHY = TYPOGRAPHY_LEVELS['t2'];

export const typographyMixin = (props) => {
  let rules = '';
  const level = props.level;
  const LEVEL = TYPOGRAPHY_LEVELS[level] || DEFAULT_TYPOGRAPHY;
  rules += `font-weight: ${LEVEL.fw}; font-size: ${LEVEL.fs}px; line-height: ${LEVEL.lh}px;`;
  if (LEVEL.ls) rules += `letter-spacing: ${LEVEL.ls}px;`;
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
  if (props.gap) rules += `gap: ${props.gap}px;`;
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
