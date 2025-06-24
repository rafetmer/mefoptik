"use client"

import { Button } from "@/components/ui/button"
import {
  Eye,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  Calendar,
  Target,
  Heart,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"

export default function Component() {
  const [scrollY, setScrollY] = useState(0)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const visionRef = useRef<HTMLElement>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    const sections = document.querySelectorAll("[data-animate]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // Glasses Icon Component using the new provided image
  const GlassesIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
    <Image src="/glasses-icon-new.jpg" alt="Glasses" width={28} height={28} className={className} />
  )

  // WhatsApp phone number
  const whatsappNumber = "+90 (362) 433 0303"
  const whatsappUrl = `https://wa.me/903624330303`

  // Brand placeholders for manual logo addition
  const brands = [
    { name: "PRADA", placeholder: "Prada logosu buraya gelecek" },
    { name: "MIU MIU", placeholder: "Miu Miu logosu buraya gelecek" },
    { name: "VERSACE", placeholder: "Versace logosu buraya gelecek" },
    { name: "DOLCE & GABBANA", placeholder: "Dolce & Gabbana logosu buraya gelecek" },
    { name: "Persol", placeholder: "Persol logosu buraya gelecek" },
    { name: "GIORGIO ARMANI", placeholder: "Giorgio Armani logosu buraya gelecek" },
    { name: "TIFFANY & Co.", placeholder: "Tiffany & Co. logosu buraya gelecek" },
    { name: "Ray-Ban", placeholder: "Ray-Ban logosu buraya gelecek" },
    { name: "OAKLEY", placeholder: "Oakley logosu buraya gelecek" },
    { name: "GUCCI", placeholder: "Gucci logosu buraya gelecek" },
    { name: "TOM FORD", placeholder: "Tom Ford logosu buraya gelecek" },
    { name: "POLICE", placeholder: "Police logosu buraya gelecek" },
    { name: "SILHOUETTE", placeholder: "Silhouette logosu buraya gelecek" },
    { name: "LINDBERG", placeholder: "Lindberg logosu buraya gelecek" },
    { name: "CARTIER", placeholder: "Cartier logosu buraya gelecek" },
    { name: "CHANEL", placeholder: "Chanel logosu buraya gelecek" },
  ]

  // FAQ data
  const faqData = [
    {
      id: 1,
      question: "Hangi gözlük çerçevesi yüz şeklime uygun?",
      answer:
        "Yuvarlak yüzler için köşeli çerçeveler, kare yüzler için yuvarlak çerçeveler idealdir. Oval yüz şekli çoğu çerçeve tipiyle uyumludur. Uzun yüzler için geniş çerçeveler tercih edilmelidir.",
    },
    {
      id: 2,
      question: "Gözlük camlarını ne sıklıkla değiştirmeliyim?",
      answer:
        "Gözlük camları genellikle 1-2 yılda bir kontrol edilmelidir. Çizikler, buğulanma veya görüş problemleri yaşıyorsanız daha erken değişim gerekebilir. Düzenli göz muayenesi yaptırmayı unutmayın.",
    },
    {
      id: 3,
      question: "Güneş gözlüğü seçerken nelere dikkat etmeliyim?",
      answer:
        "UV400 koruması olan, CE işaretli güneş gözlükleri tercih edin. Lens kalitesi, çerçeve dayanıklılığı ve yüz şeklinize uygunluk önemlidir. Polarize camlar parlamayı azaltır.",
    },
    {
      id: 4,
      question: "Gözlüklerimi nasıl temizlemeliyim?",
      answer:
        "Mikrofiber bez ve özel gözlük temizleme solüsyonu kullanın. Sıcak su ve sabunla da temizleyebilirsiniz. Kağıt havlu, gömlek gibi malzemeler kullanmaktan kaçının, çizik yapabilir.",
    },
    {
      id: 5,
      question: "Çocuklar için gözlük seçimi nasıl yapılır?",
      answer:
        "Çocuk gözlükleri esnek, dayanıklı malzemeden olmalı. Güvenlik camları tercih edin. Çerçeve burnuna ve kulaklarına rahat oturmalı. Düzenli kontroller önemlidir.",
    },
    {
      id: 6,
      question: "Bilgisayar gözlüğü gerçekten işe yarar mı?",
      answer:
        "Mavi ışık filtreli camlar göz yorgunluğunu azaltabilir. Özellikle uzun süre ekran başında çalışanlar için faydalıdır. Anti-reflektif kaplama da ekran parlamasını önler.",
    },
  ]

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id)
  }

  return (
    <div className="flex flex-col min-h-screen bg-mef-cream">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrollY > 50 ? "bg-mef-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-mef-brown to-mef-light rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-inner">
                    <GlassesIcon className="w-6 h-6 text-mef-brown" />
                  </div>
                </div>
              </div>
              <div>
                <h1
                  className={`text-2xl font-outfit font-medium transition-colors ${scrollY > 50 ? "text-white" : "text-mef-brown"}`}
                >
                  mef optik
                </h1>
              </div>
            </div>

            <div className="flex items-center space-x-8">
              <nav className="hidden md:flex space-x-8">
                <Link
                  href="#anasayfa"
                  className={`font-medium transition-colors ${scrollY > 50 ? "text-white hover:text-mef-light" : "text-mef-brown hover:text-mef-dark"}`}
                >
                  Ana Sayfa
                </Link>
                <Link
                  href="#hakkinda"
                  className={`font-medium transition-colors ${scrollY > 50 ? "text-white hover:text-mef-light" : "text-mef-brown hover:text-mef-dark"}`}
                >
                  Hakkında
                </Link>
                <Link
                  href="#vizyon"
                  className={`font-medium transition-colors ${scrollY > 50 ? "text-white hover:text-mef-light" : "text-mef-brown hover:text-mef-dark"}`}
                >
                  Vizyonumuz
                </Link>
                <Link
                  href="#markalar"
                  className={`font-medium transition-colors ${scrollY > 50 ? "text-white hover:text-mef-light" : "text-mef-brown hover:text-mef-dark"}`}
                >
                  Markalar
                </Link>
                <Link
                  href="#blog"
                  className={`font-medium transition-colors ${scrollY > 50 ? "text-white hover:text-mef-light" : "text-mef-brown hover:text-mef-dark"}`}
                >
                  S&C
                </Link>
                <Link
                  href="#iletisim"
                  className={`font-medium transition-colors ${scrollY > 50 ? "text-white hover:text-mef-light" : "text-mef-brown hover:text-mef-dark"}`}
                >
                  İletişim
                </Link>
              </nav>

              {/* Social Media Icons - Desktop */}
              <div className="hidden md:flex items-center space-x-3">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group relative">
                  <div className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    WhatsApp
                  </div>
                </a>

                <a
                  href="https://instagram.com/mefoptik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                    <Instagram className="h-5 w-5 text-white" />
                  </div>
                  <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Instagram
                  </div>
                </a>
              </div>

              {/* Mobile Menu Button - Positioned at the far right */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                  scrollY > 50 ? "text-white hover:bg-white/10" : "text-mef-brown hover:bg-mef-brown/10"
                } ${mobileMenuOpen ? "rotate-90" : "rotate-0"}`}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar with Animation */}
        <div
          className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
            mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black transition-opacity duration-300 ${
              mobileMenuOpen ? "bg-opacity-50" : "bg-opacity-0"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sidebar */}
          <div
            className={`fixed right-0 top-0 h-full w-80 bg-gradient-to-b from-white to-mef-cream shadow-2xl transform transition-transform duration-300 ease-out ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-mef-light/30 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-mef-brown to-mef-light rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-inner">
                    <GlassesIcon className="w-4 h-4 text-mef-brown" />
                  </div>
                </div>
                <span className="font-outfit font-semibold text-mef-brown text-lg">mef optik</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-mef-brown hover:text-mef-dark hover:bg-mef-light/20 rounded-lg transition-all duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-6">
              <div className="space-y-2">
                {[
                  { href: "#anasayfa", label: "Ana Sayfa", icon: "🏠" },
                  { href: "#hakkinda", label: "Hakkında", icon: "ℹ️" },
                  { href: "#vizyon", label: "Vizyonumuz", icon: "🎯" },
                  { href: "#markalar", label: "Markalar", icon: "🏷️" },
                  { href: "#blog", label: "S&C", icon: "❓" },
                  { href: "#iletisim", label: "İletişim", icon: "📞" },
                ].map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-4 py-4 px-4 rounded-xl text-mef-brown hover:text-mef-dark hover:bg-mef-light/20 font-medium transition-all duration-200 transform hover:scale-105 ${
                      mobileMenuOpen ? "animate-fade-in-right" : ""
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-lg">{item.label}</span>
                  </Link>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-mef-light/30">
                <div className="bg-gradient-to-r from-mef-light/20 to-mef-brown/10 rounded-2xl p-6">
                  <h3 className="font-semibold text-mef-dark mb-4 text-center">İletişim</h3>
                  <div className="space-y-3">
                    <a
                      href={`tel:${whatsappNumber}`}
                      className="flex items-center space-x-3 text-mef-brown hover:text-mef-dark transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      <span className="text-sm font-medium">{whatsappNumber}</span>
                    </a>
                    <a
                      href="mailto:mefoptik@gmail.com"
                      className="flex items-center space-x-3 text-mef-brown hover:text-mef-dark transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      <span className="text-sm font-medium">mefoptik@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-20">
        {/* Hero Section - Apple Style */}
        <section id="anasayfa" ref={heroRef} className="relative">
          {/* Sticky Background */}
          <div className="sticky top-0 h-screen flex items-center justify-center bg-gradient-to-br from-mef-dark to-mef-black overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div
                className="w-full h-full bg-gradient-to-r from-mef-brown/20 to-transparent transition-transform duration-1000 ease-out"
                style={{
                  transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0001})`,
                }}
              ></div>
            </div>

            <div className="container mx-auto px-4 text-center text-white relative z-10">
              <div className="space-y-8">
                <div
                  className="mb-8 transition-all duration-1000 ease-out"
                  style={{
                    transform: `translateY(${Math.min(30, scrollY * 0.03)}px)`,
                    opacity: Math.max(0.7, 1 - scrollY * 0.0005),
                  }}
                >
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <div className="flex flex-col items-center space-y-3">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <div className="w-20 h-20 bg-gradient-to-br from-mef-brown to-mef-light rounded-full flex items-center justify-center shadow-2xl">
                              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-inner">
                                <GlassesIcon className="w-10 h-10 text-mef-brown" />
                              </div>
                            </div>
                          </div>
                          <div className="text-left">
                            <div className="text-5xl font-outfit font-medium text-white">mef optik</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h2
                  className="text-6xl md:text-8xl font-bold mb-8 tracking-tight transition-all duration-1000 ease-out italic"
                  style={{
                    transform: `translateY(${Math.min(50, scrollY * 0.05)}px)`,
                    opacity: Math.max(0.5, 1 - scrollY * 0.0008),
                  }}
                >
                  &quot;Her Bakış Bir Hikayedir&quot;
                </h2>
                <p
                  className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90 transition-all duration-1000 ease-out"
                  style={{
                    transform: `translateY(${Math.min(30, scrollY * 0.03)}px)`,
                    opacity: Math.max(0.3, 0.9 - scrollY * 0.0006),
                  }}
                >
                  2021 yılından bu yana Samsun&apos;da göz sağlığı ve estetik alanda hizmet veriyoruz
                </p>
              </div>
            </div>
          </div>

          {/* Scrolling Content */}
          <div className="relative z-20 bg-mef-cream">
            <div className="min-h-screen flex items-center py-20" data-animate id="hero-content">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div
                      className={`space-y-8 transition-all duration-1000 ease-out ${
                        visibleSections.has("hero-content") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                    >
                      <div className="space-y-6">
                        <p className="text-xl text-mef-dark leading-relaxed">
                          MEF Optik, her müşterisinin dünyayı daha net ve daha şık görmesini sağlamayı hedefler.
                        </p>
                        <p className="text-lg text-mef-brown leading-relaxed">
                          Dünyaca ünlü markalar, yenilikçi cam teknolojileri ve kişiye özel çözümlerimizle her yaştan ve
                          tarzdan müşterimize hitap ediyoruz.
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                          <Button className="w-full sm:w-auto bg-mef-brown hover:bg-mef-light hover:text-mef-black text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300">
                            Randevu Al
                          </Button>
                        </a>
                        <a href="https://instagram.com/mefoptik" target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="outline"
                            className="w-full sm:w-auto border-2 border-mef-brown text-mef-brown hover:bg-mef-brown hover:text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
                          >
                            Ürünleri İncele
                          </Button>
                        </a>
                      </div>
                    </div>
                    <div
                      className={`relative transition-all duration-1000 ease-out delay-300 ${
                        visibleSections.has("hero-content") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                    >
                      <a
                        href="https://maps.google.com/?q=Saathane+Meydanı+Samsun"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block cursor-pointer group"
                      >
                        <Image
                          src="/saathane-meydani.jpg"
                          alt="Saathane Meydanı Şubesi"
                          width={600}
                          height={500}
                          className="rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-white/90 px-4 py-2 rounded-full">
                            <p className="text-mef-dark font-medium">📍 Saathane Meydanı Şubesi</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hakkında Section - Apple Style */}
        <section id="hakkinda" ref={aboutRef} className="relative">
          {/* Sticky Background */}
          <div className="sticky top-0 h-screen flex items-center justify-center bg-gradient-to-br from-mef-black via-mef-dark to-mef-black overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div
                className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out"
                style={{
                  transform: `scale(${1 + scrollY * 0.0002}) rotate(${scrollY * 0.02}deg)`,
                }}
              ></div>
            </div>

            <div className="container mx-auto px-4 text-center text-white relative z-10">
              <div className="space-y-8">
                <h2
                  className="text-6xl md:text-8xl font-bold mb-8 tracking-tight transition-all duration-1000 ease-out"
                  style={{
                    transform: `translateY(${Math.min(50, scrollY * 0.05)}px)`,
                    opacity: Math.max(0.5, 1 - scrollY * 0.0008),
                  }}
                >
                  Hakkımızda
                </h2>
                <p
                  className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90 transition-all duration-1000 ease-out italic"
                  style={{
                    transform: `translateY(${Math.min(30, scrollY * 0.03)}px)`,
                    opacity: Math.max(0.3, 0.9 - scrollY * 0.0006),
                  }}
                >
                  &quot;Her Bakış Bir Hikayedir…&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Scrolling Content */}
          <div className="relative z-20 bg-white">
            <div className="min-h-screen flex items-center py-20" data-animate id="hakkinda-content">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  {/* Ana Hikaye */}
                  <div
                    className={`mb-16 transition-all duration-1000 ease-out ${
                      visibleSections.has("hakkinda-content") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  >
                    <div className="bg-mef-light/20 rounded-2xl p-8 backdrop-blur-sm">
                      <p className="text-lg text-mef-dark leading-relaxed mb-6">
                        <strong className="text-mef-brown">MEF OPTİK</strong>, 2021 yılında Samsun Saathane Meydanı&apos;nda
                        kurucumuz <strong className="text-mef-brown">Optisyen Mehmet Fatih Mercimek</strong> tarafından
                        hayata geçirildi. Kurulduğu günden bu yana, yalnızca bir optik mağazası olmanın ötesine geçerek,
                        her müşterisinin dünyayı daha net ve daha şık görmesini sağlamayı hedefledi.
                      </p>
                      <p className="text-lg text-mef-dark leading-relaxed mb-6">
                        Samsun&apos;da ikinci şubemizle <strong className="text-mef-brown">56'lar bölgesinde</strong> de
                        hizmet vermenin gururunu yaşıyoruz. Her bir çerçeve, her bir cam, bizler için sadece bir ürün
                        değil; aynı zamanda bir yaşam tarzı, bir özgüven yansımasıdır.
                      </p>
                      <p className="text-lg text-mef-dark leading-relaxed">
                        MEF OPTİK olarak, göz sağlığına verdiğimiz önem kadar şıklığa da önem veriyoruz. Dünyaca ünlü
                        markalar, yenilikçi cam teknolojileri ve kişiye özel çözümlerimizle her yaştan ve tarzdan
                        müşterimize hitap ediyoruz.
                      </p>
                    </div>
                  </div>

                  {/* Özellikler Grid */}
                  <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div
                      className={`transition-all duration-1000 ease-out delay-300 ${
                        visibleSections.has("hakkinda-content")
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-10"
                      }`}
                    >
                      <div className="bg-mef-light/10 rounded-xl p-6 text-center group hover:bg-mef-light/20 transition-all duration-300">
                        <Calendar className="h-12 w-12 text-mef-brown mx-auto mb-4 group-hover:scale-110 transition-transform" />
                        <h4 className="font-semibold text-mef-dark text-lg mb-2">2021&apos;den Bu Yana</h4>
                        <p className="text-mef-brown">Samsun&apos;da güvenilir optik hizmeti</p>
                      </div>
                    </div>

                    <div
                      className={`transition-all duration-1000 ease-out delay-400 ${
                        visibleSections.has("hakkinda-content")
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-10"
                      }`}
                    >
                      <div className="bg-mef-light/10 rounded-xl p-6 text-center group hover:bg-mef-light/20 transition-all duration-300">
                        <MapPin className="h-12 w-12 text-mef-brown mx-auto mb-4 group-hover:scale-110 transition-transform" />
                        <h4 className="font-semibold text-mef-dark text-lg mb-2">2 Şube</h4>
                        <p className="text-mef-brown">Saathane Meydanı ve 56&apos;lar</p>
                      </div>
                    </div>

                    <div
                      className={`transition-all duration-1000 ease-out delay-500 ${
                        visibleSections.has("hakkinda-content")
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-10"
                      }`}
                    >
                      <div className="bg-mef-light/10 rounded-xl p-6 text-center group hover:bg-mef-light/20 transition-all duration-300">
                        <Eye className="h-12 w-12 text-mef-brown mx-auto mb-4 group-hover:scale-110 transition-transform" />
                        <h4 className="font-semibold text-mef-dark text-lg mb-2">Uzman Hizmet</h4>
                        <p className="text-mef-brown">Optisyen Mehmet Fatih Mercimek</p>
                      </div>
                    </div>
                  </div>

                  {/* Son Mesaj */}
                  <div
                    className={`text-center transition-all duration-1000 ease-out delay-600 ${
                      visibleSections.has("hakkinda-content") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  >
                    <div className="bg-gradient-to-r from-mef-brown/20 to-mef-light/20 rounded-2xl p-8">
                      <p className="text-xl text-mef-dark font-medium italic">
                        &quot;Bizim için her ziyaret bir tanışma, her bakış bir hikâyenin başlangıcıdır.&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vizyon Section - Apple Style */}
        <section id="vizyon" ref={visionRef} className="relative">
          {/* Sticky Background */}
          <div className="sticky top-0 h-screen flex items-center justify-center bg-gradient-to-br from-mef-black via-mef-dark to-mef-black overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div
                className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out"
                style={{
                  transform: `scale(${1 + scrollY * 0.0002}) rotate(${scrollY * 0.02}deg)`,
                }}
              ></div>
            </div>

            <div className="container mx-auto px-4 text-center text-white relative z-10">
              <div className="space-y-8">
                <h2
                  className="text-6xl md:text-8xl font-bold mb-8 tracking-tight transition-all duration-1000 ease-out"
                  style={{
                    transform: `translateY(${Math.min(50, scrollY * 0.05)}px)`,
                    opacity: Math.max(0.5, 1 - scrollY * 0.0008),
                  }}
                >
                  Vizyonumuz
                </h2>
                <p
                  className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90 transition-all duration-1000 ease-out"
                  style={{
                    transform: `translateY(${Math.min(30, scrollY * 0.03)}px)`,
                    opacity: Math.max(0.3, 0.9 - scrollY * 0.0006),
                  }}
                >
                  Geleceğe net bakmak isteyen herkesin aklına ilk gelen marka olmak
                </p>
              </div>
            </div>
          </div>

          {/* Scrolling Content */}
          <div className="relative z-20 bg-white">
            {/* Vizyon Card */}
            <div className="min-h-screen flex items-center py-20" data-animate id="vizyon-content">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div
                      className={`space-y-8 transition-all duration-1000 ease-out ${
                        visibleSections.has("vizyon-content") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                    >
                      <div className="inline-block">
                        <span className="text-mef-brown text-sm font-semibold tracking-wider uppercase bg-mef-light px-4 py-2 rounded-full">
                          Vizyonumuz
                        </span>
                      </div>
                      <h3 className="text-5xl md:text-6xl font-bold text-mef-dark leading-tight">
                        Türkiye&apos;nin
                        <span className="block text-mef-brown">Güvenilir Markası</span>
                      </h3>
                      <div className="space-y-6">
                        <p className="text-xl text-mef-dark leading-relaxed">
                          MEF OPTİK olarak vizyonumuz; göz sağlığı ve estetik alanında{" "}
                          <strong>Samsun&apos;un ötesine geçerek</strong>, Türkiye&apos;nin en güvenilir ve yenilikçi optik
                          markalarından biri olmak.
                        </p>
                        <p className="text-lg text-mef-brown leading-relaxed">
                          Müşteri memnuniyetini her şeyin önünde tutan bir anlayışla, teknolojiyi yakından takip ediyor,
                          kaliteyi ulaşılabilir kılmayı amaçlıyoruz.
                        </p>
                        <p className="text-lg text-mef-brown leading-relaxed">
                          Her bireyin kendi tarzını yansıtabileceği şık ve konforlu çözümler sunarak, yalnızca bir
                          gözlük değil, <strong>bir yaşam deneyimi</strong> vadediyoruz.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <Target className="h-6 w-6 text-mef-brown" />
                          <p className="text-mef-dark font-medium">Teknoloji odaklı yaklaşım</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Users className="h-6 w-6 text-mef-brown" />
                          <p className="text-mef-dark font-medium">Müşteri memnuniyeti önceliği</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Award className="h-6 w-6 text-mef-brown" />
                          <p className="text-mef-dark font-medium">Kaliteli ve ulaşılabilir çözümler</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`relative transition-all duration-1000 ease-out delay-300 ${
                        visibleSections.has("vizyon-content")
                          ? "opacity-100 translate-y-0 scale-100"
                          : "opacity-0 translate-y-10 scale-95"
                      }`}
                    >
                      <a
                        href="https://maps.google.com/?q=56lar+Samsun"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block cursor-pointer group"
                      >
                        <Image
                          src="/56lar-bolge.jpg"
                          alt="56'lar Şubesi"
                          width={600}
                          height={600}
                          className="rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-white/90 px-4 py-2 rounded-full">
                            <p className="text-mef-dark font-medium">📍 56'lar Şubesi</p>
                          </div>
                        </div>
                      </a>
                      <div className="absolute inset-0 bg-gradient-to-tl from-mef-brown/20 to-transparent rounded-2xl pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Misyon Card */}
            <div className="min-h-screen flex items-center py-20 bg-mef-black" data-animate id="misyon">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div
                      className={`relative order-2 lg:order-1 transition-all duration-1000 ease-out delay-300 ${
                        visibleSections.has("misyon")
                          ? "opacity-100 translate-y-0 scale-100"
                          : "opacity-0 translate-y-10 scale-95"
                      }`}
                    >
                      <Image
                        src="/placeholder.svg?height=600&width=600"
                        alt="Misyon görseli"
                        width={600}
                        height={600}
                        className="rounded-2xl shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-mef-brown/20 to-transparent rounded-2xl"></div>
                    </div>
                    <div
                      className={`space-y-8 order-1 lg:order-2 transition-all duration-1000 ease-out ${
                        visibleSections.has("misyon") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                    >
                      <div className="inline-block">
                        <span className="text-mef-brown text-sm font-semibold tracking-wider uppercase bg-white px-4 py-2 rounded-full shadow-md">
                          Misyonumuz
                        </span>
                      </div>
                      <div className="bg-mef-brown/10 rounded-2xl p-6 mb-6">
                        <p className="text-2xl font-bold text-mef-light italic text-center">
                          "Her insana net bir bakış, her bakışa özel bir dokunuş."
                        </p>
                      </div>
                      <h3 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                        Güvenilir
                        <span className="block text-mef-light">Optik Çözümler</span>
                      </h3>
                      <p className="text-xl text-mef-cream leading-relaxed">
                        MEF OPTİK olarak misyonumuz; göz sağlığı, estetik ve müşteri memnuniyeti odaklı bir yaklaşımla,
                        her bireyin ihtiyaçlarına uygun, güvenilir ve kaliteli optik çözümler sunmaktır.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                          <Heart className="h-6 w-6 text-mef-brown mt-1 flex-shrink-0" />
                          <p className="text-mef-light">
                            Gözlük ve lens seçiminden cam teknolojilerine kadar her aşamada danışmanlık temelli yaklaşım
                          </p>
                        </div>
                        <div className="flex items-start space-x-4">
                          <Eye className="h-6 w-6 text-mef-brown mt-1 flex-shrink-0" />
                          <p className="text-mef-light">En güncel ürünleri ve markaları erişilebilir kılmak</p>
                        </div>
                        <div className="flex items-start space-x-4">
                          <Award className="h-6 w-6 text-mef-brown mt-1 flex-shrink-0" />
                          <p className="text-mef-light">
                            Hem görüş kalitesini artırmak hem de tarzlarını yansıtabilmelerini sağlamak
                          </p>
                        </div>
                      </div>
                      <div className="bg-mef-dark/50 rounded-xl p-6 border-l-4 border-mef-brown">
                        <p className="text-mef-light italic font-medium">
                          "Göz sağlığına gösterdiğimiz özen, markamıza duyulan güvenin temelidir."
                        </p>
                      </div>
                      <p className="text-lg text-mef-cream leading-relaxed">
                        Her gün gelişen ve değişen dünyada, MEF OPTİK olarak müşterilerimizin dünyayı{" "}
                        <strong className="text-mef-light">daha net, daha şık ve daha sağlıklı</strong> görmesini
                        sağlamaya kararlıyız.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Markalar Section - Apple Style */}
        <section id="markalar" className="relative">
          {/* Sticky Background */}
          <div className="sticky top-0 h-screen flex items-center justify-center bg-gradient-to-br from-mef-dark via-mef-black to-mef-dark overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div
                className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out"
                style={{
                  transform: `scale(${1 + scrollY * 0.0002}) rotate(${scrollY * 0.02}deg)`,
                }}
              ></div>
            </div>

            <div className="container mx-auto px-4 text-center text-white relative z-10">
              <div className="space-y-8">
                <h2
                  className="text-6xl md:text-8xl font-bold mb-8 tracking-tight transition-all duration-1000 ease-out"
                  style={{
                    transform: `translateY(${Math.min(50, scrollY * 0.05)}px)`,
                    opacity: Math.max(0.5, 1 - scrollY * 0.0008),
                  }}
                >
                  Markalarımız
                </h2>
                <p
                  className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90 transition-all duration-1000 ease-out"
                  style={{
                    transform: `translateY(${Math.min(30, scrollY * 0.03)}px)`,
                    opacity: Math.max(0.3, 0.9 - scrollY * 0.0006),
                  }}
                >
                  Dünyaca ünlü markaların geniş koleksiyonları
                </p>
              </div>
            </div>
          </div>

          {/* Scrolling Content */}
          <div className="relative z-20 bg-mef-cream">
            <div className="min-h-screen flex items-center py-20" data-animate id="markalar-content">
              <div className="container mx-auto px-4">
                <div
                  className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center transition-all duration-1000 ease-out ${
                    visibleSections.has("markalar-content") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  {brands.map((brand, index) => (
                    <div key={index} className="text-center group">
                      <div className="bg-white rounded-lg p-6 mb-3 hover:bg-gradient-to-br hover:from-mef-cream hover:to-mef-light/20 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl shadow-lg border border-gray-100 h-32 flex flex-col items-center justify-center">
                        <div className="w-full h-20 bg-gray-100 rounded-md mb-2 flex items-center justify-center border-2 border-dashed border-gray-300">
                          <span className="text-xs text-gray-500 text-center px-2">Logo Alanı</span>
                        </div>
                        <p className="text-xs font-medium text-mef-brown">{brand.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Apple Style */}
        <section id="blog" className="relative">
          {/* Sticky Background */}
          <div className="sticky top-0 h-screen flex items-center justify-center bg-gradient-to-br from-mef-black via-mef-dark to-mef-black overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div
                className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out"
                style={{
                  transform: `scale(${1 + scrollY * 0.0002}) rotate(${scrollY * 0.02}deg)`,
                }}
              ></div>
            </div>

            <div className="container mx-auto px-4 text-center text-white relative z-10">
              <div className="space-y-8">
                <h2
                  className="text-6xl md:text-8xl font-bold mb-8 tracking-tight transition-all duration-1000 ease-out"
                  style={{
                    transform: `translateY(${Math.min(50, scrollY * 0.05)}px)`,
                    opacity: Math.max(0.5, 1 - scrollY * 0.0008),
                  }}
                >
                  Soru & Cevap
                </h2>
                <p
                  className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90 transition-all duration-1000 ease-out"
                  style={{
                    transform: `translateY(${Math.min(30, scrollY * 0.03)}px)`,
                    opacity: Math.max(0.3, 0.9 - scrollY * 0.0006),
                  }}
                >
                  Gözlük ve göz sağlığı hakkında merak ettikleriniz
                </p>
              </div>
            </div>
          </div>

          {/* Scrolling Content */}
          <div className="relative z-20 bg-white">
            <div className="min-h-screen flex items-center py-20" data-animate id="blog-content">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <div
                    className={`space-y-6 transition-all duration-1000 ease-out ${
                      visibleSections.has("blog-content") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  >
                    {faqData.map((faq, index) => (
                      <div
                        key={faq.id}
                        className={`bg-mef-light/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                          index % 2 === 0 ? "delay-100" : "delay-200"
                        }`}
                      >
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-mef-brown focus:ring-opacity-50"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="w-10 h-10 bg-mef-brown rounded-full flex items-center justify-center flex-shrink-0">
                                <HelpCircle className="h-5 w-5 text-white" />
                              </div>
                              <h3 className="text-lg font-semibold text-mef-dark group-hover:text-mef-brown transition-colors">
                                {faq.question}
                              </h3>
                            </div>
                            <div className="flex-shrink-0">
                              {expandedFaq === faq.id ? (
                                <ChevronUp className="h-5 w-5 text-mef-brown" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-mef-brown" />
                              )}
                            </div>
                          </div>
                        </button>
                        {expandedFaq === faq.id && (
                          <div className="px-6 pb-6">
                            <div className="pl-14">
                              <p className="text-mef-brown leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* İletişim Section - Apple Style */}
        <section id="iletisim" className="relative">
          {/* Sticky Background */}
          <div className="sticky top-0 h-screen flex items-center justify-center bg-gradient-to-br from-mef-brown via-amber-700 to-mef-brown overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div
                className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out"
                style={{
                  transform: `scale(${1 + scrollY * 0.0002}) rotate(${scrollY * 0.02}deg)`,
                }}
              ></div>
            </div>

            <div className="container mx-auto px-4 text-center text-white relative z-10">
              <div className="space-y-8">
                <h2
                  className="text-6xl md:text-8xl font-bold mb-8 tracking-tight transition-all duration-1000 ease-out"
                  style={{
                    transform: `translateY(${Math.min(50, scrollY * 0.05)}px)`,
                    opacity: Math.max(0.5, 1 - scrollY * 0.0008),
                  }}
                >
                  İletişim
                </h2>
                <p
                  className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90 transition-all duration-1000 ease-out"
                  style={{
                    transform: `translateY(${Math.min(30, scrollY * 0.03)}px)`,
                    opacity: Math.max(0.3, 0.9 - scrollY * 0.0006),
                  }}
                >
                  Samsun'da 2 şubemizle hizmetinizdeyiz
                </p>
              </div>
            </div>
          </div>

          {/* Scrolling Content */}
          <div className="relative z-20 bg-mef-cream">
            <div className="min-h-screen flex items-center py-20" data-animate id="iletisim-content">
              <div className="container mx-auto px-4">
                <div
                  className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ease-out ${
                    visibleSections.has("iletisim-content") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="text-center group">
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <Phone className="h-12 w-12 text-mef-brown mx-auto mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold mb-4 text-mef-dark">Telefon</h3>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(whatsappNumber)
                          alert("Telefon numarası kopyalandı!")
                        }}
                        className="text-mef-brown hover:text-mef-dark transition-colors cursor-pointer underline decoration-dotted font-medium"
                      >
                        {whatsappNumber}
                      </button>
                    </div>
                  </div>

                  <div className="text-center group">
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <Mail className="h-12 w-12 text-mef-brown mx-auto mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold mb-4 text-mef-dark">E-posta</h3>
                      <a
                        href="mailto:mefoptik@gmail.com"
                        className="text-mef-brown hover:text-mef-dark transition-colors underline decoration-dotted font-medium"
                      >
                        mefoptik@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="text-center group">
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <MapPin className="h-12 w-12 text-mef-brown mx-auto mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold mb-4 text-mef-dark">Şubelerimiz</h3>
                      <div className="space-y-2">
                        <a
                          href="https://maps.google.com/?q=Saathane+Meydanı+Samsun"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-mef-brown hover:text-mef-dark transition-colors underline decoration-dotted font-medium"
                        >
                          📍 Saathane Meydanı
                        </a>
                        <a
                          href="https://maps.google.com/?q=56lar+Samsun"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-mef-brown hover:text-mef-dark transition-colors underline decoration-dotted font-medium"
                        >
                          📍 56'lar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-mef-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-mef-brown to-mef-light rounded-full flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <GlassesIcon className="w-4 h-4 text-mef-brown" />
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <span className="text-xl font-outfit font-medium text-white">mef optik</span>
                </div>
              </div>
            </div>
            <p className="text-mef-light">© {new Date().getFullYear()} MEF Optik. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
