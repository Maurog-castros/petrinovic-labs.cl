import productFragment from "../fragments/product";
import { shopifyFetch } from "../client";
import { Connection, Product } from "../types";

export const getProductsQuery = /* GraphQL */ `
  query getProducts(
    $sortKey: ProductSortKeys
    $reverse: Boolean
    $query: String
  ) {
    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {
      edges {
        node {
          ...product
        }
      }
    }
  }
  ${productFragment}
`;

export const getProductQuery = /* GraphQL */ `
  query getProduct($handle: String!) {
    product(handle: $handle) {
      ...product
    }
  }
  ${productFragment}
`;

export async function getProducts({
    query,
    reverse,
    sortKey,
}: {
    query?: string;
    reverse?: boolean;
    sortKey?: string;
}): Promise<Product[]> {
    const res = await shopifyFetch<{ products: Connection<Product> }>({
        query: getProductsQuery,
        variables: {
            query,
            reverse,
            sortKey,
        },
    });

    return res.body.products.edges.map((edge) => edge.node);
}

export async function getProduct(handle: string): Promise<Product | undefined> {
    const res = await shopifyFetch<{ product: Product }>({
        query: getProductQuery,
        variables: {
            handle,
        },
    });

    return res.body.product;
}
