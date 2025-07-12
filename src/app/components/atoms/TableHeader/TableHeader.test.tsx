import { render, screen } from "@testing-library/react";
import TableHeader from "./";
import "@testing-library/jest-dom";

describe("TableHeader", () => {
    it("should render", () => {
        render(<TableHeader>
            <tr>
                <td>Children</td>
            </tr>
        </TableHeader>);
        const tableHeader = screen.getByText("Children");
        expect(tableHeader).toBeInTheDocument();
    });
});