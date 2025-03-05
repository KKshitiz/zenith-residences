"use client";
import {
  arishaSceneImage,
  arishaTerracesMarker,
  cubixResidencesMarker,
  cubixSceneImage,
  midoraResidencesMarker,
  sceneWebImage,
} from "@/app/constants/assets";
import MarkerWithInfoWindow from "@/app/ui/layout/MarkerWithInfoWindow";
import { APIProvider, ControlPosition, Map } from "@vis.gl/react-google-maps";
import Image from "next/image";
import { useRouter } from "next/navigation";
const MAP_BOUNDS = {
  north: 26.296,
  south: 24.0541,
  west: 53.0574,
  east: 57.4711,
};

const MapPage = () => {
  const router = useRouter();

  return (
    <APIProvider
      region="AE"
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
    >
      <Map
        mapId={"983a5ea09dc3e159"}
        reuseMaps
        // renderingType={RenderingType.VECTOR}
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={{ lat: 25.1461148, lng: 55.221779 }}
        defaultZoom={12}
        gestureHandling={"greedy"}
        disableDefaultUI={false}
        restriction={{
          latLngBounds: MAP_BOUNDS,
          strictBounds: true,
        }}
        onZoomChanged={(e) => {
          console.log(e);
        }}
        clickableIcons={true}
        mapTypeControl={false}
        streetViewControl={false}
        fullscreenControl
        fullscreenControlOptions={{
          position: ControlPosition.INLINE_END_BLOCK_END,
        }}
      >
        <MarkerWithInfoWindow
          headerContent="Midora residences"
          position={{ lat: 25.0519982, lng: 55.2092156 }}
          markerComponent={
            <Image src={midoraResidencesMarker} alt="Midora residences" />
          }
        >
          <div className="flex flex-col">
            <Image
              src={sceneWebImage}
              alt={"Midora residences"}
              className="w-full rounded-lg mb-4"
            />
            <p>
              Midora Residences, located in Jumeirah Village Circle (JVC),
              integrates advanced smart home features with lush greenery,
              offering a unique living experience.
            </p>
            <div className="flex flex-col gap-1 my-4">
              <p className="text-primary font-medium">
                Completion data:{" "}
                <span className="text-white font-normal">Q3 2027</span>
              </p>
              <p className="text-primary font-medium">
                Project stage:{" "}
                <span className="text-white font-normal">Q3 Sale</span>
              </p>
              <p className="text-primary font-medium">
                Estimated ROI:{" "}
                <span className="text-white font-normal">Q3 7-11%</span>
              </p>
            </div>
            <button
              className="bg-primary text-black uppercase py-2 rounded-md font-semibold"
              onClick={() => {
                router.push(`/`);
              }}
            >
              Explore project
            </button>
          </div>
        </MarkerWithInfoWindow>
        <MarkerWithInfoWindow
          headerContent="Cubix residences"
          position={{ lat: 25.0573741, lng: 55.2117431 }}
          markerComponent={
            <Image src={cubixResidencesMarker} alt="Cubix residences" />
          }
        >
          <div className="flex flex-col">
            <Image
              src={cubixSceneImage}
              alt={"Cubix residences"}
              className="w-full rounded-lg mb-4"
            />
            <p>
              Welcome to CUBIX Residences, an innovative development that mixes
              comfort with convenience.
            </p>
            <div className="flex flex-col gap-1 my-4">
              <p className="text-primary font-medium">
                Completion data:{" "}
                <span className="text-white font-normal">Q2 2025</span>
              </p>
              <p className="text-primary font-medium">
                Project stage:{" "}
                <span className="text-white font-normal">Construction</span>
              </p>
              <p className="text-primary font-medium">
                Estimated ROI:{" "}
                <span className="text-white font-normal">10-12%</span>
              </p>
            </div>
            <button className="bg-primary text-black uppercase py-2 rounded-md font-semibold">
              Explore project
            </button>
          </div>
        </MarkerWithInfoWindow>
        <MarkerWithInfoWindow
          headerContent="Arisha terraces"
          position={{ lat: 25.0345462, lng: 55.2326329 }}
          markerComponent={
            <Image src={arishaTerracesMarker} alt="Arisha terraces" />
          }
        >
          <div className="flex flex-col">
            <Image
              src={arishaSceneImage}
              alt={"Arisha terraces"}
              className="w-full rounded-lg mb-4"
            />
            <p>
              Midora Residences, located in Jumeirah Village Circle (JVC),
              integrates advanced smart home features with lush greenery,
              offering a unique living experience.
            </p>
            <div className="flex flex-col gap-1 my-4">
              <p className="text-primary font-medium">
                Completion data:{" "}
                <span className="text-white font-normal">Q3 2027</span>
              </p>
              <p className="text-primary font-medium">
                Project stage:{" "}
                <span className="text-white font-normal">Q3 Sale</span>
              </p>
              <p className="text-primary font-medium">
                Estimated ROI:{" "}
                <span className="text-white font-normal">Q3 7-11%</span>
              </p>
            </div>
            <button className="bg-primary text-black uppercase py-2 rounded-md font-semibold">
              Explore project
            </button>
          </div>
        </MarkerWithInfoWindow>
      </Map>
    </APIProvider>
  );
};

export default MapPage;
