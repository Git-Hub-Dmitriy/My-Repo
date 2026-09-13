import ProductCarousel from "@views/Home/OurProducts/ProductCarousel/ProductCarousel";
import Card from "@components/Card/Card";
import getProductsWithGroups from "@services/internal/getProductsWithGroups";
import { ComponentDict } from "@interfaces/dictionary.types";

interface PropsLatestProducts {
  locale: string;
  groups: string;
  translate: ComponentDict<"buttons">;
}

export default async function LatestProducts(props: PropsLatestProducts) {
  const products = await getProductsWithGroups({
    groups: props.groups,
    locale: props.locale,
  });

  return (
    <ProductCarousel>
      {products.map((product) => (
        <Card
          dict={props.translate.btnAddCart}
          key={product.id}
          item={product}
        />
      ))}
    </ProductCarousel>
  );
}
