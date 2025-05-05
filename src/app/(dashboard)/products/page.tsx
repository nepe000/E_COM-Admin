import { ProductList } from "@/app/components/product/list";
import PageHeading from "@/app/components/ui/page-heading";

const Page = () => {
  return (
    <div>
      <PageHeading
        title="Product List"
        link="/products/create"
        buttonText="Add new product"
      />{" "}
      <div>
        <ProductList />
      </div>
    </div>
  );
};
export default Page;
