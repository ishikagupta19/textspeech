
import './App.css';
import { Container, Segment } from 'semantic-ui-react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { useState } from 'react';

function App() {

  const [text, setText] = useState('')
  const{speak} = useSpeechSynthesis();

  const handleOnClick = () =>{
    speak({text: text})
  }
  return (
    <Container>
      <Segment >
        <h1 style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"5%"}}> Text to Speech Converter</h1>
        <textarea className='styleText' onChange={(e) => {setText(e.target.value)}}></textarea>
        <button className='styleButton' onClick={()=> {handleOnClick()}}>Listen input text</button>
        
      </Segment>
    </Container>
  );
}

export default App;
