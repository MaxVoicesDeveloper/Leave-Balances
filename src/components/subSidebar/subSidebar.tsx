const SubSidebar = () => {
    return (
        <>
            <div className="subSidebar flex h-full w-100 flex-col gap-3 rounded-[var(--radius-md)] border border-[var(--border-color)] bg-[var(--color-sidebar)] p-4">
                <h1 className="text-[24px] font-semibold text-[var(--text-primary)]">
                    Leaves
                    <br />
                    and Attendance
                </h1>

                <div className="menu-items">
                    <div className="menu-item rounded-[var(--radius-md)] bg-[var(--color-primary)] p-2 font-medium text-[var(--text-primary)]">
                        Leave Balances
                    </div>

                    <div className="menu-item p-2 text-[var(--text-secondary)]">
                        Leave Balances
                    </div>

                    <div className="menu-item p-2 text-[var(--text-secondary)]">
                        Public Holidays
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubSidebar;