export const access = "public";
export const methods = ["GET"];

export default async function(req,res){
  const member = req.member || null;
  res.json({
    signed_in: !!member,
    user: member ? {
      id: member.id,
      email: member.email || "",
      name: member.display_name || member.handle || "NDA Aspirant",
      avatar_url: member.avatar_url || ""
    } : null
  });
}