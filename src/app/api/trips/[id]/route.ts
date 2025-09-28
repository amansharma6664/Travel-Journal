import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Trip from "@/models/Trip";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const { title, description, date } = await req.json();
  const updated = await Trip.findByIdAndUpdate(params.id, { title, description, date }, { new: true });
  return NextResponse.json(updated);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await connectDB(); 
  await Trip.findByIdAndDelete(params.id);
  return NextResponse.json({ message: "Deleted successfully" });
}
