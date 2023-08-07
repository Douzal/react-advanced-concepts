import { useRef } from "react";
import { Level2 } from "./Level2";

export function Level1(props) {

  // const cardNumberInputRef = useRef();
  const cardCodeInputRef = useRef();
  const cardExpirationInputRef = useRef();

  const handleChange = (e, max=5) => {
    //! ACCES VIA .CURRENT TOUJOURS
    console.log(`e.target.length : ${e.target.value.length}\nmax : ${max}\n\ne.target.length >= max : ${e.target.value.length >= max}`);
    // e.current = ref;
    // console.log(ref.target.value);
    if (e.target.value.length >= max) {
      cardCodeInputRef.current.focus();
    }
  }

  const handleChangeCode = (e) => {
    if(e.target.value.length >=3) {
      cardExpirationInputRef.current.focus();
    }
  }

  return (
    <>
      <div _style={{ minHeight: '70vh' }}>Niveau de profondeur 1</div>
      <Level2 />

      {/* REF */}
      <div>
        <label htmlFor="cc_Number">Code carte bancaire :</label>
        <input type="number" name="cc_Number" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="cc_Code">Code secret</label>
        <input type="number" name="cc_Code" ref={cardCodeInputRef} onChange={handleChangeCode}/>
      </div>
      <div>
        <label htmlFor="cc_Expiration">Expiration</label>
        <input ref={cardExpirationInputRef} type="text" name="cc_Expiration" />
      </div>

    </>
  );
}

export const sayHelloFromLvl1 = () => {
  // mais trop compliqué d'yutiliser le context pour l'envoyer dans le comp 5, faisable
  // mais flemme de test.
  console.log('Hello from lvl 1');
}