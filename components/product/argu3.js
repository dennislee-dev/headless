import { CheckCircleIcon, HomeIcon } from "@heroicons/react/solid";

function Argu3({argument1, argument2, argument3}) {
  return (
    <div className="flex space-x-5 py-2">
          <article className="space-y-2">
            <div className="flex space-x-2 items-center">
              <span>
                <CheckCircleIcon className=" w-6 text-general" />
              </span>
              <h2>{argument1}</h2>
            </div>

            <div className="flex space-x-2 items-center">
              <span>
                <CheckCircleIcon className=" w-6 text-general" />
              </span>
              <h2>{argument2}</h2>
            </div>

            <div className="flex space-x-2 items-center">
              <span>
                <CheckCircleIcon className=" w-6 text-general" />
              </span>
              <h2>{argument3}</h2>
            </div>
          </article>
          
        </div>
  );
}
export default Argu3;
