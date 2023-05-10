import React from "react";

const Map = () => {
  return (
    <div className="w-full h-80 md:h-96">
      <iframe
        className="w-full h-full"
        title="map"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=600&amp;height=600&amp;hl=en&amp;q=prafal agrol lp&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );
};

export default Map;
