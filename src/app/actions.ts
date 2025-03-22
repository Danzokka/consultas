"use server"
import axios from "axios";
import { sessionOptions, SessionData, defaultSession, User } from "./lib";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";



export async function getSession() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  
  if(!session.isLoggedIn){
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
}

export async function createSession(user: User) {
  const session = await getSession();

  session.isLoggedIn = true;
  session.user = user;

  await session.save();
}

export async function logout() {
  const session = await getSession();

  session.destroy();
}