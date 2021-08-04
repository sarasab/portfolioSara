import React, { Component } from 'react';
import { Typewriter } from 'react-simple-typewriter'



  
    
    
class   Animation extends Component {
     render() {
    
    return (
        <div className='App'>
          <h1
            style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}
          >
            j'aime{' '}
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={['Danser', 'Lire', 'Coder', 'voyager']}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={() => console.log(`Done after 10 loops!`)}
              />
            </span>
          </h1>
        </div>
      );
    }
}
export default Animation;