import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/prisma/client'; // Assuming you've placed the global prisma in a `lib/prisma.ts` file

// Schema validation for the request body
const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1).max(255),
});

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status: 400 });
    }

    // Create a new issue using Prisma
    const newIssue = await prisma.issue.create({
      data: {
        title: body.title,
        description: body.description,
      },
    });

    // Return the newly created issue
    return NextResponse.json(newIssue, { status: 201 });
  } catch (error) {
    console.error('Error creating issue:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
