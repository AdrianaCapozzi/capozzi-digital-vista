import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Calendar, Users, Target, Award, Heart } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "Portal da Zeladoria - Análise de Dados e CI",
      period: "Fevereiro 2025 - Presente",
      description: "Desenvolvimento de solução web com foco em coleta, modelagem e visualização de dados para apoio à gestão pública. Implementação de CI/CD com GitHub Actions e criação de dashboards com Power BI.",
      technologies: ["Python", "Flask", "Power BI", "GitHub Actions", "HTML/CSS/JS"],
      videoLink: "#",
      highlights: [
        "Elaboração do relatório técnico com metodologia SCRUM",
        "Implementação de integração contínua",
        "Criação de base de dados para Power BI",
        "Configuração de pipeline de desenvolvimento"
      ]
    },
    {
      title: "Sistema ERP para Pequenos Agricultores",
      period: "Fevereiro - Maio 2024",
      description: "Desenvolvimento do front-end e auxílio na construção do banco de dados. Contribuição com documentação, pesquisa e mediação entre equipe e comunidade.",
      technologies: ["JavaScript", "SQL", "Git", "GitHub"],
      videoLink: "#",
      highlights: [
        "Desenvolvimento de interface moderna",
        "Gestão de banco de dados",
        "Documentação técnica completa",
        "Liderança na comunicação com stakeholders"
      ]
    }
  ];

  const experiences = [
    {
      company: "Bradesco Seguros",
      role: "Estagiária - Gestão Comercial e Analytics",
      period: "Março 2025 - Presente",
      location: "Barueri, São Paulo - Híbrido",
      description: "Apoio na execução de rotinas e processos da área, atualização de relatórios mensais, auxílio na documentação e geração de leads comerciais.",
      technologies: ["SQL", "Microsoft SQL Server", "Excel", "Power BI", "SAS"]
    },
    {
      company: "Prefeitura Municipal de Peruíbe",
      role: "Estagiária de T.I.",
      period: "Abril 2023 - Janeiro 2024",
      location: "Peruíbe - Presencial",
      description: "Manutenção de laboratório de informática, auxílio a estudantes, implementação de soluções de T.I. e gestão de inventário de hardware.",
      technologies: ["Windows", "Linux", "Redes", "Hardware", "Suporte Técnico"]
    }
  ];

  const volunteerWork = {
    organization: "Rede Solidária de Peruíbe",
    role: "Comunicadora e orientadora em tecnologia",
    period: "Janeiro 2019 - Janeiro 2024 · 5 anos 1 mês",
    sector: "Direitos civis e ações sociais",
    description: "Organização em uma rede de apoio a pequenos produtores na cidade de Peruíbe no enfrentamento à exclusão digital, auxílio ao uso das redes sociais para comercialização e troca de produtos. Campanha de doação de cestas de alimentos agroecológicos no período pandêmico, beneficiando produtores rurais do entorno que precisaram escoar a produção sem o acontecimento de feiras presenciais e pessoas em insegurança alimentar que foram afetadas financeiramente com a perda de suas funções geradoras de renda em conjunto com coletivos de Economia Solidária da Baixada Santista.",
    activities: [
      "Auxílio no enfrentamento à exclusão digital",
      "Orientação sobre uso de redes sociais para comercialização",
      "Organização de campanhas de doação de alimentos agroecológicos",
      "Participação em seminários e lives do Sesc Santos e Registro"
    ],
    links: ["#", "#", "#"]
  };

  const skills = {
    programming: ["Python", "Java", "JavaScript", "SQL"],
    tools: ["AWS", "Flask", "Git", "GitHub", "Power BI", "SAS"],
    systems: ["Linux", "MacOS", "Windows"],
    methodologies: ["Kanban", "Metodologias Ágeis", "SCRUM"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gradient">
              Adriana Capozzi
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'volunteer', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 capitalize ${
                    activeSection === section
                      ? 'bg-red-500 text-white shadow-lg'
                      : 'text-gray-700 hover:text-red-500 hover:bg-red-50'
                  }`}
                >
                  {section === 'home' ? 'Início' : 
                   section === 'about' ? 'Sobre' :
                   section === 'experience' ? 'Experiência' :
                   section === 'volunteer' ? 'Voluntariado' :
                   section === 'projects' ? 'Projetos' : 'Contato'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section-padding pt-24 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold">
                  <span className="text-gradient">Adriana</span>
                  <br />
                  <span className="text-gray-800">Capozzi</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Engenheira de Computação em formação, especializada em análise de dados, 
                  desenvolvimento web e Business Intelligence. Liderança afetuosa e certeira 
                  com foco em soluções tecnológicas universais.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
                  <Target className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">Liderança Estratégica</span>
                </div>
                <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
                  <Users className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">Colaboração</span>
                </div>
                <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
                  <Award className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">Inovação</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="gradient-red text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-glow"
                >
                  Ver Projetos
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-red-500 text-red-500 px-8 py-4 rounded-full font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  Contato
                </button>
              </div>
            </div>

            <div className={`flex justify-center ${isVisible ? 'animate-float' : 'opacity-0'}`}>
              <div className="relative">
                <div className="w-80 h-80 rounded-full gradient-red p-1 animate-glow">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-300"></div>
                      <p className="text-sm">Sua foto aqui</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-100 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-200 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">Sobre Mim</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Graduanda em Engenharia de Computação com foco em análise de dados, 
              desenvolvimento web, BI e QA. Experiência em soluções tecnológicas 
              e metodologias ágeis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div
                key={category}
                className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4 capitalize">
                  {category === 'programming' ? 'Programação' :
                   category === 'tools' ? 'Ferramentas' :
                   category === 'systems' ? 'Sistemas' : 'Metodologias'}
                </h3>
                <div className="space-y-2">
                  {skillList.map((skill) => (
                    <div
                      key={skill}
                      className="bg-white rounded-full px-3 py-1 text-sm text-gray-700 shadow-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Educação</h3>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold">Univesp - Universidade Virtual do Estado de São Paulo</h4>
                  <p className="opacity-90">Bacharelado em Engenharia de Computação</p>
                  <p className="opacity-80">Julho 2022 - Agosto 2027 (5º semestre)</p>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">B1</div>
                <p className="text-lg">Inglês Intermediário</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">Experiência Profissional</h2>
            <p className="text-xl text-gray-600">
              Trajetória de crescimento e liderança em tecnologia
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.company}</h3>
                    <p className="text-red-500 font-semibold mb-2">{exp.role}</p>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Work Section */}
      <section id="volunteer" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">Trabalho Voluntário</h2>
            <p className="text-xl text-gray-600">
              Compromisso com impacto social e tecnologia para todos
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="flex items-center mb-4">
                  <Heart className="w-6 h-6 text-red-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">{volunteerWork.organization}</h3>
                </div>
                <p className="text-red-500 font-semibold mb-2">{volunteerWork.role}</p>
                <div className="space-y-1 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {volunteerWork.period}
                  </div>
                  <div className="flex items-center">
                    <Target className="w-4 h-4 mr-2" />
                    {volunteerWork.sector}
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-700 mb-6 leading-relaxed">{volunteerWork.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Principais Atividades:</h4>
                  <ul className="space-y-2">
                    {volunteerWork.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4">
                  {volunteerWork.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link}
                      className="inline-flex items-center text-red-500 hover:text-red-600 font-semibold transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Link {idx + 1}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">Projetos em Destaque</h2>
            <p className="text-xl text-gray-600">
              Soluções inovadoras que impactam comunidades e organizações
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-red-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-red-500 font-semibold mb-4">{project.period}</p>
                    <p className="text-gray-700 leading-relaxed">{project.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Principais Contribuições:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.videoLink}
                      className="inline-flex items-center text-red-500 hover:text-red-600 font-semibold transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Apresentação
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding gradient-red text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Vamos Conversar?</h2>
          <p className="text-xl mb-12 opacity-90">
            Pronta para novos desafios e oportunidades de crescimento
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <Mail className="w-8 h-8 mx-auto" />
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="opacity-90">seu-email@exemplo.com</p>
            </div>
            <div className="space-y-4">
              <Linkedin className="w-8 h-8 mx-auto" />
              <h3 className="text-xl font-semibold">LinkedIn</h3>
              <p className="opacity-90">linkedin.com/in/adriana-capozzi</p>
            </div>
            <div className="space-y-4">
              <Github className="w-8 h-8 mx-auto" />
              <h3 className="text-xl font-semibold">GitHub</h3>
              <p className="opacity-90">github.com/adriana-capozzi</p>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="mailto:seu-email@exemplo.com"
              className="bg-white text-red-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Enviar Email
            </a>
            <a
              href="https://linkedin.com/in/adriana-capozzi"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-500 transition-all duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="opacity-80">
            © 2025 Adriana Capozzi. Feito com ❤️ e muito código.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
