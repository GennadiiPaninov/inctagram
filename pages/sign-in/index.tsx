import { authActions } from "@/entities";
import {
  useLazyMeQuery,
  useLoginMutation,
} from "@/shared/assets/api/auth/auth-api";
import { LoginArgs } from "@/shared/assets/api/auth/types";
import { useAppDispatch } from "@/shared/assets/api/store";
import { Paths } from "@/shared/assets/constants/paths";
import { useTranslation } from "@/shared/assets/hooks/useTranslation";
import { HeadMeta } from "@/shared/components";
import { getLayout } from "@/shared/components/layout/baseLayout/BaseLayout";
import { SignInCard } from "@/widgets";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useRouter } from "next/router";

const SignIn = () => {
  const { t } = useTranslation();
  const { errors, title } = t.signIn;
  const [login] = useLoginMutation();
  const [getUser, {}] = useLazyMeQuery();

  const router = useRouter();
  const dispatch = useAppDispatch();

  const loginHandler = async (args: LoginArgs) => {
    try {
      const data = await login(args).unwrap();

      if (data) {
        const accessToken = data.accessToken;

        localStorage.setItem("accessToken", accessToken);

        dispatch(authActions.setEmail(args.email));
        const res = await getUser().unwrap();

        await router.push(`${Paths.PROFILE}/?id=${res?.userId!}`);
      }

      dispatch(authActions.setError(undefined));
    } catch (err: unknown) {
      const { status } = err as FetchBaseQueryError;
      const errorMessage =
        status === 401 ? errors.loginError : errors.unknownError;

      dispatch(authActions.setError(errorMessage));
    }
  };

  return (
    <>
      <HeadMeta title={title} />
      <SignInCard onSubmit={loginHandler} />
    </>
  );
};

SignIn.getLayout = getLayout;
export default SignIn;
