import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function CountriesLoading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Countries Explorer</h1>
      <p className="text-zinc-500 mb-8">Dang tai danh sach quoc gia...</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="h-full animate-pulse">
            <CardHeader>
              <div className="h-28 w-full rounded-md bg-zinc-200" />
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="h-5 w-3/4 rounded bg-zinc-200" />
              <div className="h-4 w-1/3 rounded bg-zinc-200" />
              <div className="h-4 w-1/2 rounded bg-zinc-200" />
              <div className="h-3 w-1/4 rounded bg-zinc-200" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
