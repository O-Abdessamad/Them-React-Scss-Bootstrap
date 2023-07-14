import { useState } from "react"

export const Object =()=>{

    const [valueinput1,setvalueinput]=useState("");
    const [valueinput2,setvalueinput2]=useState("");
    const [valueinput3,setvalueinput3]=useState("");
    const [presentation,setpresentation]=useState({
        nom : "abdessamad",
        age : 22 ,
        metier : "vendeur"

    });

    const input = (event) =>{
        console.log(event.target.value);
        setvalueinput(event.target.value);
    }
    const input2 = (event) =>{
        console.log(event.target.value);
        setvalueinput2(event.target.value);
    }
    const input3 = (event) =>{
        console.log(event.target.value);
        setvalueinput3(event.target.value);
    }
    const nomchg= ()=>{
        const newpresentation = presentation;
        newpresentation.nom=valueinput1;
        setpresentation(newpresentation);
        setvalueinput("");
    }
    const agechg= ()=>{
        const newpresentation = presentation;
        newpresentation.age=valueinput2;
        setpresentation(newpresentation);
        setvalueinput2("");
    }
    const metierchg= ()=>{
        const newpresentation = presentation;
        newpresentation.metier=valueinput3;
        setpresentation(newpresentation);
        setvalueinput3("");
    }
    return(
        <>
        <h1 className="bg-danger pt-5"> je suit {presentation.nom} et j'ai {presentation.age} mon metier est {presentation.metier} </h1>
        <div>
            <input type="text" value={valueinput1} onChange={(event)=>{
                input(event)
            }}/> <button onClick={nomchg}>Changer nom</button>
        </div>
        <hr />
        <div>
            <input type="text" value={valueinput2} onChange={(event)=>{
                input2(event)
            }}/> <button onClick={agechg}>Changer age</button>
        </div>
        <hr />
        <div>
            <input type="text" value={valueinput3} onChange={(event)=>{
                input3(event)
            }}/> <button onClick={metierchg}>Changer metier</button>
        </div>
        <hr />
        
        </>
    )
}