import { useState } from "react";
import "./App.css";
import { tabs } from "./tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function App() {
  let [todolist, settodolist] = useState([]);
  let [activeTabs, setActiveTabs] = useState(0);
  let [activeContent, setActiveContent] = useState(tabs[0]);

  let changeData = (index) => {
    setActiveTabs(index)
    setActiveContent(tabs[index])
  }

  let saveToDoList = (event) => {
    let todoname = event.target.todoname.value;
    if (!todolist.includes(todoname)) {
      let finalToDoList = [...todolist, todoname];
      settodolist(finalToDoList);
    } else {
      alert("This task is already in the list");
    }
    event.preventDefault();
  };

  let list = todolist.map((value, index) => {
    return (
      <ToDoListItems
        value={value}
        key={index}
        indexNumber={index}
        todolist={todolist}
        settodolist={settodolist}
      />
    );
  });
  return (
    <div className="App">
      <div className="tabsOuter">
        <h1 style={{ textAlign: "left" }}>
          Law Prep Vision Mission and Values
        </h1>
        <ul>
          {tabs.map((tabsItems, index) => {
            return (
              <li key={index}>
                <button onClick={() => changeData(index)} className={activeTabs === index ? "activeButton" : ""}>
                  {tabsItems.title}
                </button>
              </li>
            );
          })}
        </ul>
        {activeContent !== undefined ? <p>{activeContent.description}</p> : ""}
      </div>
      <h1>To Do List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" placeholder="Enter a task" name="todoname" />
        <button type="submit">Add Task</button>
      </form>
      <div className="outerDiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default App;

function ToDoListItems({ value, indexNumber, todolist, settodolist }) {
  let [status, setStatus] = useState(false);
  let deleteRow = () => {
    let finalData = todolist.filter((v, i) => i !== indexNumber);
    settodolist(finalData);
  };
  // let editRow = () => {
  //   let editData= (
  //     todolist.map((todolist) => {
  //         if (todolist.indexNumber === indexNumber) {
  //             return { ...todolist,status};
  //           }
  //           console.log(status)
  //         return status;
  //     })
  // );
  // settodolist(editData)
  // }
  let checkStatus = () => {
    setStatus(!status);
  };
  return (
    <li className={status ? "completetodo" : ""} onClick={checkStatus}>
      {indexNumber + 1}
      {"."} {value}

      <button className="delete" onClick={deleteRow}>
        <FontAwesomeIcon  icon={faTrash} />
      </button>
      <button className="edit" >
        <FontAwesomeIcon  icon={faEdit} />
      </button>
    </li>
  );
}
