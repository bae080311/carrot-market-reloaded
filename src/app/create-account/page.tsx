import FormBtn from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          name="username"
          type="text"
          placeholder="Username"
          required
          error={["input error"]}
        />
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          error={["input error"]}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          error={["input error"]}
        />
        <FormInput
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          required
          error={["input error"]}
        />
        <FormBtn text="Create account" loading={false} />
      </form>
      <SocialLogin />
    </div>
  );
}
