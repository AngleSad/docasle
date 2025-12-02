import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export function ContactoTab() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          ¿Necesitas más información? Ponte en contacto con nosotros
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Información de contacto */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                Dirección
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Calle Ejemplo, 123
                <br />
                11001 Cádiz, España
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                Teléfono
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">+34 956 123 456</CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent-foreground" />
                </div>
                Correo electrónico
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">info@docasle.es</CardDescription>
            </CardContent>
          </Card>

          {/* Mapa decorativo */}
          <div className="bg-muted rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-border">
            <p className="text-muted-foreground">Mapa de ubicación</p>
          </div>
        </div>

        {/* Formulario de contacto */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Envíanos un mensaje</CardTitle>
            <CardDescription>
              Completa el formulario y nos pondremos en contacto contigo lo antes posible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium mb-2 block">
                  Nombre
                </label>
                <Input id="name" placeholder="Tu nombre completo" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium mb-2 block">
                  Email
                </label>
                <Input id="email" type="email" placeholder="tu@email.com" />
              </div>
              <div>
                <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                  Asunto
                </label>
                <Input id="subject" placeholder="¿En qué podemos ayudarte?" />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium mb-2 block">
                  Mensaje
                </label>
                <Textarea id="message" placeholder="Escribe tu mensaje aquí..." rows={6} />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Enviar mensaje
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              * Este formulario es parte de un proyecto académico ficticio
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
