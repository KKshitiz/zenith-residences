import { Card } from "antd";

const ProjectStatistics = () => {
  return (
    <div className="project-stats flex items-end gap-2">
      <Card>
        <h6 className="text-sm">Project stage</h6>
        <p className="text-lg text-gray-400">Sale</p>
      </Card>
      <Card>
        <h6 className="text-sm">Estimated Completion</h6>
        <p className="text-lg text-gray-400">Q3 2027</p>
      </Card>
      <Card>
        <h6 className="text-sm">Estimated ROI</h6>
        <p className="text-lg text-gray-400">7-11%</p>
      </Card>
    </div>
  );
};

export default ProjectStatistics;
