import { cookies } from 'next/headers';
import NotFound  from '../Gcomponent/NotFound';
import "../app.css";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  if (!token)
    return (<><NotFound/></>)

  return (
    <div className="min-h-screen bg-gradient-to-br  from-[#cde0ff] via-[#e0f0ff] to-[#f8e1f0] text-gray-900 flex items-center justify-center p-6">

    </div>
  );
}