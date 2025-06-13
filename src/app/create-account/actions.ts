"use server";

import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(5).max(10),
  email: z.string().email(),
  password: z.string().min(10),
  confirmPassword: z.string().min(10),
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
