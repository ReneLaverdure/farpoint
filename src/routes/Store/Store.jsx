import { useParams } from 'react-router-dom';

export default function Store() {
    let {id} = useParams();
    
  return (
    <div>
        <h2>{id}</h2>
    </div>
  )
}
 