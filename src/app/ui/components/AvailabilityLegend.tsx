const AvailabilityLegend = () => {
  return (
    <div className="flex bg-dark p-4 rounded-lg gap-5">
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
  );
};

export default AvailabilityLegend;
