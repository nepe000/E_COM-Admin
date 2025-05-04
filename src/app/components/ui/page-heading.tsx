import Link from "next/link";

interface IProps {
  title: string;
  link?: string;
  buttonText?: string;
}

const PageHeading: React.FC<IProps> = ({ title, link, buttonText }) => {
  return (
    <div className="flex w-full items-center justify-between mb-6">
      <h1 className="font-bold text-2xl">{title}</h1>
      {buttonText && (
        <Link href={link ?? "/"}>
          <button className="cursor-pointer rounded-md font-bold tracking-wider px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors">
            {buttonText}
          </button>
        </Link>
      )}
    </div>
  );
};

export default PageHeading;
