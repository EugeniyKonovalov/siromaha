import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className="flex justify-center pt-8 w-full h-[calc(100vh-96px)]">
      <SignIn />
    </main>
  );
};

export default SignInPage;
