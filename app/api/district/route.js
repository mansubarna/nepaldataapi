import data from '@/app/lib/nepalData';
import { NextResponse } from 'next/server';


export async function GET(req) {
  
  const district = data.provinces.flatMap(province => 
    province.districts.map(district => ({
      ...district,
      provinceId: province.provinceId
    }))
  );

  if (!district) {
    return NextResponse.json(
      { message: 'Districts not found'},
      { status: 404 }
    );
  }
  const districts = district.map(d => ({ 
    id: d.districtId, 
    name: d.name, 
    localLevels: d.locallevels.length, 
    provinceId: d.provinceId 
  }));

  return NextResponse.json(
    {
      districts,
      count: districts.length,
    },
    { status: 200, message: 'District data retrieved successfully' }
  );
}

