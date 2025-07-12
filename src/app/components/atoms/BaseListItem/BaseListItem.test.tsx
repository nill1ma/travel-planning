import { render, screen } from "@testing-library/react";
import BaseListItem from "./";
import "@testing-library/jest-dom";

describe("BaseListItem", () => {
    it("should render", () => {
        render(<BaseListItem>Children</BaseListItem>);
        const baseListItem = screen.getByText("Children");
        expect(baseListItem).toBeInTheDocument();
    });
});