'use client'
import { About, Contact, Experiece, Header, Hero, Projects, SectionContainer } from '@/components'
import { GoogleAnalytics } from 'nextjs-google-analytics'
export default function Home() {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Luis Navarro',
            jobTitle: 'Frontend Developer',
            url: 'https://luisnavarro.vercel.app/',
            image: 'https://luisnavarro.vercel.app/me.png',
            sameAs: [
              'https://www.linkedin.com/in/luis-navarro-282858243',
              'https://github.com/luisr-nava'
            ]
          })
        }}
      />
      <main className='flex min-h-screen flex-col items-center justify-between py-24 px-8 md:px-24' id='top'>
        <h1 className='sr-only'>Luis Navarro - Frontend Developer especializado en React, Next.js y SaaS</h1>
        <Header />
        <SectionContainer className='py-24 md:py-36'>
          <Hero />
        </SectionContainer>
        <SectionContainer className='py-8'>
          <div className='rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl px-6 py-5'>
            <h2 className='text-base font-semibold text-gray-800 dark:text-white mb-1'>
              Desarrollador Frontend React &amp; Next.js — Buenos Aires, Argentina
            </h2>
            <p className='text-sm text-gray-500 dark:text-white/60 leading-relaxed'>
              Desarrollador Frontend en Argentina especializado en React, Next.js y TypeScript.
              Experiencia como desarrollador web construyendo aplicaciones SaaS, interfaces complejas y sistemas escalables.
              Trabajo como frontend developer freelance y en equipos remotos, desarrollando soluciones modernas optimizadas para performance y experiencia de usuario.
            </p>
            <div className='flex gap-4 mt-3 text-sm'>
              <a href='#proyectos' className='text-green-500 hover:underline'>Ver proyectos</a>
              <a href='#contacto' className='text-green-500 hover:underline'>Contactarme</a>
            </div>
          </div>
        </SectionContainer>
        <SectionContainer id='experiencia' className='py-16 md:py-32'>
          <Experiece />
        </SectionContainer>
        <SectionContainer className='pt-8 pb-0'>
          <h2 className='text-xl font-semibold text-gray-800 dark:text-white mb-2'>
            Experiencia desarrollando aplicaciones web en producción
          </h2>
          <p className='text-sm text-gray-500 dark:text-white/60 leading-relaxed'>
            He trabajado en productos SaaS en producción, optimizando performance,
            mejorando la experiencia de usuario y desarrollando interfaces complejas.
            Utilizo React, Next.js y TypeScript para construir aplicaciones modernas,
            escalables y orientadas a negocio.
          </p>
        </SectionContainer>
        <SectionContainer id='proyectos' className='py-16'>
          <Projects />
        </SectionContainer>
        <SectionContainer id='sobre-mi' className='py-16'>
          <About />
        </SectionContainer>
        <SectionContainer id='contacto' className='py-16'>
          <Contact />
        </SectionContainer>
      </main>
    </>
  )
}
