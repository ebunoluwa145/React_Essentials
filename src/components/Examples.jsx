import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton.jsx"
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples(){

const [selectedTopic, setSelectedTopic] = useState('')

  function handleSelect(selectedButton){
    // componenets, jsx
    setSelectedTopic(selectedButton);
    

}

let tabContent = <p>Please select an option</p>

if(selectedTopic){
  tabContent=
  <div id="tab-content">
          
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code} </code>
          </pre>
         </div>

}
    return(
        <Section title="Examples" id="examples">
          <Tabs buttons={
            <>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Componenets</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
            </>
            }>

            {tabContent}
            </Tabs>
          <menu>
            
          </menu>


        </Section>
        
    )
}

