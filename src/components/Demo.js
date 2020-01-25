import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring'
// import {Spring} from 'react-spring/renderprops';

export default () => {
  const [hovered, setHovered] = useState(false);
  const focusCard = () => {
    setHovered(true);
  };

  const unFocusCard = () => {
    setHovered(false);
  };

  const props = useSpring({
    transform: `scale(${hovered ? 1.2 : 1})`,
    boxShadow: hovered ? 'rgba(0, 0, 0, 0.2) 0px 16px 32px 0px' : 'rgba(0, 0, 0, 0.2) 0px 1px 2px 0px'
  });

  return (
    <animated.div
      style={props}
      onMouseOver={focusCard}
      onMouseOut={unFocusCard}
    >Hola Hola</animated.div>
  )
}
// export default class Demo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hovered: false
//     };
//   };
//
//   setHover = () => this.setState({hovered: true});
//   cancelHover = () => this.setState({hovered: false});
//
//   render() {
//     return (
//       <Spring
//         to={{
//           transform: `scale(${this.state.hovered ? 1.2 : 1})`,
//           boxShadow: this.state.hovered ? 'rgba(0, 0, 0, 0.2) 0px 16px 32px 0px' : 'rgba(0, 0, 0, 0.2) 0px 1px 2px
// 0px' }} > {props => ( <div style={props} onMouseOver={this.setHover} onMouseOut={this.cancelHover} >Hola Hola</div>
// )} </Spring> ); }; }