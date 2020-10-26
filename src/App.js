import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dummy from "./Dummy";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MoneyApi from "./Components/MoneyApi";
import SidebarComp from "./Components/SidebarComp";


// library.add(faFacebookF);

export default class App extends React.Component {
  state = { flag: false };
  displayComp = (flag) => {
    this.setState({ flag: true });
  };
  render() {
    return (
      <div className="grid-container">
        <header>
          <Header></Header>
        </header>

        <main>
          <div className="row-class">
            {/* <div className="col-md-3"> */}
            <div className="col-md-2">
              <SidebarComp getComp={this.displayComp}></SidebarComp>
            </div>

            <div className="col-md-10">
              {!this.state.flag && <Dummy></Dummy>}
              {this.state.flag && <MoneyApi></MoneyApi>}
            </div>
          </div>
        </main>

        <footer>
          <Footer></Footer>
        </footer>
      </div>
    );
  }
}
