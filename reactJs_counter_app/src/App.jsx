import { useState } from "react";
import "./TashbihApp.css"

function TashbihApp() {
  const [subhanAllah, setsubhanAllah] = useState(0);
  const [alhamdulillah, setAlhamdulillah] = useState(0);
  const [astagfirullah, setAstagfirullah] = useState(0);
  const reset = () => {
    setsubhanAllah(0);
    setAlhamdulillah(0);
    setAstagfirullah(0);
  };

  return (
    <div style={{ marginTop: "20ox", textAlign: "center" }}>
      <h2>Tashbih App</h2>
      <button onClick={() => setsubhanAllah(subhanAllah + 1)}>
        SubhanAllah
      </button>
      <button onClick={() => setAlhamdulillah(alhamdulillah + 1)}>
        Alhamdulillah
      </button>
      <button onClick={() => setAstagfirullah(astagfirullah + 1)}>
        Astagfirullah
      </button>
      <button onClick={reset}>Reset</button>

      <div>
        <span>
          <ul>SubhanAllah: {subhanAllah} times</ul>
          <ul>Alhamdulillah:{alhamdulillah} times</ul>
          <ul>Astagfirullah: {astagfirullah} times</ul>
        </span>
      </div>
    </div>
  );
}

export default TashbihApp;
