import client from "../client";

const BASE = "/applications";

export const applicationService = {
  submit: (payload) => {
    const formData = new FormData();
    formData.append("careerId", payload.careerId);
    formData.append("name", payload.name);
    formData.append("email", payload.email);
    formData.append("phone", payload.phone);
    if (payload.coverLetter) {
      formData.append("coverLetter", payload.coverLetter);
    }
    if (payload.cv) {
      formData.append("cv", payload.cv);
    }

    return client.post(BASE, formData, {
      headers: { "Content-Type": undefined },
    });
  },
};

export default applicationService;
