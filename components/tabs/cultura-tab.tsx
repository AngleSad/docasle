import { Target, Eye, Heart } from "lucide-react"

export function CulturaTab() {
  const valores = [
    "Humildad",
    "Empatía",
    "Confianza",
    "Amor",
    "Transparencia",
    "Igualdad",
    "Respeto",
    "Responsabilidad",
    "Generosidad",
    "Bondad",
    "Paciencia",
    "Solidaridad",
    "Profesionalidad",
    "Innovación",
    "Inclusión",
  ]

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Cultura y valores</h1>

      <div className="space-y-12">
        {/* Misión */}
        <div className="bg-card rounded-2xl p-8 shadow-md border">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-3 text-foreground">Misión</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ofrecer atención psicológica de calidad y accesible a niños, adolescentes y familias de Cádiz,
                trabajando la gestión emocional y la prevención de problemas de salud mental. Nuestro compromiso es
                crear un espacio seguro donde cada persona se sienta escuchada, comprendida y acompañada en su proceso
                de crecimiento emocional.
              </p>
            </div>
          </div>
        </div>

        {/* Visión */}
        <div className="bg-card rounded-2xl p-8 shadow-md border">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
              <Eye className="w-7 h-7 text-secondary" />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-3 text-foreground">Visión</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ser un centro de referencia en Cádiz en salud emocional infantil y juvenil, reconocido por nuestro
                enfoque innovador, inclusivo y cercano. Aspiramos a que cada familia tenga acceso a las herramientas
                necesarias para el bienestar emocional, contribuyendo a una sociedad más consciente y saludable.
              </p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="bg-card rounded-2xl p-8 shadow-md border">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <Heart className="w-7 h-7 text-accent-foreground" />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-3 text-foreground">Valores</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Nuestros valores guían cada interacción, decisión y servicio que ofrecemos:
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {valores.map((valor, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                {valor}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
