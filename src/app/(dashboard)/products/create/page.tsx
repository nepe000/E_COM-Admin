import PageHeading from "@/app/components/ui/page-heading";
import CreateProduct from "@/app/components/product/create";

const Page = () => {
  return (
    <div>
      <PageHeading title="Create New Product" />

      <CreateProduct />
    </div>
  );
};

export default Page;
