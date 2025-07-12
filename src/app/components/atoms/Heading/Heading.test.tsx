import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Heading from "./";

describe("Heading", () => {
    it("should render", () => {
        render(<Heading size="h1">Heading</Heading>);
        const heading = screen.getByText("Heading");
        expect(heading).toBeInTheDocument();
    });
});