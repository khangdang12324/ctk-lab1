import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Giới thiệu</h1>
      <div className="space-y-4 text-gray-700">
        <Alert>
          <AlertTitle>Demo shadcn/ui</AlertTitle>
          <AlertDescription>
            Trang này đang sử dụng thêm 3 component mới: Alert, Tabs, và
            Accordion.
          </AlertDescription>
        </Alert>

        <div className="flex items-center gap-4 rounded-lg bg-gray-50 p-4">
          <Avatar className="h-14 w-14">
            <AvatarFallback className="text-lg font-semibold">K</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-gray-900">
              Đặng Nguyễn Phúc Khang
            </p>
            <p className="text-sm text-gray-500">
              Sinh viên CNTT - Đại học Đà Lạt
            </p>
          </div>
        </div>
        <p>
          Xin chào! Tôi là <strong>Đặng Nguyễn Phúc Khang</strong>, sinh viên
          năm 4 ngành Công nghệ Thông tin tại Đại học Đà Lạt.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Kỹ năng</h2>
        <Tabs defaultValue="frontend" className="w-full">
          <TabsList>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>
          <TabsContent value="frontend" className="mt-4">
            <ul className="list-disc list-inside space-y-2">
              <li>JavaScript / TypeScript</li>
              <li>React & Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </TabsContent>
          <TabsContent value="backend" className="mt-4">
            <ul className="list-disc list-inside space-y-2">
              <li>Node.js API</li>
              <li>SQL & PostgreSQL</li>
              <li>REST API Design</li>
            </ul>
          </TabsContent>
          <TabsContent value="tools" className="mt-4">
            <ul className="list-disc list-inside space-y-2">
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
            </ul>
          </TabsContent>
        </Tabs>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Học vấn</h2>
        <Accordion
          type="single"
          collapsible
          className="w-full rounded-lg bg-gray-50 px-4"
        >
          <AccordionItem value="education">
            <AccordionTrigger>Đại học Đà Lạt (2022 - 2026)</AccordionTrigger>
            <AccordionContent>
              Chương trình Cử nhân Công nghệ Thông tin, tập trung vào phát triển
              web hiện đại và kỹ năng xây dựng sản phẩm phần mềm.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="goals">
            <AccordionTrigger>Mục tiêu nghề nghiệp</AccordionTrigger>
            <AccordionContent>
              Trở thành Frontend Developer với thế mạnh React/Next.js và xây
              dựng sản phẩm có trải nghiệm người dùng tốt.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
