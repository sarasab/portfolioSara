import React from 'react';

import { bounce } from 'react-animations';

 
const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}
 
class Test extends React.Component {
  render() {
    <StyleRoot>
      <div className="test" style={styles.bounce}>
      </div>
    </StyleRoot>
  }
}
export default Radium;