import { DARK_THEME } from "@/config";

export const EmailIcon = ({ theme }: { theme: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      id="email"
      width="36"
      height="36"
      fill={theme === DARK_THEME ? "#fff" : "#000"}
    >
      <path d="M34.05 50 9 66.31V33.69L34.05 50zm31.9 0L91 66.31V33.69L65.95 50zm-3.66 2.39-11.2 7.29c-.33.21-.71.32-1.09.32s-.76-.11-1.09-.32l-11.2-7.29L10.66 70l-1.57 1.02C9.58 73.84 12.04 76 15 76h70c2.96 0 5.42-2.15 5.91-4.98L89.33 70 62.29 52.39zM50 55.61 89.33 30l1.58-1.02C90.42 26.15 87.96 24 85 24H15c-2.96 0-5.42 2.16-5.91 4.98L10.66 30 50 55.61z"></path>
    </svg>
  );
};