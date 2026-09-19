import { db } from "hatchable";
export const access = "public";
export const methods = ["GET"];
export default async function(req,res){const papers=await db.query("SELECT id, year, session, subject, title, description, url FROM papers ORDER BY year DESC, subject ASC");const notes=await db.query("SELECT id, subject, title, content, mnemonic FROM notes ORDER BY subject, title");res.json({papers:papers.rows,notes:notes.rows});}