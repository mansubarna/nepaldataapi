import data from '@/app/lib/nepalData';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const district = data.provinces[0].districts.find(d => d.districtId === String(params.id));

  if (!district) {
    return NextResponse.json(
      { 
        status:false,
        message: `District with ID ${params.id} not found. Please check the ID and try again.`,
        districtId: params.id 
      },
      { status: 404 }
    );
  }

  const locallevels = district.locallevels.map(l => ({ id: l.localLevelId, name: l.localLevel }));
  const districtId = district.districtId;
  const districtName = district.name;

  return NextResponse.json(
    {
      status: true,
      districtId,
      districtName,
      locallevels,
      count: locallevels.length
    },
    { status: 200 }
  );
}
