import data from '@/app/lib/nepalData';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const { id } = params;

  const district = data.provinces
    .flatMap(province =>
      province.districts.map(district => ({
        id: district.districtId,
        name: district.name,
        provinceName: province.name,
        provinceId: province.id,
        locallevels: district.locallevels.map(l => ({
          id: l.localLevelId,
          name: l.localLevel,
          wards: l.wards.length,
        })),
        count: district.locallevels.length,
      }))
    )
    .find(district => district.id === String(id));

  if (!district) {
    return NextResponse.json(
      {
        status: false,
        message: `District with ID ${id} not found. Please verify the ID and ensure it exists in the dataset.`,
        districtId: id,
        suggestion: 'Check the list of available district IDs or contact support for assistance.',
      },
      { status: 404 }
    );
  }

  return NextResponse.json(
    {
      status: true,
      data: district,
    },
    { status: 200 }
  );
}
