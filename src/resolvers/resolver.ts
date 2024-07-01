import Project from '../models/project';
import Task from '../models/task';

export const resolvers = {
    Query: {
      getProjects: async () => {
        return await Project.findAll({ include: [Task] });
      },
      getProject: async (_: any, { id }: { id: number }) => {
        return await Project.findByPk(id, { include: [Task] });
      },
      getTasks: async () => {
        return await Task.findAll({ include: [Project] });
      },
      getTask: async (_: any, { id }: { id: number }) => {
        return await Task.findByPk(id, { include: [Project] });
      },
      getTasksByProjectId: async (_: any, { projectId }: { projectId: number }) => {
        return await Task.findAll({ where: { projectId } });
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
    Task: {
      project: async (task: any) => {
        return await Project.findByPk(task.projectId);
      }
    }
  };