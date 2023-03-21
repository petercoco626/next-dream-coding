import Link from 'next/link';

export default function Products() {
  const productsList = ['shirt', 'pants', 'skirt', 'shoes'];

  return (
    <>
      <div>제품 페이지 입니다.</div>
      <ul>
        {productsList.map((product) => (
          <li key={product}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
