import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

/**
 * Root Error Page - Hiển thị lỗi cho root route
 */
export function RootError() {
  const error = useRouteError();

  let errorMessage = "An unexpected error occurred";
  let errorStatus = "Error";

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText || error.data?.message || errorMessage;
    errorStatus = `${error.status}`;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-muted/40">
      <Card className="max-w-md w-full">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-destructive" />
            <CardTitle>{errorStatus}</CardTitle>
          </div>
          <CardDescription>Something went wrong</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">{errorMessage}</p>
          <Button asChild>
            <Link to="/">Go Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
