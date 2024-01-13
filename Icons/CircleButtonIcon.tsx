export const CircleButtonIcon = ({ selected }: { selected: boolean }) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle
      stroke="#fafafa"
      strokeWidth="10"
      cx="50"
      cy="50"
      r="40"
      fill={selected ? "#fafafa" : "1a1a1a"}
    />
    <circle
      stroke="#1a1a1a"
      strokeWidth="10"
      cx="50"
      cy="50"
      r="30"
      fill={selected ? "#fafafa" : "1a1a1a"}
    />
  </svg>
);
