import { shopifyFetch } from "../client";
import { Cart } from "../types";

const cartFragment = /* GraphQL */ `
  fragment cart on Cart {
    id
    checkoutUrl
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
      totalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
    }
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          cost {
            totalAmount {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              title
              selectedOptions {
                name
                value
              }
              product {
                title
                handle
              }
            }
          }
        }
      }
    }
    totalQuantity
  }
`;

const createCartMutation = /* GraphQL */ `
  mutation createCart($lineItems: [CartLineInput!]) {
    cartCreate(input: { lines: $lineItems }) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;

const addToCartMutation = /* GraphQL */ `
  mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;

const removeFromCartMutation = /* GraphQL */ `
  mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;

const updateCartMutation = /* GraphQL */ `
  mutation updateCart($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;

export async function createCart(): Promise<Cart> {
    const res = await shopifyFetch<{ cartCreate: { cart: Cart } }>({
        query: createCartMutation,
        variables: {},
        cache: "no-store",
    });

    return res.body.cartCreate.cart;
}

export async function addToCart(
    cartId: string,
    lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart> {
    const res = await shopifyFetch<{ cartLinesAdd: { cart: Cart } }>({
        query: addToCartMutation,
        variables: {
            cartId,
            lines,
        },
        cache: "no-store",
    });

    return res.body.cartLinesAdd.cart;
}

export async function removeFromCart(
    cartId: string,
    lineIds: string[]
): Promise<Cart> {
    const res = await shopifyFetch<{ cartLinesRemove: { cart: Cart } }>({
        query: removeFromCartMutation,
        variables: {
            cartId,
            lineIds,
        },
        cache: "no-store",
    });

    return res.body.cartLinesRemove.cart;
}

export async function updateCart(
    cartId: string,
    lines: { id: string; merchandiseId: string; quantity: number }[]
): Promise<Cart> {
    const res = await shopifyFetch<{ cartLinesUpdate: { cart: Cart } }>({
        query: updateCartMutation,
        variables: {
            cartId,
            lines,
        },
        cache: "no-store",
    });

    return res.body.cartLinesUpdate.cart;
}
