import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext.jsx";

export function Level5(props) {
  const {themeMode, setThemeMode} = useContext(ThemeContext);
  const otherMode = themeMode==='light'?'dark':'light';
  // console.log(`otherMode ${otherMode}`);
  const changeTheme = () => {
    setThemeMode(otherMode)
  }
  return (
    <>
      <div>Niveau de profondeur 5</div>
      <div>Mode <strong>{themeMode}</strong> activé</div>
      <button onClick={() => {changeTheme()}}>Passer au mode {themeMode==='light'?'foncé':'clair'} </button>
    </>
  );
}
