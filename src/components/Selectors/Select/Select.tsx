type SelectProps = {
    title: string;
    placeholder: string;
};

const Select = ({ title, placeholder }: SelectProps) => {
    return (
        <>
            <div className="select flex w-fit items-center justify-between rounded-[var(--radius-md)] bg-[var(--color-background)] p-[12px_7px_8px_7px]">
                <div className="place-holder flex min-w-[250px] gap-3">
                    <span className="text-[14px] font-medium text-[var(--text-secondary)]">
                        {title}
                    </span>

                    <span className="text-[14px] text-[var(--text-primary)]">
                        {placeholder}
                    </span>
                </div>

                <span className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 9 5"
                        fill="none"
                        className="h-[7px] w-[11px]"
                    >
                        <path
                            d="M0.5 0.5L4.5 4.5L8.5 0.5"
                            stroke="var(--text-primary)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </div>
        </>
    );
};

export default Select;