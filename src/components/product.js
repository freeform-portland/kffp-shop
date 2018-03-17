import Link from 'next/link';
import { Fragment } from 'react';

/*
const productStyle = `
    h2 {
        color: red;
    }
`;
*/

export const Product = ({ name, productId, image }) => (
    <Fragment>
        <h2>{name}</h2>
        <Link href={`/product/${productId}`}>
            <a>
                <img
                    src={image}
                />
            </a>
        </Link>
        <style>{/* productStyle */}</style>
    </Fragment>
);