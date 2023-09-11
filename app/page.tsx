
import { Container } from "@/components/container";
import { Nav } from "@/components/nav";

export default async function App() {
  return (
    <div>{(
      <>
        <nav className="flex  flex-col items-center justify-between p-24">
          <Nav />
        </nav>
        <main className="flex min-h-screen flex-col items-center justify-between">
          <Container />
        </main>
      </>
    )
    }
    </div>
  )
}
