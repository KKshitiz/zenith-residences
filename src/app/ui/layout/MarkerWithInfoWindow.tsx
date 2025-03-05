import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import React, { useCallback, useState } from "react";

const MarkerWithInfoWindow = ({
  position,
  children,
  markerComponent,
  headerContent,
}: {
  position: google.maps.LatLng | google.maps.LatLngLiteral;
  markerComponent: React.ReactNode;
  children: React.ReactNode;
  headerContent: string;
}) => {
  // `markerRef` and `marker` are needed to establish the connection between
  const [markerRef, marker] = useAdvancedMarkerRef();

  // the marker and infowindow (if you're using the Marker component, you
  // can use the `useMarkerRef` hook instead).

  const [infoWindowShown, setInfoWindowShown] = useState(false);

  // clicking the marker will toggle the infowindow
  const handleMarkerClick = useCallback(
    () => setInfoWindowShown((isShown) => !isShown),
    []
  );

  // if the maps api closes the infowindow, we have to synchronize our state
  const handleClose = useCallback(() => setInfoWindowShown(false), []);

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={position}
        onClick={handleMarkerClick}
      >
        {markerComponent}
      </AdvancedMarker>

      {infoWindowShown && (
        <InfoWindow
          anchor={marker}
          onClose={handleClose}
          headerContent={headerContent}
          className="bg-dark w-80 px-4 pb-4"
        >
          {children}
        </InfoWindow>
      )}
    </>
  );
};

export default MarkerWithInfoWindow;
