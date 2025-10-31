import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home } from "lucide-react";

/**
 * Not Found Page - 404 Error Page
 */
export function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-3xl">404</CardTitle>
          <CardDescription>Page Not Found</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
          </p>
          <Button asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Về Trang Chủ
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
