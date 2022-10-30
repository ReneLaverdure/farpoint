import {Link, useParams} from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard';
import BannerImage from '../../assets/img/highTopBanner1.jpg'
import Banner from '../Banner/Banner';
import {CategoryPreviewContainer, Preview} from './categoryPreview.style'

export default function CategoryPreview({title, products}) {
  let params = useParams();
  console.log(params)

  return (
    <CategoryPreviewContainer>
        <h2>
            <Link className='title' to={title}>{title}</Link>
        </h2>
        <Banner backgroundImage={BannerImage} title={title}/>
        <Preview>
            {products.filter((_,idx) => idx < 5)
                .map((product) => {
                    let url = title + '/' + product.id
                    return (
                      <ProductCard key={product.id} product={product} url={url} />
                    )
                    
                })}
        </Preview>
    </CategoryPreviewContainer> 
  )
}
