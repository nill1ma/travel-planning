import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Input from "./";

describe("Input", () => {
    it("should render", () => {
        render(<Input type="text" placeholder="Placeholder" value="Value" onChange={() => {}} />);
        const input = screen.getByRole("textbox");
        expect(input).toBeInTheDocument();
    });
});