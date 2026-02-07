import express from 'express'

import HomeRoutes from "./routes/home.route.js"
import AdminRoutes from "./routes/admin.route.js"
import UserRoutes from "./routes/user.route.js"

const app = express();

app.use("/", HomeRoutes)
app.use("/admin", AdminRoutes)
app.use("/user", UserRoutes)

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});