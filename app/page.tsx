import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Dinesh S</div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary">
              Experience
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <section className="py-12 md:py-20 flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
            <img src="/placeholder.svg?height=128&width=128" alt="Dinesh S" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Dinesh S</h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">Software Engineer | Full Stack Developer</h2>
          <div className="flex items-center gap-2 text-muted-foreground mb-8">
            <MapPin className="h-4 w-4" />
            <span>Chennai, Tamil Nadu, India</span>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/dinesh-s-2a0450200/" target="_blank">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/" target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:example@email.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate Software Engineer with expertise in full-stack development. I specialize in building
              robust web applications using modern technologies and frameworks. With a strong foundation in computer
              science and a keen eye for detail, I strive to create efficient, scalable, and user-friendly solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm constantly learning and adapting to new technologies to stay at the forefront of the rapidly evolving
              tech landscape. I enjoy tackling complex problems and collaborating with teams to deliver high-quality
              software products.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Software Engineer</h3>
                    <p className="text-muted-foreground">Zoho Corporation</p>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 md:mt-0">Jul 2022 - Present</div>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Developed and maintained web applications using modern JavaScript frameworks</li>
                  <li>Collaborated with cross-functional teams to implement new features and improve existing ones</li>
                  <li>Optimized application performance and ensured code quality through testing and code reviews</li>
                  <li>Participated in agile development processes, including sprint planning and retrospectives</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Software Development Intern</h3>
                    <p className="text-muted-foreground">Tech Startup</p>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 md:mt-0">Jan 2022 - Jun 2022</div>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Assisted in developing front-end components using React.js</li>
                  <li>Implemented responsive designs and ensured cross-browser compatibility</li>
                  <li>Participated in code reviews and learned best practices from senior developers</li>
                  <li>Contributed to the development of RESTful APIs using Node.js</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card className="p-4">
                <h3 className="font-semibold mb-3">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>JavaScript</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Python</Badge>
                  <Badge>Java</Badge>
                  <Badge>C++</Badge>
                </div>
              </Card>
              <Card className="p-4">
                <h3 className="font-semibold mb-3">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>HTML5</Badge>
                  <Badge>CSS3</Badge>
                  <Badge>Tailwind CSS</Badge>
                </div>
              </Card>
              <Card className="p-4">
                <h3 className="font-semibold mb-3">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Node.js</Badge>
                  <Badge>Express</Badge>
                  <Badge>Django</Badge>
                  <Badge>Spring Boot</Badge>
                </div>
              </Card>
              <Card className="p-4">
                <h3 className="font-semibold mb-3">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>MongoDB</Badge>
                  <Badge>MySQL</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>Firebase</Badge>
                </div>
              </Card>
              <Card className="p-4">
                <h3 className="font-semibold mb-3">DevOps & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Git</Badge>
                  <Badge>Docker</Badge>
                  <Badge>AWS</Badge>
                  <Badge>CI/CD</Badge>
                </div>
              </Card>
              <Card className="p-4">
                <h3 className="font-semibold mb-3">Other Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Agile</Badge>
                  <Badge>RESTful APIs</Badge>
                  <Badge>GraphQL</Badge>
                  <Badge>Testing</Badge>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="overflow-hidden">
              <div className="h-48 bg-muted">
                <img
                  src="/placeholder.svg?height=192&width=384"
                  alt="Project 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
                <p className="text-muted-foreground mb-4">
                  A full-stack e-commerce application with product catalog, shopping cart, and payment integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                  <Badge variant="outline">Stripe</Badge>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#" className="flex items-center gap-1">
                      <Github className="h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="#" className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-muted">
                <img
                  src="/placeholder.svg?height=192&width=384"
                  alt="Project 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Task Management App</h3>
                <p className="text-muted-foreground mb-4">
                  A collaborative task management application with real-time updates and team collaboration features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Firebase</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#" className="flex items-center gap-1">
                      <Github className="h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="#" className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="max-w-md mx-auto">
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dinesh S. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/dinesh-s-2a0450200/" target="_blank">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/" target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:example@email.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

