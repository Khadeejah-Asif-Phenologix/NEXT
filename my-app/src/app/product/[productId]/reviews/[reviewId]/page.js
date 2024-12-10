import { notFound } from "next/navigation";

export default async function ReviewDetails({ params }) {
    const { productId, reviewId } = await params; // Destructure the awaited params

    function getRandomInt(count) {
        return Math.floor(Math.random() * count);
    }
    
    if (parseInt(reviewId) > 1000) 
    {
        // Trigger the 404 page
        notFound();
    }

    const random = getRandomInt(2);

    if(random === 1)
    {
        throw new Error("Error Loading Review");
    }

    return (
        <h1>
            Details about review {reviewId} of product {productId}
        </h1>
    );
}
