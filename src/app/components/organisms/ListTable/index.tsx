import Table from "../../atoms/Table";
import TableBody from "../../atoms/TableBody";
import TableHeader from "../../atoms/TableHeader";
import TableRow from "../../atoms/TableRow";
import TableData from "../../atoms/TableData";
import { List, ColorStatuses, Statuses } from "@/app/types/list";
import Badge from "../../atoms/Badge";

interface ListTableProps {
    style?: React.CSSProperties;
    travelData: List[];
}
const ListTable = ({style, travelData}: ListTableProps) => {
    return (
        <Table style={style} className="w-full">
            <TableHeader className="border-b">
                <TableRow>
                    <TableData className="px-3 py-2 border-b">Destiny</TableData>
                    <TableData className="px-3 py-2 border-b">Start Date</TableData>
                    <TableData className="px-3 py-2 border-b">End Date</TableData>
                    <TableData className="px-3 py-2 border-b">Status</TableData>
                    <TableData className="px-3 py-2 border-b">Created</TableData>
                    <TableData className="px-3 py-2 border-b">Last update</TableData>
                </TableRow>
            </TableHeader>
            <TableBody>
                {travelData.map((item) => (
                    <TableRow key={item.id}>
                        <TableData className="px-3 py-2 border-b">{item.destiny}</TableData>
                        <TableData className="px-3 py-2 border-b">{item.startDate}</TableData>
                        <TableData className="px-3 py-2 border-b">{item.endDate}</TableData>
                        <TableData className="px-3 py-2 border-b"><Badge variant={ColorStatuses[item.status]}>{Statuses[item.status]}</Badge></TableData>
                        <TableData className="px-3 py-2 border-b">{item.createdAt}</TableData>
                        <TableData className="px-3 py-2 border-b">{item.updatedAt}</TableData>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default ListTable