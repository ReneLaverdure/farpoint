import {CircleContainer} from './circle.style.jsx'

interface CircleInterface {
    top: string;
    right: string;
    colour: string;
    width: string;
    height: string;
}

export default function Circle({top, right, colour, width, height}: CircleInterface) {

  return (
    <CircleContainer 
        top={top} 
        right={right} 
        colour={colour} 
        width={width} 
        height={height}    
    />
  )
}
