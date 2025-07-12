import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "./";

describe("Button", () => {
    it("should render", () => {
        render(<Button variant="primary" size="medium">Button</Button>);
        const button = screen.getByText("Button");
        expect(button).toBeInTheDocument();
    });
});