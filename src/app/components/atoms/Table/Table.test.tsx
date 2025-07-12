import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import Table from "./";

describe("Table", () => {
    const ChildrenMock = <tbody><tr><td>Children</td></tr></tbody>
    it("should render", () => {
        render(<Table>{ChildrenMock}</Table>);
        const table = screen.getByText("Children");
        expect(table).toBeInTheDocument();
    });
});