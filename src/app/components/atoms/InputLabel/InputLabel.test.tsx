import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import InputLabel from "./";

describe("InputLabel", () => {
    it("should render", () => {
        render(<InputLabel>Children</InputLabel>);
        const inputLabel = screen.getByText("Children");
        expect(inputLabel).toBeInTheDocument();
    });
});