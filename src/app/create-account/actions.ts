"use server";

import { z } from "zod";

function checkUsername(username: string): boolean {
  return !username.includes("potato");
}

function checkPassword({
  password,
  confirmPassword,
}: {
  password: string;
  confirmPassword: string;
}): boolean {
  return password === confirmPassword;
}

const formSchema = z
  .object({
    username: z
      .string({
        required_error: "사용자 이름은 필수입니다",
        invalid_type_error: "사용자 이름은 문자열이어야 합니다",
      })
      .min(5, "너무 짧아")
      .max(10, "너무 길어")
      .refine(checkUsername, "custom error"),
    email: z.string().email(),
    password: z.string().min(10),
    confirmPassword: z.string().min(10),
  })
  .refine(checkPassword, {
    message: "비밀번호와 비밀번호 확인이 다릅니다",
    path: ["confirmPassword"],
  });

export async function createAccount(prevState: any, formdata: FormData) {
  const data = {
    username: formdata.get("username"),
    email: formdata.get("email"),
    password: formdata.get("password"),
    confirmPassword: formdata.get("confirmPassword"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) return result.error.flatten();
}
