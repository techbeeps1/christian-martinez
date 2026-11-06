"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center py-16">
      <Container size="sm" className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Something went wrong</p>
        <h1 className="mt-2 text-3xl font-normal text-primary sm:text-4xl">
          Unexpected Error
        </h1>
        <p className="mt-4 text-base text-primary/80">
          An error occurred while loading this page. Please try again.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button variant="primary" onClick={() => reset()}>
            Try again
          </Button>
        </div>
      </Container>
    </div>
  );
}
