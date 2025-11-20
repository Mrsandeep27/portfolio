export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden pt-20"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-green-400 text-lg mb-4 font-mono">// Hello World</p>
            <p className="text-gray-300 text-xl mb-4">Hey, 👋 I'm a Web Designer</p>
            <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              SANDEEP
              <br />
              <span className="text-green-400">PANDEY</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
              <div className="text-gray-300">
                <p>E: Sandeeppandey70391@gmail.com</p>
                <p>T: (+91) 7039185207</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-green-400 to-green-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center">
                    <img
                      src="/me.jpg"
                      alt="profile"
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="absolute right-8 bottom-20 lg:bottom-32">
          <div className="text-gray-400 text-sm transform rotate-90 origin-center">SCROLL</div>
        </div>
      </div>
    </section>
  )
}
