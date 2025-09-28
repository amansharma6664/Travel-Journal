import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Trip from "@/models/Trip";

export async function GET() {
  await connectDB();
  const trips = await Trip.find({});
  return NextResponse.json(trips);
}

export async function POST(req: Request) {
  await connectDB(); 
  const { title, description, date } = await req.json();
  const trip = await Trip.create({ title, description, date }); 
  return NextResponse.json(trip, { status: 201 });
}
