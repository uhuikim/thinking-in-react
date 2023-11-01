import { Product } from "../types/Product";

// 추상화 하면 이렇게 짤 수 있는 것 같다!! 타입스크립트 공부해보기
// export default function select<T1 extends object, T2>(
//   items: T1[],
//   field: string,
//   value: T2,
// ): T1[] {
//   return items.filter((item) => Reflect.get(item, field) === value);
// }

export default function selectProducts(
  items: Product[],
  category: string
): Product[] {
  return items.filter((item) => item.category === category);
}
