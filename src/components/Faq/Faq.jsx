import { useState } from "react";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
const Faq = ({ faq }) => {
  const [hideFaq, setHidefaq] = useState(false);

  return (
    <div
      className=" flex flex-col justify-center  text-center space-y-5 w-full"
      key={faq.id}
    >
      <div className="flex flex-row justify-between items-center gap-2 bg-slate-900 p-2">
        <h1 className="text-xl md:text-3xl text-left cursor-pointer w-full py-2 px-4 rounded-md">
          {faq.title}
        </h1>
        {hideFaq ? (
          <TiArrowSortedDown
            onClick={() => setHidefaq(!hideFaq)}
            className="inline cursor-pointer"
            size={20}
          />
        ) : (
          <TiArrowSortedUp
            className="inline cursor-pointer"
            onClick={() => setHidefaq(!hideFaq)}
            size={20}
          />
        )}
      </div>
      {hideFaq && (
        <div>
          <p className="text-base items-center">
            {hideFaq ? faq.description : faq.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default Faq;
