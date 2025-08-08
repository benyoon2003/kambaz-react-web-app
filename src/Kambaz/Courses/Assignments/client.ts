import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const MODULES_API = `${REMOTE_SERVER}/api/assignments`;

export const createAssignment = async (assignment: any) => {
  const response = await axios.post(MODULES_API, assignment);
  return response.data;
};

export const findAllAssignments = async () => {
  const response = await axios.get(MODULES_API);
  return response.data;
};

export const findAssignmentById = async (id: string) => {
  const response = await axios.get(`${MODULES_API}/${id}`);
  return response.data;
};

export const updateAssignment = async (id: string, updates: any) => {
  const response = await axios.put(`${MODULES_API}/${id}`, updates);
  return response.data;
};

export const deleteAssignment = async (id: string) => {
  const response = await axios.delete(`${MODULES_API}/${id}`);
  return response.data;
};
