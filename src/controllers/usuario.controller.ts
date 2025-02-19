

export const getclose = (req: any, res: any) => {
  const usuarios = [
    { id: 1, nombre: "julio cesar", email: "julio34@gmail.com" },
    { id: 2, nombre: "pedro pascal", email: "pedro56@gmail.com" },
    { id: 3, nombre: "emilio tercero", email: "emilio3@gmail.com" }
  ];
  
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(usuarios, null, 2));
};

