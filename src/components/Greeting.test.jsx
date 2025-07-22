import React from "react"; // this is important
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("Greeting", () => {
  it("renders default greeting", () => {
    render(<Greeting />);
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });

  it("renders greeting with a name", () => {
    render(<Greeting name="Shafin" />);
    expect(screen.getByText("Hello, Shafin!")).toBeInTheDocument();
  });
});
