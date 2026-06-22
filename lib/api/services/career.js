import client from "../client";

const BASE = "/careers";

export const careerService = {
  // GET /api/careers | optional { status: "Active" | "Closed", department, jobType }
  list: (params = {}) => client.get(BASE, { params }),

  // GET /api/careers/:id
  get: (id) => client.get(`${BASE}/${id}`),

  bumpApplicants: (id) => client.patch(`${BASE}/${id}/apply`),
};

export default careerService;
