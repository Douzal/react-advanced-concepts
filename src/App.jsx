import { useContext, useState } from "react";
import { Level1 } from "./components/Level1";
import { ThemeContext, THEME } from "./contexts/ThemeContext.jsx";
import CounterComponent from "./components/CounterComponent.jsx";

export function App() {
  // récupération du mode du Context
  const initialThemeMode = useContext(ThemeContext);
  const [themeMode, setThemeMode] = useState(initialThemeMode)
  // console.log(themeMode);
  // console.log(THEME);

  return (
    // entourer l'app par le context, pour l'abreuver de son state
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
    <div className="row">
      <div className="col">
          <div style={{
            color: THEME[themeMode].txtCol,
            backgroundColor: THEME[themeMode].bgCol,
            minHeight: '100vh'
          }}>
            <Level1 />
          </div>
      </div>
      <div className="col">
            <CounterComponent />
      </div>
    </div>
      
    </ThemeContext.Provider>
  );
}
