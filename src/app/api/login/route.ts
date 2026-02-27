import { NextResponse } from "next/server";

const VALID_USER = {
  username: "admin",
  password: "123456",
};

export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;

  if (username === VALID_USER.username && password === VALID_USER.password) {
    const token = "mock-jwt-token";

    const response = NextResponse.json({ message: "Login berhasil" });
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
  }

  return NextResponse.json({ message: "Username atau password salah" }, { status: 401 });
}