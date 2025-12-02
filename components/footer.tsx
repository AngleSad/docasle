export function Footer() {
  return (
    <footer className="w-full border-t bg-muted/50 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold text-foreground">Docasle – Creciendo con emociones sanas</p>
            <p className="text-sm text-muted-foreground mt-1">
              Centro de psicología especializado en infancia y adolescencia
            </p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <button className="hover:text-foreground transition-colors">Aviso legal</button>
            <button className="hover:text-foreground transition-colors">Política de privacidad</button>
            <button className="hover:text-foreground transition-colors">Fuentes y enlaces</button>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t text-center text-xs text-muted-foreground">
          <p>Este es un proyecto académico ficticio con fines educativos</p>
        </div>
      </div>
    </footer>
  )
}
