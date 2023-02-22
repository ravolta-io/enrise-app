import { APIService } from "./APIService";
import { ENDPOINTS } from "@/constants/endpoints.constants";

describe("APIService", () => {
  it("should have a get method", () => {
    expect(APIService.getOne).toBeDefined();
  });

  it("should call the base API endpoint", async () => {
    const mockFetch = jest.fn().mockResolvedValue({ json: () => {} });
    global.fetch = mockFetch;

    await APIService.getOne();

    expect(mockFetch).toHaveBeenCalledWith(`${ENDPOINTS.BASE}`);
  });
});
