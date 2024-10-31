type Props = {
  description: string;
  title: string;
  imageLeft: boolean;
};

const DescriptionWithTitle = (props: Props) => {
  return (
    <div
      className={`flex flex-col gap-2 w-full ${
        props.imageLeft ? `` : `text-right`
      }`}
    >
      <h3 className="font-semibold text-2xl">{props.title}</h3>
      <p className="font-medium text-xl dark:text-gray-300">
        {props.description}
      </p>
    </div>
  );
};

export default DescriptionWithTitle;
