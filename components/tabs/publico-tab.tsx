"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Baby, Users2, Home } from "lucide-react"
import { useState } from "react"

export function PublicoTab() {
  const [selectedPublico, setSelectedPublico] = useState<number | null>(null)

  const publicos = [
    {
      icon: Baby,
      title: "Niños y niñas (2-11 años)",
      description:
        "Trabajamos con dificultades emocionales, problemas de conducta, miedos, ansiedad infantil, problemas en el colegio, gestión de emociones y desarrollo de habilidades sociales.",
      color: "bg-chart-1/10 text-chart-1",
      emoji: "👶",
      consejos: {
        title: "Consejos para las familias",
        items: [
          {
            title: "Pon nombre a las emociones",
            description:
              'Ayúdales a identificar qué sienten: "Parece que estás triste / enfadado / asustado". Esto desarrolla inteligencia emocional desde pequeños.',
          },
          {
            title: "Crea rutinas estables",
            description:
              "Las rutinas dan seguridad y reducen conflictos, especialmente en niños con miedos o problemas de conducta.",
          },
          {
            title: "Valida sus sentimientos",
            description:
              'En vez de "eso no es para tanto", usa frases como: "Entiendo que eso te ha molestado. Vamos a ver cómo podemos solucionarlo."',
          },
          {
            title: "Tiempo de juego de calidad",
            description:
              "El juego simbólico (tiendas, superhéroes, muñecos…) es una herramienta terapéutica natural. Dedícale 10-15 minutos diarios sin pantallas.",
          },
          {
            title: "Refuerza los comportamientos positivos",
            description: "Premia con palabras, gestos y tiempo juntos, no con dulces ni cosas materiales.",
          },
          {
            title: "Evita castigos excesivos",
            description:
              'Sustituye el castigo por consecuencias lógicas: "Si tiras los juguetes, debes ayudar a recoger."',
          },
        ],
      },
    },
    {
      icon: Users2,
      title: "Adolescentes (12-20 años)",
      description:
        "Atendemos casos de ansiedad, problemas de autoestima, relaciones sociales conflictivas, acoso escolar, presión académica, cambios emocionales y búsqueda de identidad.",
      color: "bg-chart-2/10 text-chart-2",
      emoji: "🧑‍🤝‍🧑",
      consejos: {
        title: "Consejos para familias y educadores",
        items: [
          {
            title: "Escucha sin juzgar",
            description:
              "La adolescencia es una etapa de ansiedad, presión académica y búsqueda de identidad. Necesitan ser escuchados sin sermones.",
          },
          {
            title: "Respeta su privacidad, pero mantén límites",
            description: "Libertad con responsabilidad: horarios, normas claras y consecuencias coherentes.",
          },
          {
            title: "Habla de emociones",
            description:
              "Ayúdales a entender lo que sienten: estrés, frustración, comparaciones sociales, miedo a fracasar…",
          },
          {
            title: "Normaliza pedir ayuda psicológica",
            description:
              "Muchos adolescentes ocultan ansiedad o baja autoestima por miedo al juicio. Haz que acudir a terapia sea visto como algo normal.",
          },
          {
            title: "Cuida su entorno digital",
            description:
              "Controla sin invadir: analiza juntos redes sociales, ciberacoso, comparaciones corporales y autoestima.",
          },
          {
            title: "Refuerza sus logros",
            description: "Valora su esfuerzo, no solo sus notas. Esto reduce presión académica y miedo al fracaso.",
          },
        ],
      },
    },
    {
      icon: Home,
      title: "Familias y cuidadores",
      description:
        "Ofrecemos apoyo a padres y madres que necesitan herramientas para acompañar emocionalmente a sus hijos, mejorar la comunicación familiar y gestionar situaciones difíciles.",
      color: "bg-chart-3/20 text-accent-foreground",
      emoji: "🏠",
      consejos: {
        title: "Consejos para el acompañamiento emocional",
        items: [
          {
            title: "Crea un clima familiar seguro",
            description: "Evita gritos, humillaciones o amenazas. Prioriza el diálogo respetuoso.",
          },
          {
            title: "Da ejemplo de regulación emocional",
            description:
              "Los niños aprenden más por observación que por lo que se les dice. Si gestionas bien tu estrés, ellos también lo harán.",
          },
          {
            title: "Establece comunicación abierta",
            description: 'Pregunta de forma sencilla: "¿Qué ha sido lo mejor y lo peor del día?"',
          },
          {
            title: "Evita usar la comida como premio o castigo",
            description: "Crea jerarquías de alimentos y asociaciones emocionales negativas.",
          },
          {
            title: "Busca apoyo cuando lo necesites",
            description:
              "La crianza no se hace sola. Talleres, guía profesional y acompañamiento son herramientas clave.",
          },
          {
            title: "Dedica tiempo individual a cada hijo",
            description: "Aunque sea 10 minutos al día. Refuerza vínculo, seguridad y autoestima.",
          },
        ],
      },
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Público objetivo</h1>
        <p className="text-xl text-muted-foreground">
          Nuestros servicios están especialmente diseñados para familias de Cádiz y alrededores, con un compromiso firme
          por ofrecer precios accesibles
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {publicos.map((publico, index) => {
          const IconComponent = publico.icon
          return (
            <Card
              key={index}
              className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedPublico(index)}
            >
              <CardHeader className="text-center">
                <div
                  className={`w-20 h-20 rounded-full ${publico.color} flex items-center justify-center mx-auto mb-4`}
                >
                  <IconComponent className="w-10 h-10" />
                </div>
                <CardTitle className="text-2xl">{publico.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-center">
                  {publico.description}
                </CardDescription>
                <p className="text-sm text-primary font-medium text-center mt-4">Click para ver consejos →</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="mt-16 max-w-3xl mx-auto bg-accent/20 border border-accent/30 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-semibold mb-3 text-foreground">Compromiso con la accesibilidad</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Orientamos especialmente nuestros servicios a familias de Cádiz y alrededores. Creemos que la salud mental
          debe ser accesible para todos, por eso trabajamos para ofrecer tarifas ajustadas y programas especiales para
          familias con recursos limitados.
        </p>
      </div>

      <Dialog open={selectedPublico !== null} onOpenChange={(open) => !open && setSelectedPublico(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto custom-scrollbar">
          {selectedPublico !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl flex items-center gap-2">
                  <span className="text-4xl">{publicos[selectedPublico].emoji}</span>
                  {publicos[selectedPublico].title}
                </DialogTitle>
                <DialogDescription className="text-lg pt-2">
                  {publicos[selectedPublico].consejos.title}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 pt-4">
                {publicos[selectedPublico].consejos.items.map((consejo, idx) => (
                  <div key={idx} className="border-l-4 border-primary pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-2 text-foreground">{consejo.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{consejo.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
