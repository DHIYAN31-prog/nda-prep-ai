export const access="public";
export const methods=["GET"];
export default async function(req,res){
  res.json({plans:[
    {id:"monthly",name:"NDA Prep Pro Monthly",price_inr:149,period:"month",benefits:["All topics","All videos","All mock tests","Ad-free","Offline downloads","Priority AI assistance"]},
    {id:"quarterly",name:"NDA Prep Pro Quarterly",price_inr:349,period:"3 months",benefits:["Everything in Pro","Better value for longer preparation","Priority AI assistance"]},
    {id:"yearly",name:"NDA Prep Pro Yearly",price_inr:799,period:"year",benefits:["Everything in Pro","Best long-term value","Priority AI assistance"]}
  ],billing:"Google Play Billing is required for Android purchase verification; these are the product definitions used by the app UI."});
}