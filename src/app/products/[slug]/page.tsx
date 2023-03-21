import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

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
