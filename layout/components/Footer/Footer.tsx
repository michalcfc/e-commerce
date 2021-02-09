import Link from "next/link"

import {
    FooterWrapper,
    FooterIcon
} from "./Footer.styles"

import  { Github } from './../../../components/Icons';

const Footer = () => {
    return (
        <FooterWrapper>
            Copyright © 2021 
            <Link href="https://github.com/michalcfc/e-commerce">
                <a target="_blank" rel="noreferrer">
                    <FooterIcon><Github/></FooterIcon>
                </a>
            </Link>
        </FooterWrapper>
    )
}

export default Footer