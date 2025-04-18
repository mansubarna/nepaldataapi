import data from '@/app/lib/nepalData';
import { NextResponse } from 'next/server';

export function GET() {
  try {
    const provinces = data.provinces.map(p => ({
      id: p.id,
      name: p.name,
      districts: p.districts.length
    }));
    return NextResponse.json({
      success: true,
      message: 'Provinces fetched successfully',
      data: provinces,
      count: provinces.length
    }, {
      status: 200
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Failed to fetch provinces',
      error: error.message
    }, { status: 500 });
  }
}