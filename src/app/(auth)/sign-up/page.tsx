import Image from "next/image";
import photo from '/public/login-image.svg';
import logo from '/public/grocerymart-logo.svg';
import SignUpForm from "@/components/forms/sign-up-form";

const SignUpPage = () => {
  return (
    <div className="flex lg:mt-10 xl:mt-0">
      <div className="flex-[1] bg-[#FAFAFD] max-sm:hidden md:hidden lg:flex">
        <div className="flex flex-col gap-[49px] my-[25%] mx-auto items-center justify-center">
          <Image
            src={photo}
            alt="image"
          />
          <span className="text-[#1A162E] text-center font-bold text-lg font-font-gordita">The best of luxury brand values, high quality
            <br />
             products, and innovative services.
          </span>
        </div>
      </div>
      <div className="flex-[1px] bg-white ">
        <div className="my-[50px] xl:mx-[130px] md:mx-[150px] lg:mx-10">
         <div className="flex flex-col items-center justify-center gap-[50px]">
         <Image
          src={logo}
          alt="logo"
          />
          <div className="flex flex-col items-center gap-2.5">
            <span className="text-[30px] font-medium font-font-gordita">Sign Up</span>
            <span className="text-[#9E9DA8] text-[15px] font-medium font-font-gordita">Let’s create your account and Shop like a pro and save money.</span>
          </div>
         </div>
          <div className="mt-[60px] max-sm:mx-10">
            <SignUpForm/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage