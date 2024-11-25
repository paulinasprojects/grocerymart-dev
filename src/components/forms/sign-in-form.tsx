"use client";

import { z } from "zod";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signInSchema} from "@/lib/schemas";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";


const SignInForm = () => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    console.log(values);
    form.reset();
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-[30px]">
          <FormField
              name="email"
              control={form.control}
              render={({field}) => (
                <FormItem>
                  <FormControl>
                      <Input type="text" {...field} className="w-[460px] h-[50px] max-sm:w-[350px] rounded-[8px] placeholder:text-lg placeholder:text-[#D2D1D6] placeholder:font-font-gordita" placeholder="Email"/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({field}) => (
                <FormItem>
                  <FormControl>
                      <Input type="password" {...field} className="w-[460px]  max-sm:w-[350px] h-[50px] rounded-[8px] placeholder:text-lg placeholder:text-[#D2D1D6] placeholder:font-font-gordita" placeholder="Password"/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
          </div>
          <div className="mt-[50px] flex flex-col gap-[30px]">
            <button className="w-full max-sm:w-[350px] bg-[#FFB700] hover:bg-[#e5a500] hover:transition p-2 text-[#1A162E] rounded-[10px] font-medium text-lg font-font-gordita" type="submit">Sign In</button>
            <button className="w-full max-sm:w-[350px] border-[1px] border-[#D2D1D6] hover:bg-[#f8f8fb] e p-2 rounded-[10px] flex items-center justify-center gap-[13px] font-medium text-lg font-font-gordita text-[#1A162E]">
              <FaGoogle/>
              Sign in with Google
            </button>
          </div>
          <div className="mt-[120px] flex items-center justify-center gap-2.5">
            <span className="font-normal font-font-gordita text-lg text-[#9E9DA8]">Don&apos;t have an account yet?</span>
            <Link href="/sign-up" className="hover:underline text-lg font-font-gordita font-medium text-[#0071DC]">Sign up</Link>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default SignInForm