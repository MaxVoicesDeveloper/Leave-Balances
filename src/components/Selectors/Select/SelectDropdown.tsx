import "./SelectDropdown.css";

    const SelectDropdown = () => {
        return (
            <div className="drop-down absolute top-[calc(100%+4px)] left-0 z-10 flex flex-col gap-3 p-3 bg-[var(--color-background)] rounded-[var(--radius-md)]">

                <div className="search-block flex justify-between items-center gap-3">
                    <input
                        type="text"
                        placeholder="Search Chain"
                        className="border border-[var(--border-color)] rounded-[6px] p-[3px_8px] w-full"
                    />

                    <button className="text-red-500">
                        Reset
                    </button>
                </div>

                <label className="checkbox-item">
                    <input type="checkbox" defaultChecked />
                    <span className="checkbox-custom"></span>
                    <span className="checkbox-text">Scalini Group</span>
                </label>

                <label className="checkbox-item">
                    <input type="checkbox" defaultChecked />
                    <span className="checkbox-custom"></span>
                    <span className="checkbox-text">Scalini Group</span>
                </label>

                <label className="checkbox-item">
                    <input type="checkbox" defaultChecked />
                    <span className="checkbox-custom"></span>
                    <span className="checkbox-text">Scalini Group</span>
                </label>

                <hr className="border-[var(--border-color)]" />

                <label className="checkbox-item">
                    <input type="checkbox" />
                    <span className="checkbox-custom"></span>
                    <span className="checkbox-text">Scalini Group</span>
                </label>

                <label className="checkbox-item">
                    <input type="checkbox" />
                    <span className="checkbox-custom"></span>
                    <span className="checkbox-text">Scalini Group</span>
                </label>

                <label className="checkbox-item">
                    <input type="checkbox" />
                    <span className="checkbox-custom"></span>
                    <span className="checkbox-text">Scalini Group</span>
                </label>

                <label className="checkbox-item">
                    <input type="checkbox" />
                    <span className="checkbox-custom"></span>
                    <span className="checkbox-text">Scalini Group</span>
                </label>

            </div>
        );
    };

    export default SelectDropdown;