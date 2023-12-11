import Footer from "../components/common/Footer";
import CartSummary from "./CartSummary";
import CartTopSection from "./CartTopSection";

export const metadata = {
  title: "cart",
  description: "...choose your food",
};

const Cart = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-8 mb-24">
         <div className="w-full rounded-lg shadow-xl sm:max-w-md p-6">
            <CartTopSection/>

            <div className="flex flex-col space-y-4 border-t">
               <CartSummary/>
            </div>
         </div>
      </div>
      <Footer/>
   </>
  );
};

export default Cart;
