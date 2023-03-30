export const CLERK_PUBLISHABLE_KEY =
  "pk_test_ZGVhci1tYW50aXMtNDkuY2xlcmsuYWNjb3VudHMuZGV2JA";

if (CLERK_PUBLISHABLE_KEY === undefined) {
  throw new Error("CLERK_PUBLISHABLE_KEY is not defined");
}
