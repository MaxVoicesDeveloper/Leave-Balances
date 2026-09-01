import MenuBar from "../MenuBar/MenuBar"
import Selectors from "../Selectors/Selectors.tsx"
import Table from "../Table/Table.tsx"
import {useState} from "react";

const LeaveBalances = () => {
    const [search, setSearch] = useState("");
    return(
        <div className="main-content flex flex-col gap-4">
        <h1 className="text-[30px] text-[var(--text-primary)]">
            Leave Balances
        </h1>
        <MenuBar/>
        <Selectors/>
        <Table/>
        </div>
    )
}

export default LeaveBalances