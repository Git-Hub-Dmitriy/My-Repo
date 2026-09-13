import getProductsWithGroups from "@services/internal/getProductsWithGroups";
import { ComponentDict } from "@interfaces/dictionary.types";
import ProductCarousel from "@views/Home/OurProducts/ProductCarousel/ProductCarousel";
import Card from "@components/Card/Card";

interface PropsFeaturedProducts {
  locale: string;
  groups: string;
  translate: ComponentDict<"buttons">;
}

export default async function FeaturedProducts(props: PropsFeaturedProducts) {
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
