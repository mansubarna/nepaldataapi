import data from '@/app/lib/nepalData';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const id = params.id;

  if (!id || isNaN(Number(id))) {
    return NextResponse.json(
      {
        success: false,
        message: 'The ID parameter is either missing or invalid. Please provide a valid numeric ID.',
      },
      { status: 400 }
    );
  }

  const locallevels = data.provinces
    .flatMap(p =>
      p.districts.flatMap(d =>
        d.locallevels.map(l => ({
          provinceId: p.provinceId,
          provinceName: p.name,
          districtId: d.districtId,
          districtName: d.name,
          id: l.localLevelId,
          name: l.localLevel,
          wards: l.wards.map(w => ({
            id: w.no,
            href: w.href,
          })),
          count: l.wards.length,
        }))
      )
    )
    .find(locallevel => locallevel.id === String(id));

  if (!locallevels) {
    return NextResponse.json(
      {
        success: false,
        message: `No local level found with the provided ID: ${id}. Please check the ID and try again.`,
      },
      { status: 404 }
    );
  }

  return NextResponse.json(
    {
      success: true,
      data: locallevels,
    },
    { status: 200 }
  );
}
