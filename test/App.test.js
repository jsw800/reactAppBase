import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../src/App";

describe("App component", () => {
  it("should render", () => {
    const testMessage = "hello";
    const { getByText } = render(<App message={testMessage} />);
    expect(getByText(testMessage)).toBeInTheDocument();
  });
});
