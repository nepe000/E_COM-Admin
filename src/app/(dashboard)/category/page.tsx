import { CategoryList } from "@/app/components/category/list";
import PageHeading from "@/app/components/ui/page-heading";

const Page = () => {
  return (
    <div>
      <PageHeading
        title="Category List"
        link="/category/create"
        buttonText="Add New Category"
      />
      <div className="mt-5">
        <CategoryList />
      </div>
    </div>
  );
};

export default Page;
