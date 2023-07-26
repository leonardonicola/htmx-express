import { Router } from "express"
const router = Router()

router.get("/", (req, res) => {
  res.send(`<h1 class="text-2xl font-black">Hello world!</h1>
  <p>This content you are seeing comes directly from the server and is presented by HTMX!</p>`)
})

router.get("/users", (req, res) => {
  res.send(`<ul class="list-disc">
  <li>John Doe</li>
  <li>Jane Smith</li>
  <li>Michael Johnson</li>
  <li>Emily Williams</li>
  <li>Robert Brown</li>
  <li>Susan Lee</li>
  <li>William Taylor</li>
  <li>Linda Clark</li>
  <li>David Martinez</li>
  <li>Sarah Scott</li>
</ul>`)
})

export default router
