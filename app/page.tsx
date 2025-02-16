

async function getMessage() {
  return "This is a static message fetched during build time.";
}

export default async function Page() {
  const message = await getMessage();

  return (
    <div>
      {/* <h1>Welcome to Next.js!</h1> */}
      <p>{message}</p>
    </div>
  );
}
