import { useState } from 'react';

const Color = ({color, selectedColor, setSelectedColor}) => {
  
  return <div onClick={() => setSelectedColor(color)} className={`${color} ${selectedColor === color ? 'selected' : ''}`}></div>
}

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="blue" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
        <Color color="black" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
        <Color color="yellow" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;
