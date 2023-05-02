export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/add-category",
    "/admin",
    "/products",
    "/add-product",
    "/edit-product",
    "/categories",
    "/edit-category",
    "/add-category",
    "/product/:path*",
    "/category/:path*",
  ],
};
