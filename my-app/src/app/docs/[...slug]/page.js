import React from "react";

export default async function Docs({ params }) {
  // Await the params object
  const { slug } = await params;

  if (slug && slug.length === 2) {
    return (
      <div>
        <h1>
          Viewing concepts for feature {slug[0]} and concepts {slug[1]}
        </h1>
      </div>
    );
  } else if (slug && slug.length === 1) {
    return (
      <div>
        <h1>Viewing concepts for feature {slug[0]}</h1>
      </div>
    );
  } else if (slug && slug.length === 0) {
    // Handle when slug is empty or undefined
    return (
      <div>
        <h1>Docs Home Page</h1>
      </div>
    );
  }else{
    return (
      <div>
        <h1> Invalid Path </h1>
      </div>
    )
  }
}
