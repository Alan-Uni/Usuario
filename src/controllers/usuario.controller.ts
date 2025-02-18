export const getlogin = (req: any, res: any) => { 
    res.status(200).json({message: "Inico de sesion"});
  }
  
export const getclose = (req: any, res: any) => {
    res.status(200).json({message: "Cierre de sesion"});
  }