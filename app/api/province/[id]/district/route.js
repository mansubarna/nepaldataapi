import data from '@/app/lib/nepalData';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  console.log(params);  // Debugging line
  console.log('Data:', data.provinces);  // Log the data

  const province = data.provinces.find(p => p.id === String(params.id));

  if (!province) {
    return NextResponse.json(
      { error: `Province with ID ${params.id} not found. Please check the ID and try again.` },
      { status: 404 }
    );
  }

  const provincename = province.name;
  const provinceid = province.id;
  const districts = province.districts.map(d => ({
    id: d.districtId,
    name: d.name,
    localLevels: d.locallevels.length
  }));

  return NextResponse.json({
    message: `Province data retrieved successfully.`,
    province: provincename,
    id: provinceid,
    districts,
    districtCount: districts.length
  });
}
