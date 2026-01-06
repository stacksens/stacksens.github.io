import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const About = () => {
  return (
    <>
      <SEO
        title="About - StackSens"
        description="Learn about StackSens - a web and mobile app development company focused on building reliable software for restaurants, hospitality, and startups."
        keywords="about stacksens, development team, company values, mission"
      />
      
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About StackSens
            </h1>
            <p className="text-xl text-gray-600">
              Building reliable software that solves real business problems.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-50 rounded-lg p-8 md:p-12 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 text-center leading-relaxed">
                StackSens builds reliable software that solves real business problems. We partner with restaurants, 
                hospitality businesses, and startups to turn their ideas into production-ready applications that scale 
                with their growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality-First Development</h3>
              <p className="text-gray-600">
                We write clean, maintainable code and follow best practices. Quality isn't an afterthought—it's built into 
                every line of code we write.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Clear Communication</h3>
              <p className="text-gray-600">
                We keep you informed throughout the development process. Regular updates, transparent timelines, and 
                honest conversations about what's possible.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Long-term Partnerships</h3>
              <p className="text-gray-600">
                We're not just here for the launch. We build lasting relationships with our clients, providing ongoing 
                support, updates, and enhancements as your business evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Team
              </h2>
              <p className="text-xl text-gray-600">
                Small team, big expertise
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 md:p-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                StackSens is a small, senior-driven engineering team with strong experience in web and mobile app development. 
                We believe in the power of focused expertise over large teams, which allows us to be more agile, responsive, 
                and cost-effective.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our team members have years of experience building production applications across various industries, 
                with particular depth in restaurant and hospitality technology. We understand the unique challenges these 
                businesses face and how technology can solve them.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When you work with StackSens, you're working directly with experienced developers who understand both 
                the technical and business sides of software development. No layers of project managers or junior developers—just 
                senior engineers who can build, communicate, and deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Ready to build something great? Get in touch and let's discuss your project.
          </p>
          <Link to="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}

export default About

