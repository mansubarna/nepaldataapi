import data from '@/app/lib/nepalData';
import { NextResponse } from 'next/server';

export async function GET(req) {
  const locallevels = data.provinces.flatMap(p =>
    p.districts.flatMap(d =>
      d.locallevels.map(l => ({
        districtId: d.districtId,
        districtName: d.name,
        id: l.localLevelId,
        name: l.localLevel,
        wards: l.wards.length,
      }))
    )
  );

  return NextResponse.json(
    {
      success: true,
      data: locallevels,
    },
    { status: 200 }
  );
}
