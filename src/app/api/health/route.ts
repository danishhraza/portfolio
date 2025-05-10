import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // You can add any health checks here, for example:
    // - Database connectivity check
    // - External service dependency checks
    // - Memory usage checks

    // For a simple health check:
    return NextResponse.json(
      { 
        status: 'ok', 
        uptime: process.uptime(),
        timestamp: new Date().toISOString() 
      }, 
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Health check failed' },
      { status: 500 }
    );
  }
}