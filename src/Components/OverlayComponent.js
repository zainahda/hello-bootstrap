import {useState, useRef} from 'react';
import { Button, Overlay, Tooltip } from 'react-bootstrap';


const OverlayComponent = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
    <Button ref={target} onClick={() => setShow(!show)}>
    Click me!
  </Button>
  <Overlay target={target.current} show={show} placement="right">
    {(props) => (
      <Tooltip id="overlay-example" {...props}>
        Hello World!!
      </Tooltip>
    )}
  </Overlay>
  </>
  )
}

export default OverlayComponent;
