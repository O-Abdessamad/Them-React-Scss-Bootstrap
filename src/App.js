import { useState } from "react";

export const App = () => {

  const [nom, setnom] = useState("hassaan");
  const [age, setage] = useState(23);
  const [count, setcount] = useState(0);
  const [valueinput,setvalueinput]=useState("");

  const add = () => {
    setcount(count + 1);
    console.log(count);
  }
  const change = () => {
    let nomch = prompt("changer le nom");
    let agech = prompt("changer l'age");
    while (nomch.length === 0 || agech.length === 0) {
      nomch = prompt("changer le nom");
      agech = prompt("changer l'age");
    }
    setnom(nomch);
    setage(agech);

  }
  const input = (event) =>{
    console.log(event.target.value);
    setvalueinput(event.target.value);
  }
  const changeNom = () =>{
    setnom(valueinput);
    setvalueinput("");

  }
  return (
    <>
      <h1>je suis {nom} et j'ai {age} </h1>
      <button onClick={change}>Change Nom</button>
      <br />
      <hr />
      <button onClick={add}>add</button>
      <h1> {count} </h1>
      <hr />

      <div>
        <input type="text" value={valueinput} onChange={(event)=>{
          input(event);
        }}/> <button onClick={changeNom}>changer le nom avec input</button>
      </div>

      <hr />
      {
        age===18 ? <h1>t'as de la chance </h1>
        :
        age>=18 ? <h1>Vous pouvez rentrer</h1> 
        :
        age<=18 ? <h1>Vous ne pouvez pas rentrer</h1>
        :
        <>
          
        </>

      }

    </>
  );
}