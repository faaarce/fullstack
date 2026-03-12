import { Button } from "@fullstackapp/ui";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div>
			<div>Hello</div>
			<Button>Hello</Button>
		</div>
	);
}
