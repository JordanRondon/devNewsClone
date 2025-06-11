export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      <p className="text-lg text-gray-600"> Cargando...</p>
    </div>
  );
}
