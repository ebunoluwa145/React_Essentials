import CoreConcepts  from "./CoreConcepts.jsx"
import { CORE_CONCEPTS } from "../data"

export default function CoreConcept(){
    return(
        <section id="core-concepts"> 
                <h2>Core Concepts</h2>
                <ul>
                  { CORE_CONCEPTS.map((conceptItem) => 
                  (<CoreConcepts key ={conceptItem} {...conceptItem}/>
                  ))}
                  
                </ul>
                <h2>Time to get started!</h2>
                </section>
    )
}