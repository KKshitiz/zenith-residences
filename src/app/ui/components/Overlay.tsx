import Filters from "./Filters";
import HorizontalFlatSelector from "./HorizontalFlatSelector";
import NavBar from "./NavBar";

const Overlay = () => {
  return (
    <div className="hidden flex flex-col absolute top-0 left-0 justify-between w-full h-full p-3 z-50 pointer-events-none">
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
          <div className="project-stats flex gap-2">
            <div className="flex flex-col bg-dark p-2 rounded-lg">
              <h6 className="font-bold">Project stage</h6>
              <p>Sale</p>
            </div>
            <div className="flex flex-col bg-dark p-2">
              <h6 className="font-bold">Project stage</h6>
              <p>Sale</p>
            </div>
            <div className="flex flex-col bg-dark p-2">
              <h6 className="font-bold">Project stage</h6>
              <p>Sale</p>
            </div>
          </div>

          <div className="project-legend flex bg-dark p-4 rounded-lg gap-5">
            <div className="flex gap-1 items-center">
              <div className="w-4 h-4 bg-primary"></div>
              <p className="uppercase">Sold</p>
            </div>
            <div className="flex gap-1 items-center">
              <div className="w-4 h-4 bg-primary"></div>
              <p className="uppercase">Available</p>
            </div>
            <div className="flex gap-1 items-center">
              <div className="w-4 h-4 bg-primary"></div>
              <p className="uppercase">Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
