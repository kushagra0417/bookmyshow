import { Disclosure } from "@headlessui/react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
const PlaysFilters = (props) => {
  return (
    <Disclosure >
      {({ open }) => (
        <div className="bg-white px-2 py-4 shadow-lg">
          <Disclosure.Button className="py-2 flex items-center gap-3">
          {open ? <BiChevronUp/> : <BiChevronDown/>}  <span className={open ? "text-red-600":"text-gray-700"}>
            {props.title}
          </span>
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            <div className="flex items-center gap-3 flex-wrap">
            {
                props.tags.map((tag)=>(
                    <div className="border-2 border-gray-200 px-3 py-2">
                <span className="text-red-600">{tag}</span>
            </div>
                ))
            }
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

export default PlaysFilters;
