import { Button } from "@/components/ui/button"
import { Heart, Smile, Users, Lightbulb } from "lucide-react"

export function HomeTab() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-foreground">
              Centro de psicología Docasle
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium">
              Especialistas en infancia y adolescencia en Cádiz
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos un centro de psicología orientado a niños, adolescentes y sus familias. Creamos un espacio seguro
              donde aprender a gestionar emociones y crecer de manera saludable.
            </p>
            <Button size="lg" className="text-lg px-8">
              Pedir información
            </Button>
          </div>
          <div className="relative">
            <img
              src="/happy-children-playing-therapy-colorful-emotional-.jpg"
              alt="Niños felices en terapia"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Quiénes somos Section */}
      <section id="quienes-somos" className="container mx-auto px-4 py-16 max-w-4xl scroll-mt-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Quiénes somos</h2>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Docasle es un{" "}
            <strong className="text-foreground">centro de psicología especializado en infancia y adolescencia</strong>{" "}
            ubicado en Cádiz. Nuestro objetivo es ofrecer atención psicológica de calidad, accesible y con un enfoque
            innovador que va más allá de la consulta tradicional.
          </p>

          <p>
            Entendemos que los niños y adolescentes tienen formas únicas de expresarse, por eso ofrecemos servicios
            adaptados como{" "}
            <strong className="text-foreground">
              risoterapia, talleres para padres e hijos, zona de juego terapéutica, cuentos terapéuticos personalizados
            </strong>{" "}
            y programas especiales para familias con recursos limitados.
          </p>

          <p>
            Nuestra filosofía se basa en la prevención y la educación emocional. Creemos que enseñar a los niños a
            identificar y gestionar sus emociones desde temprana edad es fundamental para su desarrollo saludable y su
            bienestar futuro.
          </p>
        </div>

        <div className="mt-12 bg-primary/5 border-l-4 border-primary rounded-lg p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Nuestra idea central</h3>
              <p className="text-lg text-foreground leading-relaxed">
                Crear un espacio seguro y accesible para que niños, adolescentes y familias aprendan a gestionar sus
                emociones y desarrollen herramientas para enfrentar los desafíos de la vida cotidiana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Atención especializada</h3>
              <p className="text-muted-foreground">
                Psicólogos especializados en infancia y adolescencia con enfoque emocional
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-sm">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Smile className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Metodología innovadora</h3>
              <p className="text-muted-foreground">Risoterapia, juego terapéutico, talleres y cuentos personalizados</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-sm">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Apoyo familiar</h3>
              <p className="text-muted-foreground">Talleres para padres y acompañamiento continuo a toda la familia</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
