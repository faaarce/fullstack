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
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/register")({ component: App });

function App() {
	return (
		<div className="flex justify-center items-center h-screen">
			<Card className="w-[312px]">
				<CardHeader>
					<CardTitle>Register</CardTitle>
					<CardDescription>Create an account to continue</CardDescription>
				</CardHeader>
				<CardContent className="space-y-2">
					<Input placeholder="Name" />
					<Input placeholder="Email" />
					<Input placeholder="Password" />
					<Button variant="outline" className="w-full">
						Login
					</Button>
				</CardContent>
				<CardFooter>
					<div>
						Have an account? <Link to="/"> Sign in </Link>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}
