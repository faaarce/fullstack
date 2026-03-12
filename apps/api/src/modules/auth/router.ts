import { zValidator } from "@hono/zod-validator";
import bcrypt from "bcryptjs";
import { Hono } from "hono";
import { prisma } from "../../utils/prisma";
import { RegisterSchema } from "./schema";

export const authRouter = new Hono()
	.post("/register", zValidator("json", RegisterSchema), async (c) => {
		const body = c.req.valid("json");

		const existingUser = await prisma.user.findUnique({
			where: {
				email: body.email,
			},
		});

		if (existingUser) {
			throw new HTTPException(409, { message: "User already registered" });
		}

		const _hashedPassword = await bcrypt.hash(body.password, 10);

		const _newUser = await prisma.user.create({
			data: {
				name: body.name,
				email: body.email,
				password: body.password,
			},
		});

		return c.json({ message: "Register success!" });
	})
	.post("/login", async (c) => {
		const body = c.req.valid("json");

		const existingUser = await prisma.user.findUnique({
			where: {
				email: body.email,
			},
		});

		if (!existingUser) {
			throw new HTTPException(404, { message: "User not found" });
		}

		if (!existingUser.password) {
			throw new HTTPException(400, {
				message: "User has no password - You might use social media login",
			});
		}

		return c.json({ message: "Login Success!" });
	});
