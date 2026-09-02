import { useState } from "react";

import employees from "../../data/employees.json";

import MenuBar from "../MenuBar/MenuBar";
import Selectors from "../Selectors/Selectors.tsx";
import Table from "../Table/Table.tsx";
import TableToolbar from "../TableToolbar/TableToolbar.tsx";

const LeaveBalances = () => {
    const [search, setSearch] = useState("");
    const [collapseVersion, setCollapseVersion] = useState(0);

    const filteredEmployees = employees.filter((employee) =>
        employee.name.toLowerCase().includes(search.toLowerCase())
    );

    const collapseAll = () => {
        setCollapseVersion((prev) => prev + 1);
    };

    return (
        <div className="main-content flex flex-col gap-4">
            <h1 className="text-[30px] text-[var(--text-primary)]">
                Leave Balances
            </h1>

            <MenuBar />

            <Selectors />

            <TableToolbar
                search={search}
                onSearch={setSearch}
                onCollapseAll={collapseAll}
            />

            {filteredEmployees.length > 0 ? (
                <Table
                    employees={filteredEmployees}
                    collapseVersion={collapseVersion}
                />
            ) : (
                <div className="flex min-h-[300px] items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-background)]">
                    <span className="text-[14px] text-[var(--text-secondary)]">
                        No employees found
                    </span>
                </div>
            )}
        </div>
    );
};

export default LeaveBalances;