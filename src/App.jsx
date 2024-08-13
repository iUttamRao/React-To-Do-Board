import { useState } from 'react';
import './App.css';

function App() {
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);
  const [draggedItem, setDraggedItem] = useState(null);

  const [todoData, setTodoData] = useState(["Banking Module", "Sasria Module","Bulk Upload","Memo",]);
  const [workingData, setWorkingData] = useState(["Section Module"]);
  const [doneData, setDoneData] = useState(["Item Module"]);

  const onDragStart = (item) => (e) => {
    setDraggedItem(item);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (targetList, setTargetList) => (e) => {
    e.preventDefault();
    const item = draggedItem;

    setTodoData(todoData.filter(i => i !== item));
    setWorkingData(workingData.filter(i => i !== item));
    setDoneData(doneData.filter(i => i !== item));

    setTargetList(prevData => [...prevData, item]);
    setDraggedItem(null);
  };

  const myStyle = {
    border: "2px red solid",
    padding: "10px",
    margin:'2px',
    cursor: "move"
  };

  return (
    <>
      <div style={{display:'flex', flexDirection:'row'}}>
        <div
          style={{width:"33%", border: "2px green solid"}}
          onDragOver={onDragOver}
          onDrop={onDrop(todoData, setTodoData)}
        >
          <h3 style={{textAlign:"center"}}>Todo</h3>
          {todoData.map((item) => (
            <div
              key={item}
              draggable
              onDragStart={onDragStart(item)}
              style={myStyle}
            >
              {item}
            </div>
          ))}
        </div>
        <div
          style={{width:"33%", border: "2px green solid"}}
          onDragOver={onDragOver}
          onDrop={onDrop(workingData, setWorkingData)}
        >
          <h3 style={{textAlign:"center"}}>Working</h3>
          {workingData.map((item) => (
            <div
              key={item}
              draggable
              onDragStart={onDragStart(item)}
              style={myStyle}
            >
              {item}
            </div>
          ))}
        </div>
        <div
          style={{width:"33%", border: "2px green solid"}}
          onDragOver={onDragOver}
          onDrop={onDrop(doneData, setDoneData)}
        >
          <h3 style={{textAlign:"center"}}>Done</h3>
          {doneData.map((item) => (
            <div
              key={item}
              draggable
              onDragStart={onDragStart(item)}
              style={myStyle}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
