import { render, screen } from "@testing-library/react";
import Avatar from "./";
import "@testing-library/jest-dom";
describe("Avatar", () => {
    it("should render", () => {
        render(<Avatar src="" alt="" />);
        const avatar = screen.getByRole("img");
        expect(avatar).toBeInTheDocument();
    });
});