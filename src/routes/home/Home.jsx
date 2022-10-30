import Circle from '../../components/Circle/Circle'

import { HomeContainer, HomeContent } from './Home.style'

export default function () {
  return (
    <HomeContainer>
        <Circle 
          top="-310" 
          right="-300"
          height="900px"
          width="900px"
          colour="blue"
          />
        <Circle
          top="50" 
          right="100" 
          />

        <HomeContent>
          <h1>Sneakers with Drip</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis ex eget nisi eleifend suscipit. </p>
        </HomeContent>
    
    </HomeContainer>
  )
}
