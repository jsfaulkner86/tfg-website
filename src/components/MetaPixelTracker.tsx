import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    fbq?: (action: string, event: string) => void;
  }
}

const MetaPixelTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track PageView on route changes
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location.pathname]);

  return null;
};

export default MetaPixelTracker;
