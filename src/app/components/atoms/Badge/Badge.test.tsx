import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Badge from "./";

describe("Badge", () => {
    it("should render", () => {
        render(<Badge variant="primary">Badge</Badge>);
        const badge = screen.getByText("Badge");
        expect(badge).toBeInTheDocument();
    });
});