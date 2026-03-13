import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
} from "@fullstackapp/ui";
import { api } from "@fullstackapp/core";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    console.log({ email, password });
	const response = await api.auth.login.$post({
		json: {
			email, 
			password,
		},
	})
	const data = await response.json();
	console.log(data.message);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-78">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Sign in to continue</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="outline" className="w-full" onClick={handleLogin}>
            Login
          </Button>
        </CardContent>
        <CardFooter>
          <div>
            Don't have an account? <Link to="/register"> Register </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
