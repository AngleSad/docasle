"use client"

import Image from "next/image"
import type { TabId } from "@/app/page"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

interface HeaderProps {
  activeTab: TabId
  setActiveTab: (tab: TabId) => void
}

export function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [inQuienesSomos, setInQuienesSomos] = useState(false)

  const tabs = [
    { id: "inicio" as TabId, label: "Inicio" },
    { id: "quienes-somos", label: "Quiénes somos" },
    { id: "servicios" as TabId, label: "Servicios" },
    { id: "publico" as TabId, label: "Público objetivo" },
    { id: "cultura" as TabId, label: "Cultura y valores" },
    { id: "contacto" as TabId, label: "Contacto" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("quienes-somos")
      if (section && activeTab === "inicio") {
        const rect = section.getBoundingClientRect()
        const isVisible = rect.top <= 100 && rect.bottom >= 100
        setInQuienesSomos(isVisible)
      } else {
        setInQuienesSomos(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeTab])

  const handleNavClick = (tabId: string) => {
    if (tabId === "quienes-somos") {
      setActiveTab("inicio")
      setTimeout(() => {
        const section = document.getElementById("quienes-somos")
        if (section) {
          const headerOffset = 96
          const elementPosition = section.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }, 100)
    } else {
      setActiveTab(tabId as TabId)
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => setActiveTab("inicio")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Image src="/images/logo-docasle.png" alt="Docasle Logo" width={60} height={60} className="rounded-lg" />
            <div className="flex flex-col items-start">
              <span className="text-2xl font-bold text-primary">DOCASLE</span>
              <span className="text-xs text-muted-foreground">Creciendo con emociones sanas</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={
                  activeTab === tab.id && tab.id !== "quienes-somos"
                    ? "default"
                    : tab.id === "quienes-somos" && inQuienesSomos
                      ? "default"
                      : "ghost"
                }
                onClick={() => handleNavClick(tab.id)}
                className="text-sm"
              >
                {tab.label}
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-2">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={
                    activeTab === tab.id && tab.id !== "quienes-somos"
                      ? "default"
                      : tab.id === "quienes-somos" && inQuienesSomos
                        ? "default"
                        : "ghost"
                  }
                  onClick={() => handleNavClick(tab.id)}
                  className="w-full justify-start"
                >
                  {tab.label}
                </Button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
