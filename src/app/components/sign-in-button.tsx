import { Button, Flex } from "@radix-ui/themes";

export async function SignInButton({ large }: { large?: boolean }) {
  // TODO determine login status from AuthKit
  const isAuthenticated = false;

  // TODO get AuthKit authorization URL
  const authorizationUrl = "#login";

  if (isAuthenticated) {
    return (
      <Flex gap="3">
        <form
          action={async () => {
            "use server";
            // TODO log the user out
          }}
        >
          <Button type="submit" size={large ? "3" : "2"}>
            Sign Out
          </Button>
        </form>
      </Flex>
    );
  }

  return (
    <Button asChild size={large ? "3" : "2"}>
      <a href={authorizationUrl}>Sign In {large && "with AuthKit"}</a>
    </Button>
  );
}
