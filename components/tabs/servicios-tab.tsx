import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Home, Users, Baby, MessageCircle, Laugh, BookHeart, Award, FileText, Heart } from "lucide-react"

export function ServiciosTab() {
  const servicios = [
    {
      icon: Video,
      title: "Consultas psicológicas",
      description: "Atención presencial y online adaptada a las necesidades de cada niño y adolescente",
    },
    {
      icon: Home,
      title: "Zona de juego terapéutica",
      description: "Espacio especialmente diseñado para que los niños se expresen a través del juego",
    },
    {
      icon: Users,
      title: "Talleres para padres y madres",
      description: "Formación y herramientas para acompañar emocionalmente a vuestros hijos",
    },
    {
      icon: Baby,
      title: "Talleres para niños",
      description: "Actividades grupales para desarrollar inteligencia emocional y habilidades sociales",
    },
    {
      icon: MessageCircle,
      title: "Grupo de terapia para adolescentes",
      description: "Espacio seguro donde compartir experiencias y aprender de otros jóvenes",
    },
    {
      icon: Laugh,
      title: "Sesiones de risoterapia",
      description: "Terapia a través de la risa para reducir el estrés y mejorar el bienestar emocional",
    },
    {
      icon: BookHeart,
      title: "Cuentos terapéuticos personalizados",
      description: "Historias creadas específicamente para trabajar situaciones y emociones particulares",
    },
    {
      icon: Award,
      title: "Embajadores emocionales",
      description: "Programa donde adolescentes ayudan a los más pequeños a expresar sus emociones",
    },
    {
      icon: FileText,
      title: "Recursos digitales",
      description: "Artículos, consejos y guías para familias en nuestro blog y redes sociales",
    },
    {
      icon: Heart,
      title: "Mural emocional",
      description: "Sistema de seguimiento visual de emociones a lo largo del curso escolar",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros servicios</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Ofrecemos una amplia variedad de servicios innovadores diseñados para el bienestar emocional de niños,
          adolescentes y sus familias
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicios.map((servicio, index) => {
          const IconComponent = servicio.icon
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{servicio.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{servicio.description}</CardDescription>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
