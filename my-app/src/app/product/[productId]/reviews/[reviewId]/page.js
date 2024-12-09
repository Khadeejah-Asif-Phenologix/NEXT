export default async function ReviewDetails({ params }) {
    const { productId, reviewId } = params; // Destructure the awaited params

    return (
        <h1>
            Details about review {reviewId} of product {productId}
        </h1>
    );
}
