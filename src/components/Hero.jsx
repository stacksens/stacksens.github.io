import { Link } from 'react-router-dom'

const Hero = ({ headline, subtext, showCTAs = true }) => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {headline}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            {subtext}
          </p>
          {showCTAs && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portfolio" className="btn-primary">
                View Our Work
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero

