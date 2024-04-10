
import { Container } from "@/app/container";

export default async function App() {
  return (
    <div>{(
      <>
        <main className="flex min-h-screen flex-col items-center justify-between">
          <Container />
        </main>
      </>
    )
    }
    </div>
  )
}
