import { cookies } from 'next/headers';
// import { redirect } from 'next/navigation';
import "../app.css"
export default async function DashboardPage()
{
  
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-950 to-fuchsia-950 flex items-center justify-center overflow-hidden relative">
        {/* Decorative glows */}
        <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="text-center z-10 px-6">
            <h1 className="text-[180px] md:text-[220px] font-black leading-none bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            403
            </h1>
            
            <h2 className="text-4xl md:text-5xl font-semibold text-pink-200 mt-[-30px] mb-6">
            Access Forbidden
            </h2>
            
            <p className="text-xl text-purple-300 max-w-md mx-auto mb-12">
            You don't have permission to view this page.<br />
            Please log in to continue.
            </p>

            <a 
            href="/"
            className="inline-block px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-pink-500/50"
            >
            Go to Login Page
            </a>
        </div>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Dashboard</h1>
        <p className="text-xl text-gray-400">You are successfully logged in! 🎉</p>
        
        <div className="mt-10">
          <p className="text-gray-500">This page is protected.</p>
          <p className="text-gray-500">Only logged in users can see this.</p>
        </div>
      </div>
    </div>
  );
}