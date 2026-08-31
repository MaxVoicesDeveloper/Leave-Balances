const SubSidebar = () => {
    return(
        <>
         <div className="subSidebar flex h-full flex-col gap-3 bg-[var(--color-sidebar)] p-4 w-100 rounded-[var(--radius-md)] border border-[var(--border-color)]">
            <h1 className="text-[var(--text-primary)] text-[var(--text-primary)] text-[24px] font-semibold">Leaves<br/> and Attendance</h1>
            <div className="menu-items">
                <div className="menu-item text-[var(--text-primary)] font-medium p-2 bg-[var(--color-primary)] rounded-[var(--radius-md)]">Leave Balances</div>
                <div className="menu-item p-2 text-[var(--text-secondary)]">Leave Balances</div>
                <div className="menu-item p-2 text-[var(--text-secondary)]">Public Holidays</div>
            </div>
         </div>
        </>
    )
}

export default SubSidebar