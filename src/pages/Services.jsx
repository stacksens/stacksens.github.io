import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <>
      <SEO
        title="Services - StackSens"
        description="Comprehensive web and mobile app development services including custom web applications, native mobile apps, and product engineering solutions."
        keywords="web development services, mobile app development, product engineering, custom software development"
      />
      
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600">
              We offer end-to-end development services to help you build, launch, and scale your digital products.
            </p>
          </div>
        </div>
      </section>

      {/* Web Development */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Web Development
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We build modern, responsive web applications that deliver exceptional user experiences and drive business results.
              </p>
              <p className="text-gray-600 mb-6">
                Our web development services cover everything from simple business websites to complex enterprise applications.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>Dashboards:</strong> Real-time analytics and data visualization platforms</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>Booking Systems:</strong> Reservation and appointment management platforms</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>Ordering Platforms:</strong> E-commerce and online ordering solutions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>Business Websites:</strong> Professional websites that represent your brand</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span className="text-gray-700">Responsive design for all devices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span className="text-gray-700">Fast load times and optimized performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span className="text-gray-700">SEO-friendly architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span className="text-gray-700">Secure and scalable infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span className="text-gray-700">Integration with third-party services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Development */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1 bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Platform Support</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>iOS Apps:</strong> Native Swift development for iPhone and iPad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Android Apps:</strong> Native Kotlin/Java development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Cross-platform:</strong> React Native and Flutter for faster development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Customer-facing Apps:</strong> Public apps for end users</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Internal Apps:</strong> Staff and management tools</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mobile App Development
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We create native and cross-platform mobile applications that provide seamless user experiences on iOS and Android devices.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you need a customer-facing app or internal tools for your team, we deliver mobile solutions that perform.
              </p>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Example Use Cases</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Restaurant ordering and loyalty apps</li>
                  <li>• Hotel booking and guest services</li>
                  <li>• Staff management and task tracking</li>
                  <li>• Inventory and operations management</li>
                  <li>• Customer engagement and marketing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Engineering */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Product Engineering
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                From concept to launch, we help you build products that are scalable, maintainable, and ready for growth.
              </p>
              <p className="text-gray-600 mb-6">
                Our product engineering approach combines technical expertise with business understanding to deliver solutions that drive value.
              </p>
              <div className="space-y-4">
                <div className="bg-primary-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">MVP Development</h3>
                  <p className="text-gray-700">
                    Rapidly build and launch your minimum viable product to validate ideas and get to market faster.
                  </p>
                </div>
                <div className="bg-primary-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Startup Consulting</h3>
                  <p className="text-gray-700">
                    Technical guidance and architecture decisions to help startups make the right technology choices.
                  </p>
                </div>
                <div className="bg-primary-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Performance Optimization</h3>
                  <p className="text-gray-700">
                    Improve existing applications with performance tuning, scalability improvements, and code refactoring.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Approach</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-semibold text-gray-900 mb-1">1. Discovery & Planning</h4>
                  <p className="text-gray-600">Understand your goals, requirements, and constraints</p>
                </li>
                <li>
                  <h4 className="font-semibold text-gray-900 mb-1">2. Architecture Design</h4>
                  <p className="text-gray-600">Design scalable, maintainable system architecture</p>
                </li>
                <li>
                  <h4 className="font-semibold text-gray-900 mb-1">3. Agile Development</h4>
                  <p className="text-gray-600">Iterative development with regular feedback loops</p>
                </li>
                <li>
                  <h4 className="font-semibold text-gray-900 mb-1">4. Testing & Quality</h4>
                  <p className="text-gray-600">Comprehensive testing to ensure reliability</p>
                </li>
                <li>
                  <h4 className="font-semibold text-gray-900 mb-1">5. Launch & Support</h4>
                  <p className="text-gray-600">Deployment and ongoing maintenance</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life.
          </p>
          <Link to="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}

export default Services

