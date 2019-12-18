import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { AFrameRenderer, Marker } from 'react-web-ar';

class Hiro extends Component {
  render() {
    return (
      <AFrameRenderer arToolKit={{ sourceType: 'webcam' }} >
        <Marker parameters={{ preset: 'hiro' }}>
          <a-entity camera look-controls cursor="rayOrigin: mouse">
            
            <a-entity
              id="example"
              example-listener
              cursor="fuse: true; fuseTimeout: 500"
              position="0 0 0"
              geometry="primitive: box; height: 0.1; depth: 1.5; rotation: 90 0 0;"
              material="shader: flat;"
              visible="true">
              <a-animation 
                attribute="position"
                dur="3000"
                begin="exampleAnimation"
                from="0 0 0"
                to="2 0 0"/>
            </a-entity>

          </a-entity>
        </Marker>
      </AFrameRenderer>
    );
  }
}

render(<Hiro />, document.getElementById('root'));

export default Hiro;
