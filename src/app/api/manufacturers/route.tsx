import { NextRequest, NextResponse } from "next/server";
import { Database } from "../../../../database/db/database";
import { Manufacturer } from "../../../../database/models/manufacturer";

export function GET(request:NextRequest){
   let db = new Database();
   let manufacturers:Array<Manufacturer> = db.getManufacturers();
   return NextResponse.json(manufacturers);
}