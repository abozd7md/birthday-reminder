import React from "react";
import data from "./data";
function App() {
  const listMap = data.map((item) => {
    return (
      <div key={item.id} className="person">
        <div className="titles">
          <h3>{item.name}</h3>
          <p>{item.age} years old</p>
        </div>
        <img src={item.image} alt="profile" />
        <button>Send Message</button>
      </div>
    );
  });
  return (
    <main>
      <div className="container">
        <div>
          <h2>Birthday Project Reminder</h2>
        </div>
        {listMap}
      </div>
    </main>
  );
}

export default App;
