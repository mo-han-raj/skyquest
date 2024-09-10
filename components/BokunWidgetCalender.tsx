import { useEffect, useState } from 'react';

const BokunWidgetCalendar = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    // Function to handle the script loading
    const handleScriptLoad = () => {
      setIsScriptLoaded(true);
    };

    // Dynamically create the script element
    const script = document.createElement('script');
    script.src =
      'https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=19fed8a8-1042-4ef5-b4b5-01bc9f26e1c2';
    script.async = true;
    script.onload = handleScriptLoad;

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full bg-dark-card">
      <noscript>Please enable JavaScript in your browser to book</noscript>
      {isScriptLoaded && (
        <div
          className="bokunWidget"
          data-src="https://widgets.bokun.io/online-sales/19fed8a8-1042-4ef5-b4b5-01bc9f26e1c2/experience-calendar/899470"
        >
          <style jsx>{`
            .bokunWidget {
              position: relative;
              width: 100%;
              height: 100%;
              background-color: var(--card); /* Use dark mode background */
            }
            .bokunWidget iframe {
              border: none;
              background-color: var(--card); /* Ensure iframe has dark background */
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default BokunWidgetCalendar;
