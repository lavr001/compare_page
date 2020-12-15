import React, {Component} from 'react';
import Tabs from './components/Tabs/Tabs';
import Plan from './components/Plan/Plan';
import Highlights from './components/Highlights/Highlights';
import './App.scss';

class App extends Component {

  state = {
    plans: {
      aetna: {
        name: 'Aetna Medicare Plus Plan (HMO)',
      },
      kaiser: {
        name: 'Kaiser Permanente Senior Advantage LA, Orange Co. (HMO)',
      },
      anthem: {
        name: 'Anthem MediBlue StartSmart Plus (HMO)',
      },
    },
    current_plan: 'aetna',
  }

  activate_tab = (event, name) => {
    this.setState({ current_plan: name });
    document.querySelectorAll('[data-active]').forEach(a => a.setAttribute('data-active', 'false'));
    event.target.setAttribute('data-active', 'true');
    document.querySelector('[data-plan]').setAttribute('data-plan', name)
  }

  onScroll = () => {
  // const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
  // const scrollTop = this.myRef.current.scrollTop
  // console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`)
  // this.setState({
  //   scrollTop: scrollTop
  // })
    console.log(document.querySelector('main').getBoundingClientRect());
  }


  render() {
    return (
      <div className="container" onScroll={this.onScroll}>
        <Tabs clicked={(event, name) => this.activate_tab(event, name)} />
        <Plan name={this.state.plans[`${this.state.current_plan}`].name} />
        <main>
          <Highlights />
        </main>
      </div>
    )
  }
}

export default App;
