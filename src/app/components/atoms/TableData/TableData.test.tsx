import { render, screen } from "@testing-library/react";
import TableData from "./";
import "@testing-library/jest-dom";

describe("TableData", () => {
    it("should render", () => {
        render(<TableData>Children</TableData>);
        const tableData = screen.getByText("Children");
        expect(tableData).toBeInTheDocument();
    });
});