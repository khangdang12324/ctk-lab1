import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Country } from "@/types/country";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CountryDetailPageProps {
  params: Promise<{ code: string }>;
}

export const revalidate = 3600;

async function getCountryByCode(code: string): Promise<Country> {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}?fields=name,cca3,flags,region,subregion,population,area,capital,languages,currencies,timezones`,
    {
      next: { revalidate },
    },
  );

  if (!res.ok) {
    notFound();
  }

  const data = (await res.json()) as Country | Country[];
  const country = Array.isArray(data) ? data[0] : data;

  if (!country || !country.name || !country.flags) {
    notFound();
  }

  return country;
}

function formatCurrencies(country: Country): string {
  if (!country.currencies) return "Khong co du lieu";

  return Object.values(country.currencies)
    .map((currency) =>
      currency.symbol ? `${currency.name} (${currency.symbol})` : currency.name,
    )
    .join(", ");
}

function formatLanguages(country: Country): string {
  if (!country.languages) return "Khong co du lieu";
  return Object.values(country.languages).join(", ");
}

export default async function CountryDetailPage({
  params,
}: CountryDetailPageProps) {
  const { code } = await params;
  const country = await getCountryByCode(code);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/countries"
        className="text-sm text-emerald-600 hover:underline"
      >
        ← Quay lai danh sach quoc gia
      </Link>

      <Card className="mt-4 overflow-hidden">
        <CardHeader>
          <Image
            src={country.flags.svg || country.flags.png}
            alt={country.flags.alt || `Flag of ${country.name.common}`}
            width={960}
            height={320}
            className="h-52 w-full rounded-md object-cover border"
          />
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <CardTitle className="text-3xl mb-1">
              {country.name.common}
            </CardTitle>
            <p className="text-zinc-500">{country.name.official}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="text-zinc-500">Ma quoc gia</p>
              <p className="font-medium">{country.cca3}</p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-zinc-500">Khu vuc</p>
              <p className="font-medium">{country.region}</p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-zinc-500">Tieu khu</p>
              <p className="font-medium">
                {country.subregion || "Khong co du lieu"}
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-zinc-500">Thu do</p>
              <p className="font-medium">
                {country.capital?.join(", ") || "Khong co du lieu"}
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-zinc-500">Dan so</p>
              <p className="font-medium">
                {country.population.toLocaleString("vi-VN")}
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-zinc-500">Dien tich</p>
              <p className="font-medium">
                {country.area
                  ? `${country.area.toLocaleString("vi-VN")} km2`
                  : "Khong co du lieu"}
              </p>
            </div>
            <div className="rounded-lg border p-4 md:col-span-2">
              <p className="text-zinc-500">Ngon ngu</p>
              <p className="font-medium">{formatLanguages(country)}</p>
            </div>
            <div className="rounded-lg border p-4 md:col-span-2">
              <p className="text-zinc-500">Tien te</p>
              <p className="font-medium">{formatCurrencies(country)}</p>
            </div>
            <div className="rounded-lg border p-4 md:col-span-2">
              <p className="text-zinc-500">Mui gio</p>
              <p className="font-medium">
                {country.timezones?.join(", ") || "Khong co du lieu"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
