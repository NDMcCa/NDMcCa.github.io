import { useState } from "react";

export default function Theme() {
  const [theme, setTheme] = useState("light");

// Replace the following with a turnary operator once functionality is confirmed?
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className={theme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
} 