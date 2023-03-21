type Props = {
  params: {
    slug: string;
  };
};

export default function SlugPage({ params }: Props) {
  return <div>{params.slug} 페이지</div>;
}
