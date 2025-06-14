import Button from "@/components/button";
import Input from "@/components/input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { login } from "./actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function LogIn() {
  const [state, formAction] = useFormState(login, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form action={formAction} className="flex flex-col gap-3">
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          error={state?.fieldErrors.email}
        />
        <Input
          minLength={PASSWORD_MIN_LENGTH}
          name="password"
          type="password"
          placeholder="Password"
          required
          error={state?.fieldErrors.password}
        />
        <Button text="Log in with email and password." />
      </form>
      <SocialLogin />
    </div>
  );
}
