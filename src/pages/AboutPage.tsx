import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, Package } from "lucide-react";

/**
 * About Page - Trang giới thiệu về ứng dụng
 */
export function AboutPage() {
    return (
        <div className="space-y-8 max-w-4xl">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">About Command Builder</h1>
                <p className="text-muted-foreground mt-2">
                    Ứng dụng giúp bạn tạo nhanh các command line một cách dễ dàng
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>🎯 Mục Đích</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p>
                        Command Builder được xây dựng nhằm giúp developers tiết kiệm thời gian
                        khi làm việc với các công cụ command line. Thay vì phải nhớ cú pháp
                        phức tạp hoặc tra cứu documentation, bạn chỉ cần chọn template và
                        điền thông tin cần thiết.
                    </p>
                    <p>
                        Ứng dụng được thiết kế theo kiến trúc Feature-Sliced Design, giúp
                        dễ dàng mở rộng và bảo trì. Mỗi module (Git, Docker, v.v.) được
                        tổ chức độc lập và có thể thêm mới một cách đơn giản.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>🛠️ Công Nghệ Sử Dụng</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                            <Code className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                                <h4 className="font-semibold">React & TypeScript</h4>
                                <p className="text-sm text-muted-foreground">
                                    Framework chính với type safety hoàn toàn
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Zap className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                                <h4 className="font-semibold">React Router v7</h4>
                                <p className="text-sm text-muted-foreground">
                                    Routing với Data Routers pattern
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Package className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                                <h4 className="font-semibold">Shadcn/ui</h4>
                                <p className="text-sm text-muted-foreground">
                                    Beautiful UI components với TailwindCSS
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Code className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                                <h4 className="font-semibold">Feature-Sliced Design</h4>
                                <p className="text-sm text-muted-foreground">
                                    Kiến trúc module hóa và scalable
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>✨ Tính Năng</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                        <Badge>Dynamic Templates</Badge>
                        <span className="text-sm">Hệ thống template linh hoạt với placeholders</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Badge>Auto-routing</Badge>
                        <span className="text-sm">Tự động tạo routes từ feature modules</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Badge>One-click Copy</Badge>
                        <span className="text-sm">Copy command ngay lập tức</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Badge>Extensible</Badge>
                        <span className="text-sm">Dễ dàng thêm module và template mới</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
