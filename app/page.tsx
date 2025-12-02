"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeTab } from "@/components/tabs/home-tab"
import { ServiciosTab } from "@/components/tabs/servicios-tab"
import { PublicoTab } from "@/components/tabs/publico-tab"
import { CulturaTab } from "@/components/tabs/cultura-tab"
import { ContactoTab } from "@/components/tabs/contacto-tab"

export type TabId = "inicio" | "servicios" | "publico" | "cultura" | "contacto"

export default function Page() {
  const [activeTab, setActiveTab] = useState<TabId>("inicio")

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [activeTab])

  const renderContent = () => {
    switch (activeTab) {
      case "inicio":
        return <HomeTab />
      case "servicios":
        return <ServiciosTab />
      case "publico":
        return <PublicoTab />
      case "cultura":
        return <CulturaTab />
      case "contacto":
        return <ContactoTab />
      default:
        return <HomeTab />
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1">{renderContent()}</main>
      <Footer />
    </div>
  )
}
