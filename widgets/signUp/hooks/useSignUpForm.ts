import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { PASSWORD_REGEX } from "@/entities";
import { useSignUpMutation } from "@/shared/assets/api/auth/auth-api";
import { SignUpArgs } from "@/shared/assets/api/auth/types";
import {
  handleErrorResponse,
  validationErrer,
} from "@/shared/assets/helpers/handleErrorResponse";
import { useTranslation } from "@/shared/assets/hooks/useTranslation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const useSignUp = () => {
  const { t } = useTranslation();
  const {
    checkbox,
    confirm,
    formEmail,
    invalidPassword,
    passwordMax,
    passwordMin,
    username,
  } = t.signUp;

  const signUpSchema = z
    .object({
      agree: z.boolean(),
      confirm: z.string().min(6, confirm).max(20, confirm).trim(),
      email: z.string().min(1).email(formEmail).trim(),
      password: z
        .string()
        .min(6, passwordMin)
        .max(20, passwordMax)
        .trim()
        .regex(
          PASSWORD_REGEX,
          `${invalidPassword} 0-9, a-z, A-Z, ! " # $ % &
           ` + "' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _` { | } ~",
        ),
      userName: z.string().min(6, passwordMin).max(30, username).trim(),
    })
    .refine((value) => value.agree, {
      message: checkbox,
      path: ["agree"],
    })
    .refine((data) => data.password === data.confirm, {
      message: confirm,
      path: ["confirm"],
    });

  type SignUpFormFields = z.infer<typeof signUpSchema>;

  const defaultValues = {
    agree: false,
    confirm: "",
    email: "",
    password: "",
    userName: "",
  };

  const [open, setOpen] = useState(false);
  const [signUp, { isLoading }] = useSignUpMutation();
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    setError,
  } = useForm<SignUpFormFields>({
    defaultValues,
    mode: "onBlur",
    resolver: zodResolver(signUpSchema),
  });
  const signUpHandler = async (data: SignUpArgs) => {
    const signUpArgs = {
      email: data.email,
      password: data.password,
      userName: data.userName,
    };

    localStorage.setItem("email", data.email);

    try {
      const data = await signUp(signUpArgs).unwrap();

      setOpen(true);
    } catch (err: any) {
      const result = validationErrer(err);

      // if (result) {
      // }

      toast.error(err);
      handleErrorResponse(err);
    }
    reset(defaultValues);
  };

  const onOpenChangeHandler = () => {
    setOpen(false);
  };

  let email;

  if (typeof window !== "undefined") {
    email = localStorage.getItem("email");
  }

  return {
    control,
    email,
    errors,
    handleSubmit,
    isLoading,
    isValid,
    onOpenChangeHandler,
    open,
    signUpHandler,
    t,
  };
};
