const ProjectStatistics = () => {
  return (
    <div className="project-stats flex gap-2">
      <div className="card flex flex-col justify-center px-4 py-2">
        <h6 className="text-sm">Project stage</h6>
        <p className="text-lg text-gray-400">Sale</p>
      </div>
      <div className="card flex flex-col justify-center px-4 py-2">
        <h6 className="text-sm">Estimated Completion</h6>
        <p className="text-lg text-gray-400">Q3 2027</p>
      </div>
      <div className="card flex flex-col justify-center px-4 py-2">
        <h6 className="text-sm">Estimated ROI</h6>
        <p className="text-lg text-gray-400">7-11%</p>
      </div>
    </div>
  );
};

export default ProjectStatistics;
