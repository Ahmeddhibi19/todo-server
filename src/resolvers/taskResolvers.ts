import Project from '../models/project';
import Task from '../models/task';

const taskResolver = {
    Query: {
      getTasks: async () => {
        return await Task.findAll({ include: [Project] });
      },
      getTask: async (_: any, { id }: { id: number }) => {
        return await Task.findByPk(id, { include: [Project] });
      }
    },
    Mutation: {
      createTask: async (_: any, { input }: { input: any }) => {
        return await Task.create(input);
      },
      updateTask: async (_: any, { id, input }: { id: number, input: any }) => {
        await Task.update(input, { where: { id } });
        return await Task.findByPk(id);
      },
      deleteTask: async (_: any, { id }: { id: number }) => {
        await Task.destroy({ where: { id } });
        return "Task deleted";
      }
    },
    Project: {
      tasks: async (project: any) => {
        return await Task.findAll({ where: { projectId: project.id } });
      }
    },
    
  };
export default taskResolver;