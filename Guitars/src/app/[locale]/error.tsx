"use client";
import Error from "@views/Error/Error";

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return <Error error={error} reset={reset} />;
}
