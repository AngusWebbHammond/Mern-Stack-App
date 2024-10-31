import DescriptionWithTitle from "../DescriptionWithTitle";
import Image from "../Image";

type Props = {
  image: string;
  title: string;
  altText: string;
  description: string;
  imageLeft: boolean;
};

const HomeView = (props: Props) => {
  return (
    <div className="h-full">
      {props.imageLeft ? (
        <div className="flex flex-row gap-5 h-full">
          <Image img={props.image} alt={props.altText} />
          <DescriptionWithTitle
            description={props.description}
            title={props.title}
            imageLeft={props.imageLeft}
          />
        </div>
      ) : (
        <div className="flex flex-row gap-5 h-full justify-end">
          <DescriptionWithTitle
            description={props.description}
            title={props.title}
            imageLeft={props.imageLeft}
          />
          <Image img={props.image} alt={props.altText} />
        </div>
      )}
    </div>
  );
};

export default HomeView;
