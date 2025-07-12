import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BaseList from "./";

describe("BaseList", () => {
    it("should render", () => {
        render(<BaseList>Children</BaseList>);
        const baseList = screen.getByText("Children");
        expect(baseList).toBeInTheDocument();
    });

    it("Should render unordered list", () => {
        render(<BaseList variant="ul">Children</BaseList>);
        const baseList = screen.getByRole("list");
        expect(baseList).toBeInTheDocument();
    })

    it("Should render ordered list", () => {
        render(<BaseList variant="ol">Children</BaseList>);
        const baseList = screen.getByRole("list");
        expect(baseList).toBeInTheDocument();
    })
});