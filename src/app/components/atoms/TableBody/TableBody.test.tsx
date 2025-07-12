import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TableBody from "./";

describe("TableBody", () => {
    it("should render", () => {
        render(<TableBody>Children</TableBody>);
        const tableBody = screen.getByText("Children");
        expect(tableBody).toBeInTheDocument();
    });
});