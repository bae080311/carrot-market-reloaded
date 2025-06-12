import FormBtn from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { handleForm } from "./actions";

export default function LogIn() {
  const [state, formAction] = useFormState(handleForm, { error: [] });
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form action={formAction} className="flex flex-col gap-3">
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          error={state.error ?? []}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          error={state.error ?? []}
        />
        <FormBtn text="Log in with email and password." />
      </form>
      <SocialLogin />
    </div>
  );
}
