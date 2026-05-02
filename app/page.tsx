export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          💍 Wedding Uploader App
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Share your wedding memories effortlessly
        </p>
        
        <div className="space-y-4">
          <a
            href="/admin/login"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Admin Login
          </a>
          
          <p className="text-gray-400">
            Guests: Scan QR code at your event to upload
          </p>
        </div>
      </div>
    </main>
  );
}