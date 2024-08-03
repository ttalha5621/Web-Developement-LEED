import "./App.css";
import btnModule from "./Button.module.css";
import { useState } from "react";
import { queastions } from "./Data/faqQueastions";
import Faqs from './Faqs';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from "react-notifications";

let showNotification=()=>{
  NotificationManager.info("Info");
  NotificationManager.success('Success message', 'Title here');
  NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);;
  NotificationManager.error('Error message', 'Click me!', 5000, () => {
    alert('callback');
  });
}
function App() {
  let [status, setStatus] = useState(false);
  let [pstatus, setPstatus] = useState(false);
  let [menuStatus, setMenuStatus] = useState(false);
  let [modalStatus, setModalStatus] = useState(false);
  let [showAns, setShowAns] = useState(queastions[0].id)

  return (
    <div className="App">
      <button className="micon" onClick={() => setMenuStatus(!menuStatus)}>
        {menuStatus ? <span>&times;</span> : <span>&#9776;</span>}
      </button>
      <div className={`menu ${menuStatus ? "activeicon" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>

      <button className="en" onClick={() => setModalStatus(true)}>Enquire Now</button>
      <div onClick={() => setModalStatus(false)} className={`modalOverlay ${modalStatus ? 'modalshow' : ''}`}></div>
      <div className={`ModalDiv ${modalStatus ? 'showModalDiv' : ''}`}>
        <h3>Enquire Now <span onClick={() => setModalStatus(false)}>&times;</span></h3>
      </div>


      <input type={pstatus ? "text" : "password"} />{" "}
      <button onClick={() => setPstatus(!pstatus)}>
        {pstatus ? "Hide" : "Show"}
      </button>
      <div>
        <button className={btnModule.error}>Error</button>
        <button className={btnModule.warning}>Warning</button>

        <button onClick={() => setStatus(!status)}>
          {status ? "Hide" : "Show"}
        </button>
        {status ? <p className="paragraph">Welcome to LEED</p> : ""}
      </div>
      {/* FAQ */}
      <div className="faq">
        <h1>Frequently Asked Queastions (FAQ's)</h1>
        <div className="faqOuter">
          {queastions.map((faqItems, i) => {
            return (
              <div className="faqitems" key={i}>
                <h2 onClick={() => setShowAns(faqItems.id)}>{faqItems.queastion}</h2>
                <p className={showAns === faqItems.id ? 'activeAns' : ''}>{faqItems.answer}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* FAQ Component */}
      <Faqs />

      {/* Notifications */}
      <NotificationContainer/>
      <button onClick={showNotification}>Save</button>
    </div>
  );
}

export default App;
