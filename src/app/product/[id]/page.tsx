type Props = { params: { id: string } };

export function generateMetadata({ params: { id } }: Props) {
  return {
    title: id,
  };
}

export default function Product({ params: { id } }: Props) {
  return <p>hey we are here at {id}</p>;
}
