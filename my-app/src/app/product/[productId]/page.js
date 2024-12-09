/**
 * @param {Object} params - The route parameters
 * @param {string} params.productId - The ID of the product
 * 
 * This is a comment part of the code.
 */
export const generateMetadata = async ({ params }) => {
    const { productId } = await params; // Destructure productId from params
    return {
        title: `Product ${productId}`,
    };
};

export default async function ProductDetails({ params }) {
    const { productId } = await params;
    return (
        <h1>Details about product {productId}</h1>
    );
}
