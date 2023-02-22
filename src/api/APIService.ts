import { ENDPOINTS } from "@/constants/endpoints.constants";

interface APIService {
  getOne: () => Promise<any>;
}

export const APIService: APIService = {
  getOne: async () => {
    const response = await fetch(`${ENDPOINTS.BASE}`);
    return response.json();
  },
};
