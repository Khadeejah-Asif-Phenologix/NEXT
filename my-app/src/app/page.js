import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <Link href='/about'>About</Link>
      <br/>
      <Link href='/product'>Product</Link>
      <br/>
      <Link href='/order-product'>Order Product</Link>
    </div>
  );
}
