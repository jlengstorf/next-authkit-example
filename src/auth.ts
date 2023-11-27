import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import WorkOS, { User } from "@workos-inc/node";
import { jwtVerify } from "jose";

// TODO Initialize the WorkOS client

export function getClientId() {
  const clientId = process.env.WORKOS_CLIENT_ID;

  if (!clientId) {
    throw new Error("WORKOS_CLIENT_ID is not set");
  }

  return clientId;
}

// TODO get the authorization URL for logging in and signing up with AuthKit

export function getJwtSecretKey() {
  const secret = process.env.JWT_SECRET_KEY;

  if (!secret) {
    throw new Error("JWT_SECRET_KEY is not set");
  }

  return new Uint8Array(Buffer.from(secret, "base64"));
}

// TODO verify that the JWT is valid

// TODO determine whether a user is authenticated and return user details if so

// TODO log the user out by deleting their token
