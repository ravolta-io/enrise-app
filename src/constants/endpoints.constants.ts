interface Endpoints {
  BASE: string | undefined;
}

export const ENDPOINTS: Endpoints = {
  BASE: process.env.NEXT_PUBLIC_API_ENDPOINT,
};
