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

export const Route = createFileRoute("/")({ component: App });

function App() {
  
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

	return (
		<div className="flex justify-center items-center h-screen">
			<Card className="w-78">
				<CardHeader>
					<CardTitle>Login</CardTitle>
					<CardDescription>Sign in to continue</CardDescription>
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
						Don't have an account? <Link to="/register"> Register </Link>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}
