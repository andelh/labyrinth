import React from "react";

const ACTION_URL = "https://tt.wipayfinancial.com/plugins/payments/request";

const CurrencyMap = new Map();
// TTD
CurrencyMap.set("CAD-TTD", 5.43);
CurrencyMap.set("GBP-TTD", 9.56);
CurrencyMap.set("USD-TTD", 6.79);
CurrencyMap.set("BBD-TTD", 3.37);
CurrencyMap.set("JMD-TTD", 0.046);
CurrencyMap.set("TTD-TTD", 1);
// JMD
CurrencyMap.set("CAD-JMD", 117.43);
CurrencyMap.set("GBP-JMD", 204.0);
CurrencyMap.set("USD-JMD", 146.51);
CurrencyMap.set("BBD-JMD", 72.81);
CurrencyMap.set("TTD-JMD", 21.62);
CurrencyMap.set("JMD-JMD", 1);
// USD
CurrencyMap.set("CAD-USD", 0.8);
CurrencyMap.set("GBP-USD", 1.39);
CurrencyMap.set("BBD-USD", 0.5);
CurrencyMap.set("JMD-USD", 0.0068);
CurrencyMap.set("TTD-USD", 0.15);
CurrencyMap.set("USD-USD", 1);

const WiPayPaymentForm = React.forwardRef((props, ref) => {
  const {
    accountNumber,
    amount,
    cartCurrency,
    checkoutCurrency,
    countryCode,
    feeStructure,
    orderId,
    wipayEnv,
    id,
  } = props;

  const BASE_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://the-wify-plugin.vercel.app";
  const RETURN_URL = `${BASE_URL}/portal/verify/${id}`;
  const currencyConversionKey = `${cartCurrency}-${checkoutCurrency}`;
  const CONVERT_TO_CHECKOUT_CURRENCY = CurrencyMap.has(currencyConversionKey)
    ? CurrencyMap.get(currencyConversionKey)
    : 1;

  const total = (amount * CONVERT_TO_CHECKOUT_CURRENCY).toFixed(2);

  return (
    <form
      style={{ marginBottom: 0 }}
      action={ACTION_URL}
      method="post"
      id="wipayform"
      ref={ref}
    >
      <input
        type="hidden"
        id="account_number"
        name="account_number"
        value={accountNumber}
      />
      <input type="hidden" id="avs" name="avs" value="0" />
      <input
        type="hidden"
        id="country_code"
        name="country_code"
        value={countryCode}
      />
      <input
        type="hidden"
        id="currency"
        name="currency"
        value={checkoutCurrency}
      />
      <input type="hidden" id="data" name="data" value="" />
      <input
        type="hidden"
        id="environment"
        name="environment"
        value={wipayEnv}
      />
      <input
        type="hidden"
        id="fee_structure"
        name="fee_structure"
        value={feeStructure}
      />
      <input type="hidden" id="method" name="method" value="credit_card" />
      <input type="hidden" id="order_id" name="order_id" value={orderId} />
      <input type="hidden" id="origin" name="origin" value="the-wify-plugin" />
      <input
        type="hidden"
        id="response_url"
        name="response_url"
        value={RETURN_URL}
      />
      <input type="hidden" id="total" name="total" value={total} />
    </form>
  );
});

WiPayPaymentForm.displayName = "WiPayPaymentForm";

export default WiPayPaymentForm;
