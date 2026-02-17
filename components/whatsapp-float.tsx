"use client"

export default function WhatsAppFloat() {
  const phoneNumber = "+254717388209"
  const message = "Hello! I'm interested in learning more about your printing and signage services."

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 z-50 group">
      {/* Animated Rings Background */}
      <div className="absolute inset-0 rounded-full">
        <div className="absolute inset-0 rounded-full border-2 border-green-400 opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-150 transition-all duration-500 animate-pulse"></div>
        <div className="absolute inset-0 rounded-full border-2 border-green-400/50 opacity-0 group-hover:opacity-80 scale-100 group-hover:scale-175 transition-all duration-700 delay-100 animate-pulse"></div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-green-500 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>

      {/* Main Button Container */}
      <button
        onClick={handleWhatsAppClick}
        className="group/btn relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 text-white shadow-2xl hover:shadow-green-500/70 transition-all duration-300 hover:scale-110 flex items-center justify-center overflow-hidden border border-green-300/30"
        aria-label="Contact us on WhatsApp"
      >
        {/* Top Light Gradient */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>

        {/* WhatsApp Icon SVG */}
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 relative z-10 group-hover/btn:scale-125 transition-transform duration-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-.359.182-.69.44-.99.747C5.3 8.531 4.84 10.93 5.614 13.6c.36 1.22.923 2.330 1.625 3.289l-1.996 5.286a.75.75 0 00.961.96l5.286-1.995c.964.708 2.077 1.264 3.297 1.623 2.67.775 5.231.315 7.101-1.288.444-.381.843-.795 1.188-1.231a9.875 9.875 0 00-3.064-15.281 9.872 9.872 0 00-5.752-1.729Z"/>
        </svg>
      </button>

      {/* Tooltip */}
      <div className="absolute bottom-20 right-0 sm:bottom-24 sm:right-0 bg-gradient-to-r from-slate-900 to-slate-800 text-white px-4 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg border border-slate-700">
        Message us on WhatsApp
        <div className="absolute top-full right-4 w-2 h-2 bg-slate-900 rotate-45"></div>
      </div>
    </div>
  )
}
