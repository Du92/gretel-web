import { HomeView } from "../components/PageViews";
import { Shell } from "../components/Shell";

export default function IndexPage() {
  return <Shell lang="es" pageKey="home"><HomeView lang="es" /></Shell>;
}
