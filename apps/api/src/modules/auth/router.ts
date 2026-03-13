import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { LoginSchema, RegisterSchema } from "./schema";
import { prisma } from "../../utils/prisma";
import bcrypt from "bcryptjs";

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

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const newUser = await prisma.user.create({
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

    const isPasswordValid = await bcrypt.compare(body.password, existingUser.password)

    

    return c.json({ message: "Login Success!" });
  });
