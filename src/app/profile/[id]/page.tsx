export default async function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="font-bold text-2xl">Profile</h1>
      <hr />
      <p>Profile </p>
      <span className=" bg-orange-400">id: {params.id}</span>
    </div>
  );
}
