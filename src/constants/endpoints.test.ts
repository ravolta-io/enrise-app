// test the endpoints

import { ENDPOINTS } from "./endpoints.constants";

describe("Endpoints", () => {
  it("should have an ENDPOINTS object", () => {
    expect(ENDPOINTS).toBeDefined();
  });

  it("should have a BASE property", () => {
    expect(ENDPOINTS.BASE).toBeDefined();
  });
});
