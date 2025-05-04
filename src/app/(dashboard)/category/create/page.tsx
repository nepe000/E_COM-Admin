import CreateCategory from "@/app/components/category/create";
import PageHeading from "@/app/components/ui/page-heading";

const Page = () => {
  return (
    <div>
      <PageHeading title="Category New Category" /> <CreateCategory />
    </div>
  );
};
export default Page;
