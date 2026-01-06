import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ProjectCard from '../components/ProjectCard'
import { portfolioProjects } from '../data/portfolio'

const Portfolio = () => {
  return (
    <>
      <SEO
        title="Portfolio - StackSens"
        description="Explore our portfolio of web and mobile applications built for restaurants, hospitality businesses, and startups."
        keywords="portfolio, web development projects, mobile app projects, restaurant apps, hospitality software"
      />
      
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600">
              Explore some of our recent projects across different industries and platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-8">
            <p className="text-gray-600 text-center">
              <em>Note: Some client details are withheld due to NDAs.</em>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                industry={project.industry}
                platform={project.platform}
                description={project.description}
                features={project.features}
                status={project.status}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to See Your Project Here?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's work together to build something amazing.
          </p>
          <Link to="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
            Start a Project
          </Link>
        </div>
      </section>
    </>
  )
}

export default Portfolio

