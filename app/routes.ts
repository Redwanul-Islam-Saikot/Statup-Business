import {
  type RouteConfig,
  route,
  index,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("../layouts/MainLayout.tsx", [
    //route("about", "./about.tsx"),
    index("./routes/home.tsx"),
  ]),
] satisfies RouteConfig;
