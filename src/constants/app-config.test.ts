import { APP_CONFIG } from "./app-config.constants";

describe("App Config", () => {
  it("should have an APP_CONFIG object", () => {
    expect(APP_CONFIG).toBeDefined();
  });

  it("should have an app name", () => {
    expect(APP_CONFIG.appName).toBeDefined();
  });

  it("should have an app version", () => {
    expect(APP_CONFIG.appVersion).toBeDefined();
  });

  it("should have an app description", () => {
    expect(APP_CONFIG.appDescription).toBeDefined();
  });
});
