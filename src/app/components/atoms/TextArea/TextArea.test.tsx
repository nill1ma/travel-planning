import { render, screen } from "@testing-library/react";
import TextArea from ".";
import "@testing-library/jest-dom";

describe("TextArea", () => {
    it("should render", () => {
        render(<TextArea content="Children" onChange={(e) => console.log(e.target.value)}/>);
        const textArea = screen.getByText("Children");
        expect(textArea).toBeInTheDocument();
    });
});