import React, { useEffect, useState } from 'react';

import { getCurrentBreakpoint } from 'core/ui/helpers';

const ResponsiveContext = React.createContext();

export const ResponsiveProvider = ResponsiveContext.Provider;
export const ResponsiveConsumer = ResponsiveContext.Consumer;

export const withViewport = Component => (
  class ResponsiveWrapper extends React.Component {
    render() {
      return (
        <ResponsiveConsumer>
          {values => (
            <Component
              {...this.props}
              {...values}
            />
          )}
        </ResponsiveConsumer>
      );
    }
  }
);

const useViewport = () => {
  const [width, setWidth] = useState({ currentBreakpoint: getCurrentBreakpoint(),  });

  useEffect(() => {
    const handleWindowResize = () => setWidth({currentBreakpoint: getCurrentBreakpoint()});
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return {
    breakpoint: width.currentBreakpoint,
    isMobile: ['sm', 'xs'].includes(width.currentBreakpoint),
    isTablet: ['sm', 'xs', 'md'].includes(width.currentBreakpoint),
  }

};

export default useViewport;