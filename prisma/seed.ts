import { prisma } from "@/prisma";

async function seed(){
  await prisma.user.createMany ({
    data:[
      {
        name: "Lucas",
        email: "lucas@uorak.com"
      },
      {
        name: "Flavio",
        email: "flavio@uorak.com"
      },
      {
        name: "Wagner",
        email: "wagner@uorak.com"
      },
      {
        name: "Pedro",
        email: "pedro@uorak.com"
      },
    ]
  })
}

seed().then(()=>{
  console.log("Database seede!")
  prisma.$disconnect()
})