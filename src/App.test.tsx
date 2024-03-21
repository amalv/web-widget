import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
  render(<App />);
  expect(screen.getByText("Hello, world!"));
  expect(screen.getByText("Welcome to our minimal widget."));
});
