import React from "react";
import Link from "next/link";

export default function Products() {
  return (
    <div>
      <h1>Products Page</h1>

      <h2>
        <Link href="/product/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="/product/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="/product/3" replace>
          Product 3
        </Link>
      </h2>
      {/* Replace will redirect to Home page instead of Product Page. It
        replaces the current history state instead of adding new URL to the stack.
      */}

      <br />
      <Link href="/">Home</Link>
    </div>
  );
}
