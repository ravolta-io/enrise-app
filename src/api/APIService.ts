import { ENDPOINTS } from "@/constants/endpoints.constants";

// This is a service that will be used to make API calls

// API Response type

export type Quote = string;

export interface APIResponse {
  quote: Quote;
}

interface APIService {
  getOne: () => Promise<APIResponse>;
}

export const APIService: APIService = {
  getOne: async () => {
    const response = await fetch(`${ENDPOINTS.BASE}`);
    return response.json();
  },
};
