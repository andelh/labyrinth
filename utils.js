export const listFormatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});
export const priceFormatter = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "GBP",
});
export const getWebsiteRootUrl = () =>
  typeof window !== "undefined" ? window.location.origin : "";

export const formatPhoneForShopify = (phone) => {
  return phone.replace(" ", "").replace("-", "");
};
