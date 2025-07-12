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
        <Table style={style} className="border-collapse border border-gray-500 w-[50%]">
            <TableHeader>
                <TableRow>
                    <TableData>Destiny</TableData>
                    <TableData>Start Date</TableData>
                    <TableData>End Date</TableData>
                    <TableData>Status</TableData>
                    <TableData>Created At</TableData>
                    <TableData>Updated At</TableData>
                </TableRow>
            </TableHeader>
            <TableBody>
                {travelData.map((item) => (
                    <TableRow key={item.id}>
                        <TableData>{item.destiny}</TableData>
                        <TableData>{item.startDate}</TableData>
                        <TableData>{item.endDate}</TableData>
                        <TableData><Badge variant={ColorStatuses[item.status]}>{Statuses[item.status]}</Badge></TableData>
                        <TableData>{item.createdAt}</TableData>
                        <TableData>{item.updatedAt}</TableData>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default ListTable