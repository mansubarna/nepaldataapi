import data from '@/app/lib/nepalData';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  console.log(params);  // Debugging line
  console.log('Data:', data.provinces);  // Log the data

  const province = data.provinces.find(p => p.id === String(params.id));

  return province
    ? NextResponse.json({
        success: true,
        data: {province: province.name, id: province.id, districts: province.districts.map(d => ({ id: d.districtId, name: d.name, localLevels: d.locallevels.length })), count: province.districts.length },
      })
    : NextResponse.json({
        success: false,
        message: `Province with ID ${params.id} not found. Please check the ID and try again.`,
        error: `Province ${params.id} not found`
      }, { status: 404 });
}
