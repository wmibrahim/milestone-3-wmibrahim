export const loginUser = async (email: string, password: string) => {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/users"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const users = await res.json();

  const user = users.find(
    (u: any) => u.email === email
  );

  if (!user || password.length < 3) {
    throw new Error("Invalid credentials");
  }

  return user;
};
