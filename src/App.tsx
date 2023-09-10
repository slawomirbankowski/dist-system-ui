import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="left-menu left-menu-hidden">
        <ul>
          <li className="left-menu-item">
            <a href="#">Home</a>
          </li>
          <li className="left-menu-item">
            <a href="#">Refresh</a>
          </li>
          <li className="left-menu-item log-out">
            <a href="#">Log out</a>
          </li>
        </ul>
      </div>
      <div className="flex">
        <nav className="nav">
          <div className="nav-buttons">
            <a className="nav-button" href="#">
              <span>Users</span>
            </a>
            <a className="nav-button" href="#">
              <span>Configurations</span>
            </a>
            <a className="nav-button" href="#">
              <span>Agents</span>
            </a>
            <a className="nav-button" href="#">
              <span>Jobs</span>
            </a>
            <a className="nav-button user" href="#">
              <span>sbankowski</span>
            </a>
            <a className="nav-button notifications" href="#">
              <span>Notifications</span>
            </a>
          </div>
        </nav>
        <main className="main">
          <div className="streams-menu">
            <ul className="stream-list">
              <li>
                <a href="#" className="link-stream">
                  Agent List
                </a>
              </li>
              <li>
                <a href="#" className="link-stream">
                  Stream 2
                </a>
              </li>
              <li>
                <a href="#" className="link-stream">
                  Stream 3
                </a>
              </li>
              <li>
                <a href="#" className="link-stream">
                  Stream 4
                </a>
              </li>
              <li>
                <a href="#" className="link-stream">
                  Stream 5
                </a>
              </li>
              <li>
                <a href="#" className="link-stream">
                  Stream 6
                </a>
              </li>
              <li>
                <a href="#" className="link-stream">
                  Stream 7
                </a>
              </li>
              <li>
                <a href="#" className="link-stream">
                  Stream 8
                </a>
              </li>
              <li>
                <a href="#" className="link-stream">
                  Stream 9
                </a>
              </li>
              <li>
                <a href="#" className="link-stream">
                  Stream 10
                </a>
              </li>
            </ul>
          </div>
          <div className="content">
            <div>Distributed Agent System</div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
