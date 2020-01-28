import React from 'react';
import GridHome from '../components/GridHome';
import Footer from '../components/Footer';
import { InView } from 'react-intersection-observer';
import { animated } from 'react-spring';
import { Spring } from 'react-spring/renderprops';

export default class Services extends React.Component {
  state = {
      showH1: false
  }
  onInViewChange = inview => {
    if (!this.state.showH1 && inview) {
      this.setState({ showH1: true })
    }else{
      this.setState({ showH1: false }) 
    }
  }
  render(){
    return (
      <InView tag="div" onChange={this.onInViewChange}>
        <Spring to={{ opacity: this.state.showH1 ? 1 : 0 }} delay={0}>
          {props => (
            <animated.div style={props}>
              <GridHome />
              <Footer />
            </animated.div>
          )}
        </Spring>
      </InView>
    )
  }
}
