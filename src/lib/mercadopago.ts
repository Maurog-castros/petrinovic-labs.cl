import MercadoPagoConfig, { Preference } from "mercadopago";

// Select environment based on NODE_ENV or specific flag
const isProd = process.env.NODE_ENV === "production";

const accessToken = isProd
    ? process.env.MP_ACCESS_TOKEN_PROD
    : process.env.MP_ACCESS_TOKEN_TEST;

if (!accessToken) {
    console.warn("MercadoPago Access Token not found. Check environment variables.");
}

const client = new MercadoPagoConfig({
    accessToken: accessToken || "",
});

export const preference = new Preference(client);
export const mpClient = client;
