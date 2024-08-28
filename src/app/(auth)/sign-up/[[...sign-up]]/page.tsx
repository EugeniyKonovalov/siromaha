import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <main className="flex justify-center pt-8 w-full h-[calc(100vh-96px)]">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
