
import {
    CardContainer,
    CardFigure,
    CardBody,
    CardFooter,
    CardImg
} from "./Card.styles"

import Link from 'next/link'

import Button   from "./../Button"

const Card = ({body, img, product}) => {
    return (
        <CardContainer>
            <CardFigure>
                <CardImg 
                    src={img} 
                />
            </CardFigure>
            <CardBody>
                {body}
            </CardBody>
            <CardFooter>
                <Button 
                    name="Add to cart"
                    onClick={() => {}}
                />
                 <Link 
                    href={`/products/${product.name}`}
                >
                <Button 
                    name="View"
                    onClick={() => {}}
                />
                </Link>
            </CardFooter>
        </CardContainer>
    )
}

export default Card