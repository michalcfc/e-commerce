
import {
    CardContainer,
    CardFigure,
    CardBody,
    CardImg
} from "./Card.styles"

import Link from 'next/link'

const Card = ({body, img, product}) => {
    return (
        <Link href={`/product/${product.name}`}>
        <CardContainer>
            <CardFigure>
                <CardImg src={img} />
            </CardFigure>
            <CardBody>
                {body}
            </CardBody>
        </CardContainer>
        </Link>
    )
}

export default Card