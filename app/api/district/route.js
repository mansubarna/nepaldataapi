import data from '@/app/lib/nepalData';
import { NextResponse } from 'next/server';

export async function GET() {
  const districts = data.provinces.flatMap(province =>
    province.districts.map(district => ({
      id: district.districtId,
      name: district.name,
      localLevels: district.locallevels.length,
      provinceId: province.provinceId,
      provinceName: province.name,
    }))
  );

  return NextResponse.json(
    {
      status: true,
      data: districts,
      count: districts.length,
    },
    { status: 200, message: 'District data retrieved successfully' }
  );
}
