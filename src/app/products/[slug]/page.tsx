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

export default function SlugPage({ params }: Props) {
  if (params.slug === 'nothing') {
    notFound();
  }

  return <div>{params.slug} 페이지</div>;
}

export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map((product) => ({
    slug: product,
  }));
}
