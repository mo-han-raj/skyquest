import { useEffect, useState } from 'react';

const BokunWidget = () => {
  const [widgetKey, setWidgetKey] = useState(0); // Key to force re-render

  useEffect(() => {
    // Re-render the widget by changing its key
    setWidgetKey((prevKey) => prevKey + 1);

    // Dynamically load the Bokun widget script
    const script = document.createElement('script');
    script.src = "https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=19fed8a8-1042-4ef5-b4b5-01bc9f26e1c2";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script when component unmounts
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div key={widgetKey}>
      <noscript>Please enable JavaScript in your browser to book</noscript>
      <div
        className="bokunWidget mt-10"
        data-src="https://widgets.bokun.io/online-sales/19fed8a8-1042-4ef5-b4b5-01bc9f26e1c2/experience/899470"
      ></div>
    </div>
  );
};

export default BokunWidget;
