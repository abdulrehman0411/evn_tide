import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define the path to your invoice.json file
const jsonFilePath = path.join(process.cwd(), 'src/message.json');

export async function POST(req: NextRequest) {
  try {
    // Parse the JSON data from the request body
    const formData = await req.json();

    // Read the existing invoice.json file
    const fileContents = fs.readFileSync(jsonFilePath, 'utf-8');
    const jsonData = JSON.parse(fileContents);

    // Add the new form data to the json array
    jsonData.push(formData);

    // Write the updated JSON data back to invoice.json
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));

    return NextResponse.json({ message: 'Data added successfully!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update invoice.json' }, { status: 500 });
  }
}
