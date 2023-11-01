import { Product } from "../types/Product";

const selectCategories = (products: Product[]): string[] => {
  return products.reduce((acc: string[], product: Product) => {
    const category = product.category;
    return acc.includes(category) ? acc : [...acc, category];
  }, []);
};

export default selectCategories;
