export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <div className=" text-center">
        <h1 className=" text-3xl">About</h1>
      </div>
      {children}
    </div>
  );
}
