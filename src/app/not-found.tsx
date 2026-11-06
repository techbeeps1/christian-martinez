import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center py-16">
      <Container size="sm" className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-secondary">404 Error</p>
        <h1 className="mt-2 text-3xl font-normal text-primary sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-primary/80">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-8">
          <Link href="/">
            <Button variant="primary">Return home</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
