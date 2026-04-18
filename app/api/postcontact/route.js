import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "app/api/postcontact/contactdata.json");

// ✅ GET API
export async function GET() {
  const fileData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileData);

  return Response.json(data);
}

// ✅ POST API
export async function POST(request) {
  const body = await request.json();

  // Read existing data
  const fileData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileData);

  // Add new data
  data.push({
    id: Date.now(),
    ...body,
  });

  // Write back to file
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  return Response.json({
    message: "Data saved successfully ✅",
    data: body,
  });
}