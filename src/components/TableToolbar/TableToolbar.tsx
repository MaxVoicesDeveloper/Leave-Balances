type TableToolbarProps = {
    search: string;
    onSearch: (value: string) => void;
    onCollapseAll: () => void;
};

const TableToolbar = ({
    search,
    onSearch,
    onCollapseAll,
}: TableToolbarProps) => {
    return (
        <div className="flex items-center justify-between">

            {/* Search */}
            <div className="flex items-center gap-2">
                <button
                    type="button"
                    className="flex h-[32px] w-[32px] items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border-color)]"
                >
                    ↑
                </button>

                <input
                    type="text"
                    value={search}
                    onChange={(event) => onSearch(event.target.value)}
                    placeholder="Search by name or email"
                    className="h-[32px] w-[250px] rounded-[var(--radius-sm)] border border-[var(--border-color)] px-3 text-[14px] text-[var(--text-primary)] outline-none"
                />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
                <button
                    type="button"
                    className="rounded-[var(--radius-sm)] border border-[var(--border-color)] bg-[var(--color-background)] px-3 py-2 text-[14px] text-[var(--text-primary)]"
                >
                    Filters
                </button>

                <button
                    type="button"
                    onClick={onCollapseAll}
                    className="rounded-[var(--radius-sm)] border border-[var(--border-color)] bg-[var(--color-background)] px-3 py-2 text-[14px] text-[var(--text-primary)]"
                >
                    Collapse all
                </button>

                <button
                    type="button"
                    className="rounded-[var(--radius-sm)] border border-[var(--border-color)] bg-[var(--color-background)] px-3 py-2 text-[14px] text-[var(--text-primary)]"
                >
                    Hide Archived
                </button>

                <button
                    type="button"
                    className="rounded-[var(--radius-sm)] border border-[var(--border-color)] bg-[var(--color-background)] px-3 py-2 text-[14px] text-[var(--text-primary)]"
                >
                    Balance Audit
                </button>
            </div>

        </div>
    );
};

export default TableToolbar;