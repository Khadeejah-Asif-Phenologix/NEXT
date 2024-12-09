import { notFound } from "next/navigation";

export default async function ReviewDetails({ params }) {
    const { productId, reviewId } = await params; // Destructure the awaited params

    if (parseInt(reviewId) > 1000) {
        // Trigger the 404 page
        notFound();
    }

    return (
        <h1>
            Details about review {reviewId} of product {productId}
        </h1>
    );
}
