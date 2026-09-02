import "./Sidebar.css";
import human from "../../assets/human.png";
import { useState } from "react";

export default function Sidebar() {
    const [isDark, setIsDark] = useState(false);

    return (
        <>
            <div className="flex h-full flex-col justify-between">
                <div className="flex flex-col items-center gap-3">

                    <div className="element-menu">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 3V21"
                                stroke="var(--text-primary)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M3 12H21"
                                stroke="var(--text-primary)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    <div className="element-menu active">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4 4H10V10H4V4Z"
                                fill="var(--color-counter)"
                            />
                            <path
                                d="M14 4H20V10H14V4Z"
                                fill="var(--text-primary)"
                            />
                            <path
                                d="M4 14H10V20H4V14Z"
                                fill="var(--text-primary)"
                            />
                            <path
                                d="M14 14H20V20H14V14Z"
                                fill="var(--text-primary)"
                            />
                        </svg>
                    </div>

                    <div className="element-menu">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4 5H20"
                                stroke="var(--text-secondary)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M4 12H20"
                                stroke="var(--text-secondary)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M4 19H20"
                                stroke="var(--text-secondary)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    <div className="element-menu">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 3V21"
                                stroke="var(--text-secondary)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M3 12H21"
                                stroke="var(--text-secondary)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    <div className="element-menu">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 5H19V19H5V5Z"
                                stroke="var(--text-secondary)"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M8 9H16"
                                stroke="var(--text-secondary)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M8 13H14"
                                stroke="var(--text-secondary)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    <div className="element-menu">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 4V20"
                                stroke="var(--text-secondary)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M4 12H20"
                                stroke="var(--text-secondary)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <circle
                                cx="12"
                                cy="12"
                                r="8"
                                stroke="var(--text-secondary)"
                                strokeWidth="1.5"
                            />
                        </svg>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-3">

                    <div
                        className={`element-menu vision-theme ${
                            isDark ? "black" : "light"
                        }`}
                        onClick={() => setIsDark(!isDark)}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 3V5"
                                stroke="var(--color-counter)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M12 19V21"
                                stroke="var(--color-counter)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M3 12H5"
                                stroke="var(--color-counter)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M19 12H21"
                                stroke="var(--color-counter)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <circle
                                cx="12"
                                cy="12"
                                r="4"
                                fill="var(--color-counter)"
                            />
                        </svg>
                    </div>

                    <div className="account-avatar">
                        <img src={human} alt="" />
                    </div>

                </div>
            </div>
        </>
    );
}