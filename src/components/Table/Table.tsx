import { Fragment, useEffect, useState } from "react";
import human from "../../assets/human.png";

type Employee = {
    id: number;
    name: string;
    designation: string;
    al: number;
    ph: number;
    pdo: number | null;
    sl: number;
    ul: number;
    sl_hp: number;
    sl_up: number;
    pl: number;
    cl: number;
};

type TableProps = {
    employees: Employee[];
    collapseVersion: number;
};

const Table = ({ employees, collapseVersion }: TableProps) => {
    const [isLabelOpen, setIsLabelOpen] = useState(true);
    const [openGroups, setOpenGroups] = useState<number[]>([0, 1]);
    const [openSubgroups, setOpenSubgroups] = useState<string[]>([
        "0-0",
        "0-1",
        "1-0",
    ]);

    const formatNumber = (value: number | null) => {
        return value === null ? "0.00" : value.toFixed(2);
    };

    // Collapse all
    useEffect(() => {
        setIsLabelOpen(false);
        setOpenGroups([]);
        setOpenSubgroups([]);
    }, [collapseVersion]);


    useEffect(() => {
        setIsLabelOpen(true);
        setOpenGroups([0, 1]);
        setOpenSubgroups(["0-0", "0-1", "1-0"]);
    }, [employees]);

    const groups = [
        {
            label: "Label 2",
            subgroups: [
                {
                    label: "Label 3",
                    employees: employees.slice(0, 4),
                },
                {
                    label: "Label 3",
                    employees: employees.slice(4, 7),
                },
            ],
        },
        {
            label: "Label 2",
            subgroups: [
                {
                    label: "Label 3",
                    employees: employees.slice(7, 11),
                },
            ],
        },
    ];

    const toggleGroup = (index: number) => {
        setOpenGroups((prev) =>
            prev.includes(index)
                ? prev.filter((item) => item !== index)
                : [...prev, index]
        );
    };

    const toggleSubgroup = (key: string) => {
        setOpenSubgroups((prev) =>
            prev.includes(key)
                ? prev.filter((item) => item !== key)
                : [...prev, key]
        );
    };

    return (
        <table className="w-full border-separate border-spacing-y-1">
            <tbody>
                <tr>
                    <td colSpan={13}>
                        <button
                            type="button"
                            onClick={() => setIsLabelOpen(!isLabelOpen)}
                            className="flex w-full items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-primary)] px-3 py-2 text-left text-[14px] font-medium"
                        >
                            <span
                                className={`transition-transform duration-200 ${
                                    isLabelOpen ? "rotate-0" : "-rotate-90"
                                }`}
                            >
                                ⌃
                            </span>
                            Label
                        </button>
                    </td>
                </tr>

                {isLabelOpen &&
                    groups.map((group, groupIndex) => {
                        const isGroupOpen = openGroups.includes(groupIndex);

                        return (
                            <Fragment key={`group-${groupIndex}`}>
                                <tr>
                                    <td colSpan={13}>
                                        <button
                                            type="button"
                                            onClick={() => toggleGroup(groupIndex)}
                                            className="flex w-full items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-primary-medium)] px-8 py-2 text-left text-[14px] font-medium"
                                        >
                                            <span
                                                className={`transition-transform duration-200 ${
                                                    isGroupOpen
                                                        ? "rotate-0"
                                                        : "-rotate-90"
                                                }`}
                                            >
                                                ⌃
                                            </span>
                                            {group.label}
                                        </button>
                                    </td>
                                </tr>

                                {isGroupOpen &&
                                    group.subgroups.map(
                                        (subgroup, subgroupIndex) => {
                                            const subgroupKey = `${groupIndex}-${subgroupIndex}`;
                                            const isSubgroupOpen =
                                                openSubgroups.includes(
                                                    subgroupKey
                                                );

                                            return (
                                                <Fragment key={subgroupKey}>
                                                    <tr>
                                                        <td colSpan={13}>
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    toggleSubgroup(
                                                                        subgroupKey
                                                                    )
                                                                }
                                                                className="flex w-full items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-primary-light)] px-14 py-2 text-left text-[14px] font-medium"
                                                            >
                                                                <span
                                                                    className={`transition-transform duration-200 ${
                                                                        isSubgroupOpen
                                                                            ? "rotate-0"
                                                                            : "-rotate-90"
                                                                    }`}
                                                                >
                                                                    ⌃
                                                                </span>
                                                                {
                                                                    subgroup.label
                                                                }
                                                            </button>
                                                        </td>
                                                    </tr>

                                                    {isSubgroupOpen && (
                                                        <tr className="text-left text-[12px] font-medium text-[var(--text-secondary)]">
                                                            <th className="px-2 py-2">
                                                                ID
                                                            </th>
                                                            <th className="px-2 py-2">
                                                                Name
                                                            </th>
                                                            <th className="px-2 py-2">
                                                                Designation
                                                            </th>
                                                            <th className="px-2 py-2">
                                                                AL
                                                            </th>
                                                            <th className="px-2 py-2">
                                                                PH
                                                            </th>
                                                            <th className="px-2 py-2">
                                                                PDO
                                                            </th>
                                                            <th className="px-2 py-2">
                                                                SL
                                                            </th>
                                                            <th className="px-2 py-2">
                                                                UL
                                                            </th>
                                                            <th className="px-2 py-2">
                                                                SL (HP)
                                                            </th>
                                                            <th className="px-2 py-2">
                                                                SL (UP)
                                                            </th>
                                                            <th className="px-2 py-2">
                                                                PL
                                                            </th>
                                                            <th className="px-2 py-2">
                                                                CL
                                                            </th>
                                                            <th></th>
                                                        </tr>
                                                    )}

                                                    {isSubgroupOpen &&
                                                        subgroup.employees.map(
                                                            (employee) => (
                                                                <tr
                                                                    key={
                                                                        employee.id
                                                                    }
                                                                    className="h-[60px] text-[12px]"
                                                                >
                                                                    <td className="border-b border-[var(--border-color)] px-2 text-[var(--text-secondary)]">
                                                                        {
                                                                            employee.id
                                                                        }
                                                                    </td>

                                                                    <td className="border-b border-[var(--border-color)] px-2">
                                                                        <div className="flex items-center gap-2">
                                                                            <img
                                                                                src={
                                                                                    human
                                                                                }
                                                                                alt=""
                                                                                className="h-7 w-7 rounded-full"
                                                                            />
                                                                            <span className="text-[var(--color-counter)]">
                                                                                {
                                                                                    employee.name
                                                                                }
                                                                            </span>
                                                                        </div>
                                                                    </td>

                                                                    <td className="w-[173px] border-b border-[var(--border-color)] px-2 text-[var(--text-primary)]">
                                                                        {
                                                                            employee.designation
                                                                        }
                                                                    </td>

                                                                    <td className="border-b border-[var(--border-color)] px-2">
                                                                        {formatNumber(
                                                                            employee.al
                                                                        )}
                                                                    </td>

                                                                    <td className="border-b border-[var(--border-color)] px-2">
                                                                        {formatNumber(
                                                                            employee.ph
                                                                        )}
                                                                    </td>

                                                                    <td className="border-b border-[var(--border-color)] px-2">
                                                                        {formatNumber(
                                                                            employee.pdo
                                                                        )}
                                                                    </td>

                                                                    <td className="border-b border-[var(--border-color)] px-2">
                                                                        {formatNumber(
                                                                            employee.sl
                                                                        )}
                                                                    </td>

                                                                    <td className="border-b border-[var(--border-color)] px-2">
                                                                        {formatNumber(
                                                                            employee.ul
                                                                        )}
                                                                    </td>

                                                                    <td className="border-b border-[var(--border-color)] px-2">
                                                                        {formatNumber(
                                                                            employee.sl_hp
                                                                        )}
                                                                    </td>

                                                                    <td className="border-b border-[var(--border-color)] px-2">
                                                                        {formatNumber(
                                                                            employee.sl_up
                                                                        )}
                                                                    </td>

                                                                    <td className="border-b border-[var(--border-color)] px-2">
                                                                        {formatNumber(
                                                                            employee.pl
                                                                        )}
                                                                    </td>

                                                                    <td className="border-b border-[var(--border-color)] px-2">
                                                                        {formatNumber(
                                                                            employee.cl
                                                                        )}
                                                                    </td>

                                                                    <td className="border-b border-[var(--border-color)] px-2">
                                                                        ...
                                                                    </td>
                                                                </tr>
                                                            )
                                                        )}
                                                </Fragment>
                                            );
                                        }
                                    )}
                            </Fragment>
                        );
                    })}
            </tbody>
        </table>
    );
};

export default Table;