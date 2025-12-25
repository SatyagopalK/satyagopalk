export default function Research({ name = 'Research' }) {
  return (
    <div className="min-h-screen flex flex-col font-mont">
      <main className="flex-grow">
        <section className="py-12">
          <div className="mx-auto w-[85vw] max-w-5xl">

            <h1 className="text-[32px] font-bold mb-4">{name}</h1>

            <p className="text-[18px] text-gray-700 mb-12 max-w-3xl">
              Test content rendering
            </p>

          </div>
        </section>
      </main>
    </div>
  )
}
