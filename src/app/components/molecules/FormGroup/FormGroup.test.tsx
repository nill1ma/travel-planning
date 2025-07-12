import { render, screen } from "@testing-library/react";
import FormGroup from "./";
import "@testing-library/jest-dom";

describe("FormGroup", () => {
    it("should render", () => {
        render(<FormGroup label="Label" inputProps={{ type: "text", placeholder: "Placeholder", value: "Value", onChange: () => { } }} />);
        const formGroup = screen.getByText("Label");
        expect(formGroup).toBeInTheDocument();
    });
}); 