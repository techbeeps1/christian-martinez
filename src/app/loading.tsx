import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center py-16" aria-label="Loading page content">
      <Container size="sm" className="flex flex-col items-center justify-center gap-4">
        <div
          className="h-8 w-8 animate-spin rounded-full border-4 border-neutral-300 border-t-neutral-900 dark:border-neutral-700 dark:border-t-neutral-100"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </Container>
    </div>
  );
}

