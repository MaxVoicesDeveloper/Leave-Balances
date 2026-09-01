type TableToolbarProps = {
    search: string;
    onSearch: (value: string) => void;
};

const TableToolbar = ({
    search,
    onSearch,
}: TableToolbarProps) => {
    return (
        <div className="flex items-center justify-between">

            <div className="flex items-center gap-2">
                <button
                    type="button"
                    className="..."
                >
                    {/* твой SVG */}
                </button>

                <input
                    type="text"
                    value={search}
                    onChange={(event) => onSearch(event.target.value)}
                    placeholder="Search by name or email"
                    className="..."
                />
            </div>

            <div className="flex items-center gap-2">
                <button type="button">
                    Filters
                </button>

                <button
                    type="button"

                >
                    Collapse all
                </button>

                <button type="button">
                    Hide Archived
                </button>

                <button type="button">
                    Balance Audit
                </button>
            </div>

        </div>
    );
};

export default TableToolbar;