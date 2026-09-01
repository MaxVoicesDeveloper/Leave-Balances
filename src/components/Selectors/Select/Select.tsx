import {useState} from "react";
import SelectDropdown from "./SelectDropdown";

type SelectProps = {
    title: string;
    placeholder: string;
}

const Select = ({ title, placeholder }: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="select-wrapper relative">
            <div 
            className="select w-fit flex justify-between items-center bg-[var(--color-background)] rounded-[var(--radius-md)] p-[12px_7px_8px_7px]"
            onClick={() => setIsOpen(!isOpen)}
            >
                <div className="place-holder flex min-w-[250px] gap-3">
                    <span className="text-[var(--text-secondary)] text-[14px] font-medium">{title}</span>
                    <span className="text-[var(--text-primary)] text-[14px] font-regular">{placeholder}</span>
                </div>
                <span className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 9 5"
                        fill="none"
                        className="w-[11px] h-[7px]"
                    >
                        <path d="M0.5 0.5L4.5 4.5L8.5 0.5" stroke="#1D1D1F" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
            </div>
            {isOpen && (
                <SelectDropdown/>
            )}
        </div>
    )
}

export default Select