import { Container } from "@/components/container"
export default async function App() {
    return (
        <div>
            {
                <>
                    <main className="flex flex-col items-center justify-between min-h-screen p-24">
                        <Container />
                    </main>
                </>
            }
        </div>
    )
}
