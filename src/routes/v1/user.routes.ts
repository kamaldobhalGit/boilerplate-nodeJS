import { Request, Response, Router } from "express";
const userRouter = Router();

userRouter.get("/", (req: Request, res: Response) =>
  res.send("This is a user route")
);

export default userRouter;
