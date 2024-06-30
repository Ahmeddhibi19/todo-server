import Project from '../models/project';
import Task from '../models/task';

 const projectResolver = {
    Query: {
      getProjects: async () => {
        return await Project.findAll({ include: [Task] });
      },
      getProject: async (_: any, { id }: { id: number }) => {
        return await Project.findByPk(id, { include: [Task] });
      },
    },
    Mutation: {
      createProject: async (_: any, { input }: { input: any }) => {
        return await Project.create(input);
      },
      updateProject: async (_: any, { id, input }: { id: number, input: any }) => {
        await Project.update(input, { where: { id } });
        return await Project.findByPk(id);
      },
      deleteProject: async (_: any, { id }: { id: number }) => {
        await Project.destroy({ where: { id } });
        return "Project deleted";
      },
    },
    Task: {
      project: async (task: any) => {
        return await Project.findByPk(task.projectId);
      }
    }
  };
export default projectResolver;