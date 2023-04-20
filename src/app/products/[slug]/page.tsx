import { getProduct, getProducts } from '@/api/products';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

// {params : {slug}} --> 이렇게 하는걸 구조분해 라고 한다.
export default function PantsPage({ params: { slug } }: Props) {
  const product = getProduct(slug);
  // 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
  if (!product) {
    notFound();
  }

  return <div>{product} 제품 설명 페이지</div>;
}

export function generateStaticParams() {
  const products = getProducts();
  return products.map((product) => ({
    slug: product,
  }));
}
