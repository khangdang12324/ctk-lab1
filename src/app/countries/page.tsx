import Link from "next/link";
import Image from "next/image";
import type { Country } from "@/types/country";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const revalidate = 3600;

async function getCountries(): Promise<Country[]> {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,cca3,flags,region,population",
    {
      next: { revalidate },
    },
  );

  if (!res.ok) {
    throw new Error("Khong the tai danh sach quoc gia");
  }

  const data = (await res.json()) as Country[];
  return data.sort((a, b) => a.name.common.localeCompare(b.name.common));
}

export default async function CountriesPage() {
  const countries = await getCountries();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Countries Explorer</h1>
      <p className="text-zinc-500 mb-8">
        Danh sach quoc gia duoc lay tu REST Countries API ({countries.length}{" "}
        ket qua)
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {countries.map((country) => (
          <Link
            key={country.cca3}
            href={`/countries/${country.cca3.toLowerCase()}`}
          >
            <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <Image
                  src={country.flags.svg || country.flags.png}
                  alt={country.flags.alt || `Flag of ${country.name.common}`}
                  width={480}
                  height={192}
                  className="h-28 w-full rounded-md object-cover border"
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <CardTitle className="text-lg leading-snug">
                  {country.name.common}
                </CardTitle>
                <Badge variant="secondary">{country.region}</Badge>
                <p className="text-sm text-zinc-600">
                  Dan so: {country.population.toLocaleString("vi-VN")}
                </p>
                <p className="text-xs text-zinc-400">
                  Ma quoc gia: {country.cca3}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
