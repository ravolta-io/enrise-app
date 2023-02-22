// Test the RotatingImage component

import { render, screen } from "@testing-library/react";

import RotatingImage from "./RotatingImage";

describe("RotatingImage", () => {
  test("alt is defined and contains correct value", () => {
    render(
      <RotatingImage src="/assets/img/ye1.png" alt="Kanye West Image 1" />
    );
    const testImage = document.querySelector("img") as HTMLImageElement;
    expect(testImage.alt).toContain("Kanye West Image 1");
  });
});
