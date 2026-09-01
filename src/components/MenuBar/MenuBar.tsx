import "./MenuBar.css";

const MenuBar = () => {
    return(
        <>
            <div className="menu-bar w-fit p-[5px] flex gap-3 bg-[var(--color-background)] rounded-[var(--radius-md)] border border-[var(--border-color)]">
                <button className="button-bar">Head Office</button>
                <button className="button-bar active">Restaurants</button>
            </div>
        </>
    )
}

export default MenuBar