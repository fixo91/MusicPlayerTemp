import './App.css';
import Button from './button';


const buttonTomb = [
  { id: 1, text: 'Play', disabled: false, hidden: false, startIcon1: true},
  { id: 2, text: 'Stop', disabled: false, hidden: false, startIcon2: true},
  { id: 3, text: 'Pause', disabled: false, hidden: false, startIcon3: true},
  { id: 4, text: 'Next', disabled: false, hidden: false, startIcon4: true},
  { id: 5, text: 'Prev', disabled: false, hidden: false, startIcon5: true},
  { id: 6, text: 'Vol', disabled: false, hidden: false, startIcon6: true}
  ];

function App() {

  return (
    <>
    <h1>Music Player</h1>
    {buttonTomb.map(button => <Button key={button.id} {...button}></Button>)}
    
    </>
  );
}

export default App;
