import "../../app.css"



export default function NotFound()
{
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-[#cdb4db] via-[#ffafcc] to-[#a2d2ff] flex items-center justify-center overflow-hidden relative">
                <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-[#ffc8dd]/30 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-[#bde0fe]/30 rounded-full blur-[120px]"></div>
                <div className="text-center z-10 px-6 max-w-lg">
                    <h1 className="text-[140px] md:text-[180px] font-black leading-none bg-gradient-to-r from-[#ffafcc] via-[#cdb4db] to-[#a2d2ff] bg-clip-text text-transparent tracking-tighter">
                        404
                    </h1>

                    <h2 className="text-4xl md:text-5xl font-semibold text-white mt-[-20px] mb-6 tracking-tight">
                        Page Not Found 
                    </h2>

                    <p className="text-xl text-white/90 max-w-md mx-auto mb-12 leading-relaxed">
                        You don't have permission to view this page.<br />
                        Please log in to continue.
                    </p>
                    <a
                        href="/home"
                        className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl transition-all duration-300 shadow-xl shadow-black/10 hover:scale-105 active:scale-95"
                    >
                        Go to Login Page
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>
        </>
    );
}