import PageHeading from "@/app/components/ui/page-heading";

const Page = () => {
  return (
    <div>
      <PageHeading
        title="Product List"
        link="/product/create"
        buttonText="Add new product"
      />{" "}
    </div>
  );
};
export default Page;
