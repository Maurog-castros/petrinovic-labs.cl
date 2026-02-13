export const SHOPIFY_GRAPHQL_API_ENDPOINT = "/api/2024-01/graphql.json";

export async function shopifyFetch<T>({
    cache = "force-cache",
    headers,
    query,
    tags,
    variables,
}: {
    cache?: RequestCache;
    headers?: HeadersInit;
    query: string;
    tags?: string[];
    variables?: object;
}): Promise<{ status: number; body: T } | never> {
    const domain = process.env.SHOPIFY_STORE_DOMAIN;
    const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

    if (!domain || !key) {
        throw new Error("Missing Shopify environment variables");
    }

    const endpoint = `https://${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;

    try {
        const result = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Storefront-Access-Token": key,
                ...headers,
            },
            body: JSON.stringify({
                ...(query && { query }),
                ...(variables && { variables }),
            }),
            cache,
            ...(tags && { next: { tags } }),
        });

        const body = await result.json();

        if (body.errors) {
            throw body.errors[0];
        }

        return {
            status: result.status,
            body,
        };
    } catch (e) {
        throw {
            error: e,
            query,
        };
    }
}
