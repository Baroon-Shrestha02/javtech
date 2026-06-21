import client from "../client";

const BASE = "/team";

export const teamService = {
  // GET /api/team  | optional { section: "leaders" | "team" }
  list: (params = {}) => client.get(BASE, { params }),

  // GET /api/team?grouped=true → { leaders: [...], team: [...] }
  listGrouped: () => client.get(BASE, { params: { grouped: true } }),

  // GET /api/team/:id
  get: (id) => client.get(`${BASE}/${id}`),
};

export default teamService;
