import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/Header/Header';
import ScrollToTop from './Components/ScrollToTop';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';
import CustomGuest from './Components/CustomGuest/CustomGuest';
import Footer from './Components/Footer';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      scrolled: false
    }
  }

  componentDidMount() {
    
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        this.setState({ scrolled: true })
      } else {
        this.setState({ scrolled: false })
      }
    })
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <Header scroll={this.state.scrolled} />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/CustomGuest" component={CustomGuest} />
          <Route component={NotFound} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router >
    )
  }
}

export default App;


