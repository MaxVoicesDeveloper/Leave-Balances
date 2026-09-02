import Sidebar from "./components/Sidebar/Sidebar.tsx"
import SubSidebar from "./components/subSidebar/subSidebar.tsx"
import LeaveBalances from "./components/LeaveBalances/LeaveBalances.tsx"

const App = () => {
  return (
    <div className="flex min-h-screen bg-[var(--color-background)]">
      <aside className="sticky top-0 h-screen w-[var(--sidebar-width)] shrink-0 border-r border-[var(--color-border)] bg-[var(--color-background)] p-[8px]">
    <div className="flex h-full gap-3">
        <Sidebar />
        <SubSidebar />
    </div>
</aside>

      <main className="w-full bg-[var(--bg-main)]">
        <div className="p-[var(--spacing-page)]">
          <LeaveBalances/>

        </div>
      </main>
    </div>
  )
}

export default App