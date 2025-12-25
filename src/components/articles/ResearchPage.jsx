
export default function Research({ name }) {
return (
    <div className="min-h-screen flex flex-col font-mont">
      <main className="flex-grow">
        <section className="py-12">
    <div className="ml-[2vw]">
      
      {/* Header section – SAME as Projects */}
      <div className="mb-[5vh] mt-[5vh] font-mont w-[90vw] mx-auto">
        <h1 className="text-[32px] mt-[4vh] mb-[2vh] font-bold">
          {name}
        </h1>

          {/* SAME CONTENT FRAME AS PROJECTS */}
          <div className="mb-[5vh] mt-[5vh] font-mont w-[90vw] mx-auto">
        <h3 className="text-[18px]">
          I write about stuff I learn, explore, and try out. No fluff—just me figuring
          out tech, AI, and research, and sharing it in a way that actually makes sense.
        </h3>
      </div>

            <h1 className="text-[32px] font-bold mb-4">{name}</h1>
      {/* Content list – SAME spacing behavior as Projects */}
      <div className="space-y-12">
        <BookList />
      </div>

            <p className="text-[18px] text-gray-700 mb-12 max-w-3xl">
              I write about stuff I learn, explore, and try out. No fluff—just me figuring
              out tech, AI, and research, and sharing it in a way that actually makes sense.
            </p>

            <BookList />
          </div>

        </section>
      </main>
</div>
)
}
