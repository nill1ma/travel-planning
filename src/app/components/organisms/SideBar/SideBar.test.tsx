import { render, screen } from "@testing-library/react";
import SideBar from "./";
import "@testing-library/jest-dom";

describe("SideBar", () => {
    it("should render", () => {
        render(<SideBar>Children</SideBar>);
        const sideBar = screen.getByText("Children");
        expect(sideBar).toBeInTheDocument();
    });
});