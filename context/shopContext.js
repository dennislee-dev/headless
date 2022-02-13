import { createContext, useState, useEffect } from "react";
import { createCheckout, updateCheckout } from "../lib/shopify";
const { base64encode, base64decode } = require("nodejs-base64");

const CartContext = createContext();

export default function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutId, setCheckoutId] = useState("");
  const [checkoutUrl, setCheckoutUrl] = useState("");
  const [checkifyprod1, setCheckifyprod1] = useState("");
  const [checkifyprod2, setCheckifyprod2] = useState("");
  const [checkifyprod3, setCheckifyprod3] = useState("");
  const [checkifyquantity1, setCheckifyquantity1] = useState("");
  const [checkifyquantity2, setCheckifyquantity2] = useState("");
  const [checkifyquantity3, setCheckifyquantity3] = useState("");
  const [link, setLink] = useState("");
  const [test, setTest] = useState(false);

  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    if (isInitialRender) {
      if (localStorage.checkout_id) {
        const cartObject = JSON.parse(localStorage.checkout_id);
        if (cartObject[0].id) {
          setCart([cartObject[0]]);
        } else if (cartObject[0].length > 0) {
          setCart(...[cartObject[0]]);
          //lab
          setCheckifyprod1(cartObject[0][0].id);
          setCheckifyquantity1(cartObject[0][0].variantQuantity);
          let prod1_decoded = base64decode(checkifyprod1);
          let prod1_reduced = prod1_decoded.substring(29, 43);

          let domain =
            "https://pay.checkify.pro/api/checkoutByItems?store=a29seTAz&items=";

          if (cartObject[0].length > 1) {
            setCheckifyprod2(cartObject[0][1].id);
            setCheckifyquantity2(cartObject[0][1].variantQuantity);
            let prod2_decoded = base64decode(checkifyprod2);
            let prod2_reduced = prod2_decoded.substring(29, 43);

            setLink(
              domain +
                ct[0][0].id +
                ":" +
                cartObject[0][0].variantQuantity +
                "," +
                prod2_reduced +
                ":" +
                cartObject[0][1].variantQuantity
            );
          } else if (cartObject[0].length > 2) {
            setCheckifyprod3(cartObject[0][2].id);
            setCheckifyquantity3(cartObject[0][2].variantQuantity);
            let prod3_decoded = base64decode(checkifyprod3);
            let prod3_reduced = prod3_decoded.substring(29, 43);

            setLink(
              domain +
                prod1_reduced +
                ":" +
                check +
                "," +
                prod2_reduced +
                ":" +
                checkifyprod2 +
                "," +
                prod3_reduced +
                ":" +
                checkifyprod3
            );
          } else {
            setLink(
              domain + prod1_reduced + ":" + cartObject[0][0].variantQuantity
            );
          }
        }

        setCheckoutId(cartObject[1].id);
        setCheckoutUrl(cartObject[1].webUrl);
      }
    }
    setIsInitialRender(false);
  }, [cart, isInitialRender]);

  async function addToCart(newItem) {
    setCartOpen(true);
    if (cart.length === 0) {
      setCart([newItem]);

      const checkout = await createCheckout(
        newItem.id,
        newItem.variantQuantity
      );

      setCheckoutId(checkout.id);
      setCheckoutUrl(checkout.webUrl);

      localStorage.setItem(
        "checkout_id",
        JSON.stringify([[newItem], checkout])
      );
    } else {
      let newCart = [];
      let added = false;

      cart.map((item) => {
        if (item.id === newItem.id) {
          item.variantQuantity++;
          newCart = [...cart];
          added = true;
        }
      });
      if (!added) {
        newCart = [...cart, newItem];
      }

      setCart(newCart);
      const newCheckout = await updateCheckout(checkoutId, newCart);
      localStorage.setItem(
        "checkout_id",
        JSON.stringify([newCart, newCheckout])
      );
    }

    //new lab
    const newCartObject = JSON.parse(localStorage.checkout_id);
    if (newCartObject[0].length > 0) {
      setCheckifyprod1(newCartObject[0][0].id);
      setCheckifyquantity1(newCartObject[0][0].variantQuantity);
    }
    if (newCartObject[0].length > 1) {
      setCheckifyprod2(newCartObject[0][1].id);
      setCheckifyquantity2(newCartObject[0][1].variantQuantity);
    }
    if (newCartObject[0].length > 2) {
      setCheckifyprod3(newCartObject[0][2].id);
      setCheckifyquantity3(newCartObject[0][2].variantQuantity);
    }

    setIsInitialRender(true);
  }

  async function removeCartItem(itemToRemove) {
    const updatedCart = cart.filter((item) => item.id !== itemToRemove);

    setCart(updatedCart);
    const newCheckout = await updateCheckout(checkoutId, updatedCart);

    localStorage.setItem(
      "checkout_id",
      JSON.stringify([updatedCart, newCheckout])
    );

    if (cart.length === 1) {
      setCartOpen(false);
    }

    // new lab
    const newCartObject = JSON.parse(localStorage.checkout_id);
    if (newCartObject[0].length > 2) {
      setCheckifyprod1(newCartObject[0][0].id);
      setCheckifyquantity1(newCartObject[0][0].variantQuantity);
      setCheckifyprod2(newCartObject[0][1].id);
      setCheckifyquantity2(newCartObject[0][1].variantQuantity);
      setCheckifyprod3(newCartObject[0][2].id);
      setCheckifyquantity3(newCartObject[0][2].variantQuantity);
    } else if (newCartObject[0].length > 1) {
      setCheckifyprod1(newCartObject[0][0].id);
      setCheckifyquantity1(newCartObject[0][0].variantQuantity);
      setCheckifyprod2(newCartObject[0][1].id);
      setCheckifyquantity2(newCartObject[0][1].variantQuantity);
      setCheckifyprod3("");
      setCheckifyquantity3("");
    } else if (newCartObject[0].length > 0) {
      setCheckifyprod1(newCartObject[0][0].id);
      setCheckifyquantity1(newCartObject[0][0].variantQuantity);
      setCheckifyprod2("");
      setCheckifyquantity2("");
      setCheckifyprod3("");
      setCheckifyquantity3("");
    } else {
      setCheckifyprod1("");
      setCheckifyquantity1("");
      setCheckifyprod2("");
      setCheckifyquantity2("");
      setCheckifyprod3("");
      setCheckifyquantity3("");
    }

    setIsInitialRender(true);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartOpen,
        setCartOpen,
        addToCart,
        checkoutUrl,
        removeCartItem,
        link,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

const ShopConsumer = CartContext.Consumer;

export { ShopConsumer, CartContext };
