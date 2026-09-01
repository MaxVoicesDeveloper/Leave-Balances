import Select from "./Select/Select.tsx";

const Selectors = () => {
    return (
        <div className="selectors flex gap-2">
            <Select title="Chain:" placeholder="All" />
            <Select title="Location:" placeholder="All" />
        </div>
    )
}

export default Selectors