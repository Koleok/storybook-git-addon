import { API_URL } from "./constants";

export interface Branch {
  name: string;
  checkedOut: boolean;
}

export const checkout = (branchName: string) =>
  fetch(`${API_URL}/checkout/${branchName}`)
    .then((res) => res.json())
    .then((res) => res as { gitOutput: string });

export const getBranches = () =>
  fetch(`${API_URL}/branches`)
    .then((res) => res.json())
    .then((res) => res as { branches: Branch[] });
