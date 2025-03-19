import createError from "http-errors";
import express, {
  Express,
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

import usersRouter from "./routes/users.js";
import habitsRouter from "./routes/habits.js";
import verifyToken from "./middleware/authMiddleware.js";

const port = 3010;
const app: Express = express();

const whitelist = ["http://localhost:3000", "http://localhost:3001"];

app.use(
  cors({
    origin: whitelist,
    credentials: true,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/users", usersRouter);
app.use("/habits", verifyToken, habitsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handling
const errorHandler: ErrorRequestHandler = (err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
};

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default app;
