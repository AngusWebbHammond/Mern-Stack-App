type Props = {
  img: string;
  alt: string;
};

const Image = (props: Props) => {
  return (
    <img
      src={props.img}
      alt={props.alt}
      className="h-full aspect-square border-2 rounded-md border-slate-600"
    />
  );
};

export default Image;
