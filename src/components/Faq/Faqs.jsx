import faq from "../../content/faq.json";
import Faq from "./Faq";
const Faqs = () => {
  return (
    <div className="w-full mt-16">
      <h1 className="text-2xl lg:text-4xl text-center p-2 mt-4">
        Frequently Ask Faqs
      </h1>
      <div className="flex flex-col justify-center items-center gap-3  p-2 w-full lg:w-[60%] mx-auto mt-16">
        {faq.map((faq) => {
          return <Faq faq={faq} key={faq.id} />;
        })}
      </div>
      <div className="mt-16 w-full flex flex-col justify-center items-center gap-2 space-y-4">
        <h1 className="text-center">
          Ready to Watch? Enter Your Email to create or restart your membership
        </h1>
        <div className="text-white flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
          <input
            className="px-8 py-4 shadow outline-white border-white "
            type="email"
            placeholder="Enter your email"
          />
          <button className="text-center px-5 py-4 shadow bg-red-500 text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
