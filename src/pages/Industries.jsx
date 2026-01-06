import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const Industries = () => {
  return (
    <>
      <SEO
        title="Industries - StackSens"
        description="StackSens specializes in software solutions for restaurants, hospitality businesses, and startups. Learn about our industry expertise."
        keywords="restaurant technology, hospitality software, startup development, industry solutions"
      />
      
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-600">
              We specialize in building software solutions for specific industries, bringing deep understanding of your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Restaurant Technology */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="text-primary-600 mb-4">
                <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Restaurant Technology
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Modern restaurants need technology that streamlines operations, enhances customer experience, and drives revenue. We build solutions that do all three.
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Online Ordering</h3>
                  <p className="text-gray-700">
                    Custom ordering platforms integrated with your POS system, delivery partners, and kitchen operations. 
                    Features include real-time inventory, order tracking, and customer loyalty programs.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Table Booking</h3>
                  <p className="text-gray-700">
                    Reservation systems that manage table availability, waitlists, and customer preferences. 
                    Reduce no-shows with automated reminders and optimize seating for maximum efficiency.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Kitchen Management</h3>
                  <p className="text-gray-700">
                    Digital kitchen displays, order management systems, and staff coordination tools. 
                    Improve order accuracy, reduce wait times, and streamline kitchen operations.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-primary-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">POS system integration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Multi-platform order aggregation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Real-time inventory management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Customer analytics and insights</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Loyalty and rewards programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1 bg-primary-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Solutions We Build</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Property management systems</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Guest communication platforms</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Staff scheduling and management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Revenue management tools</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Maintenance and housekeeping apps</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-primary-600 mb-4">
                <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Hospitality
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Hotels, resorts, and hospitality businesses need technology that enhances guest experiences while optimizing operations. 
                We build solutions that do both.
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Booking Systems</h3>
                  <p className="text-gray-700">
                    Comprehensive reservation platforms that manage room availability, rates, and guest preferences. 
                    Integrate with channel managers and payment gateways for seamless operations.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Guest Management</h3>
                  <p className="text-gray-700">
                    Tools for check-in/check-out, guest communication, special requests, and preferences. 
                    Improve guest satisfaction with personalized experiences and efficient service.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Internal Staff Tools</h3>
                  <p className="text-gray-700">
                    Mobile and web applications for housekeeping, maintenance, front desk, and management teams. 
                    Streamline operations and improve coordination across departments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Startups */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-primary-600 mb-4">
                <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Startups
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Startups need to move fast, validate ideas quickly, and scale efficiently. We help you build MVPs that can grow into 
                successful products without requiring a complete rebuild.
              </p>
              <div className="space-y-4">
                <div className="bg-primary-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">MVPs</h3>
                  <p className="text-gray-700">
                    Rapidly build and launch your minimum viable product to test market fit and gather user feedback. 
                    We focus on core features that deliver value while keeping the door open for future expansion.
                  </p>
                </div>
                <div className="bg-primary-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Prototypes</h3>
                  <p className="text-gray-700">
                    Interactive prototypes that help you validate concepts, secure funding, and communicate your vision 
                    to stakeholders before committing to full development.
                  </p>
                </div>
                <div className="bg-primary-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Scalable Systems</h3>
                  <p className="text-gray-700">
                    Architecture designed for growth. Build your MVP with scalability in mind, so you can handle 
                    increasing traffic and users without major rewrites.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Startups Choose Us</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-semibold text-gray-900 mb-1">Fast Time to Market</h4>
                  <p className="text-gray-600">Agile development process gets you to market quickly</p>
                </li>
                <li>
                  <h4 className="font-semibold text-gray-900 mb-1">Cost-Effective</h4>
                  <p className="text-gray-600">Efficient development that maximizes your budget</p>
                </li>
                <li>
                  <h4 className="font-semibold text-gray-900 mb-1">Technical Expertise</h4>
                  <p className="text-gray-600">Senior developers who make the right technology choices</p>
                </li>
                <li>
                  <h4 className="font-semibold text-gray-900 mb-1">Flexible Engagement</h4>
                  <p className="text-gray-600">Work with us on a project basis or ongoing partnership</p>
                </li>
                <li>
                  <h4 className="font-semibold text-gray-900 mb-1">Growth-Ready</h4>
                  <p className="text-gray-600">Build once, scale as you grow</p>
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
            Ready to Build Your Solution?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help solve your industry-specific challenges.
          </p>
          <Link to="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}

export default Industries

