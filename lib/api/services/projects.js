import client from "../client";

const BASE = "/projects";

export const projectsService = {
  // GET /api/projects
  list: () => client.get(BASE),

  // GET /api/projects/:id
  get: (id) => client.get(`${BASE}/${id}`),
};

export default projectsService;
