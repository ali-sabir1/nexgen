import Link from "next/link";
import Divider from "./divider";
import { phone } from "../../../public/svgs/icons";

export default function LastDiv() {
  return (
    <div>
      <Divider bg="#38b6ff" color="white" />
      <div className="grid grid-cols-1 lg:grid-cols-2 px-5 py-10 lg:px-20 lg:py-7 bg-[#38b6ff] items-center justify-center">
        <div className="lg:inline-flex md:text-center md:px-20 lg:px-0 lg:text-left">
          <div className="lg:hidden grid items-center justify-center pb-4">
            <img
              src="/svgs/questions.svg"
              alt="Custom Icon"
              width="100"
              height="100"
            />
          </div>
          <img
            src="/svgs/questions.svg"
            alt="Custom Icon"
            width="75"
            height="75"
            className="hidden lg:block pt-1"
          />

          <span className="text-md lg:pl-7 lg:text-md font-semibold">
            If you have any additional questions, our friendly and knowledgeable
            customer service team will be able to help.
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 text-center lg:space-x-6 lg:pl-14">
          <div className="pt-14 lg:pt-5">
            <Link
              href="/reservation"
              className="text-lg md:text-xl lg:text-sm text-white font-semibold bg-black hover:bg-white hover:text-black rounded-xl px-6 py-4 lg:py-3 transition-all mt-1"
            >
              Get Free Consultation
            </Link>
          </div>
          <div className="pt-6 lg:pt-1.5">
            <Link
              href="tel:+19087588015"
              className="inline-flex text-lg md:text-xl lg:text-sm text-black font-semibold bg-white hover:bg-black hover:text-white rounded-xl px-6 py-4 lg:py-3 lg:px-10 transition-all mt-1"
            >
              <div>
                <span>{phone}</span>
              </div>
              <div>+1(908)758-8015</div>
            </Link>
          </div>
        </div>
      </div>
      <Divider bg="#051d40" color="#38b6ff" />
    </div>
  );
}
