import { useState } from "react";

export const Tableau = () => {
    const [myArray, setmyArray] = useState(["Ayoub", "Adil", "Mehdi", "Hamza"]);

    const suppr = (index) =>{
        const newtab = [...myArray];
        newtab.splice(index,1);
        setmyArray(newtab);
    }
    const edit = (index) =>{
        const newtab = [...myArray];
        setmyArray(newtab);
        let newnom = prompt(`Modifier ${newtab[index]}`);
        while (newnom==="") {
            newnom = prompt(`Modifier ${newtab[index]}`);
        }
        newtab[index]=newnom;
        setmyArray(newtab);


    }


    return (
        <>
            {
                myArray.map((element , index) =>
                    <>
                        <h1 >{element} </h1>
                        <button onClick={()=>{
                            suppr(index);
                        }}>Supprimer</button>
                        <button onClick={()=>{
                            edit(index);
                        }}>Edit</button>
                    </>
                )
            }
        </>
    )

}