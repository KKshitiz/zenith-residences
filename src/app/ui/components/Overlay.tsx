import AvailabilityLegend from "./AvailabilityLegend";
import Filters from "./Filters";
import HorizontalFlatSelector from "./HorizontalFlatSelector";
import NavBar from "./NavBar";
import ProjectStatistics from "./ProjectStatistics";

const Overlay = () => {
  return (
    <div className="hidden flex flex-col absolute top-0 left-0 justify-between w-full h-full p-3 z-50">
      <NavBar />
      <div className="flex flex-col justify-between w-full h-full">
        <Filters />

        <div className="lg:hidden flex flex-col">
          <div className="flex flex-col gap-2 w-full">
            <HorizontalFlatSelector />
            <button className="bg-primary text-black uppercase py-3">
              View apartment 3608
            </button>
          </div>
        </div>

        {/* Bottom stats in large screen */}
        <div className="hidden lg:flex justify-between items-end">
          <ProjectStatistics />
          <AvailabilityLegend />
        </div>
      </div>
      {/* <BrochureForm /> */}
    </div>
  );
};

export default Overlay;
