# Deployment Guide: Petrinovic Health Labs

Your application is ready for production. Follow these steps to deploy to Vercel.

## 1. Prerequisites
Ensure you have accounts for:
- [Vercel](https://vercel.com)
- [Shopify Partner Account](https://partners.shopify.com) (to get Storefront Access Token)
- [MercadoPago Developers](https://www.mercadopago.cl/developers) (to get Public/Access tokens)

## 2. Environment Variables
You must configure the following variables in your Vercel Project Settings > Environment Variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_BASE_URL` | The URL of your deployed app | `https://phl.vercel.app` |
| `SHOPIFY_STORE_DOMAIN` | Your Shopify store URL | `phl-demo.myshopify.com` |
| `SHOPIFY_STOREFRONT_ACCESS_TOKEN` | Token with `unauthenticated_read_product_listings` scope | `dd4d4...` |
| `MP_ACCESS_TOKEN_TEST` | MercadoPago Test Access Token | `TEST-7890...` |
| `MP_PUBLIC_KEY_TEST` | MercadoPago Test Public Key | `TEST-bf34...` |
| `MP_ACCESS_TOKEN_PROD` | MercadoPago Prod Access Token | `APP_USR-7890...` |
| `MP_PUBLIC_KEY_PROD` | MercadoPago Prod Public Key | `APP_USR-bf34...` |
| `MP_WEBHOOK_SECRET` | Secret for validating Webhook HMAC | `h4sh...` |

## 3. Deployment Steps
1. Push your code to a Git repository (GitHub/GitLab).
2. Import the project in Vercel.
3. Add the environment variables listed above.
4. Click **Deploy**.

## 4. Post-Deployment Verification
- **Catalog**: Ensure products load from Shopify (or Mock Data if env vars are missing).
- **Checkout**: Test the "Pagar Ahora" button. It should redirect to MercadoPago.
- **Webhooks**: Configure MercadoPago to send webhooks to `https://your-domain.com/api/checkout/webhook` (if fully implemented).
