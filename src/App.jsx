import componentsImg from './assets/components.png'
import { CORE_CONCEPTS} from './data.js'
import Header from './components/Header/Header.jsx'
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import{useState} from 'react';
import { EXAMPLES } from './data.js';



function App() {
  const [selectedTopic, setSelectedTopic] = useState('')

  function handleSelect(selectedButton){
    // componenets, jsx
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
    

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
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts"> 
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcepts
          title="Components"
          description="The core UI building"
          image={componentsImg}
          />
          <CoreConcepts
          title={CORE_CONCEPTS[1].title}
          description={CORE_CONCEPTS[1].description}
          image={CORE_CONCEPTS[1].image}
          />
          <CoreConcepts {...CORE_CONCEPTS[2]}/>
          <CoreConcepts {...CORE_CONCEPTS[3]}/>
        </ul>
        <h2>Time to get started!</h2>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Componenets</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>

         {tabContent}

        </section>
        
      </main>
    </div>
  );
}

export default App;
