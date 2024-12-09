// Nested Dynamic Routes

export default async function ProductDetails({ params }) {
    return (
            <h1>Details about product {params.productId}</h1>
    );
}
