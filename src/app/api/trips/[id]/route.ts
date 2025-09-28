// import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import Trip from "@/models/Trip";

// export async function PUT(req: Request, { params }: { params: { id: string } }) {
//   await connectDB();
//   const { title, description, date } = await req.json();
//   const updated = await Trip.findByIdAndUpdate(params.id, { title, description, date }, { new: true });
//   return NextResponse.json(updated);
// }

// export async function DELETE(req: Request, { params }: { params: { id: string } }) {
//   await connectDB(); 
//   await Trip.findByIdAndDelete(params.id);
//   return NextResponse.json({ message: "Deleted successfully" });
// }

import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Trip from "@/models/Trip";

interface Params {
  params: { id: string };
}

export async function PUT(req: NextRequest, { params }: Params) {
  try {
    await connectDB();

    const { title, description, date } = await req.json();

    const updatedTrip = await Trip.findByIdAndUpdate(
      params.id,
      { title, description, date },
      { new: true }
    );

    if (!updatedTrip) {
      return NextResponse.json({ error: "Trip not found" }, { status: 404 });
    }

    return NextResponse.json(updatedTrip);
  } catch (err: unknown) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: Params) {
  try {
    await connectDB();

    const deletedTrip = await Trip.findByIdAndDelete(params.id);

    if (!deletedTrip) {
      return NextResponse.json({ error: "Trip not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Deleted successfully" });
  } catch (err: unknown) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
