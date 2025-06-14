"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";

export default function CreateAccount() {
  const [state, action] = useFormState(createAccount, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <Input
          minLength={3}
          maxLength={10}
          name="username"
          type="text"
          placeholder="Username"
          required
          error={state?.fieldErrors.username}
        />
        <Input
          name="email"
          minLength={4}
          type="email"
          placeholder="Email"
          error={state?.fieldErrors.email}
          required
        />
        <Input
          name="password"
          minLength={4}
          type="password"
          placeholder="Password"
          required
          error={state?.fieldErrors.password}
        />
        <Input
          name="confirmPassword"
          minLength={4}
          type="password"
          placeholder="Confirm Password"
          required
          error={state?.fieldErrors.confirmPassword}
        />
        <Button text="Create account" />
      </form>
      <SocialLogin />
    </div>
  );
}
