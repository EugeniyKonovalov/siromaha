import Profile from "@/components/profile";

const profilePage = ({ params }: { params: { username: string } }) => {
  return (
    <main>
      <Profile params={params} />
    </main>
  );
};

export default profilePage;
