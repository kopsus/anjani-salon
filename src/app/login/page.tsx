"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import supabase from "@/lib/supabase/init";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage = () => {
  const form = useForm<LoginForm>({
    defaultValues: { email: "", password: "" },
  });
  const router = useRouter();
  const { isSubmitting } = form.formState;
  const [error, setError] = React.useState<string | null>(null);

  const onSubmit = async (user: LoginForm) => {
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: user.password,
    });

    if (error) {
      setError(error.message);
      return;
    }

    if (data.session) {
      await supabase.auth.setSession({
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token,
      });
    }

    const { data: sessionCheck } = await supabase.auth.getSession();

    if (sessionCheck.session) {
      router.push("/products");
    } else {
      setError("Gagal menyimpan sesi login");
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-neutral-100 dark:bg-neutral-800 px-4">
      <Card className="mx-auto lg:w-1/2 w-full max-w-sm border-slate-200">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Masukkan username dan password Anda untuk masuk ke akun Anda
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="example@gmail.com"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="masukkan Password"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button
                type="submit"
                className="w-full mt-3 bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
