import { render, screen } from "@testing-library/react";
import TableRow from "./";
import "@testing-library/jest-dom";

describe("TableRow", () => {
    it("should render", () => {
        render(<TableRow>
            <tr>
                <td>Children</td>
            </tr>
        </TableRow>);
        const tableRow = screen.getByText("Children");
        expect(tableRow).toBeInTheDocument();
    });
});