const ProjectCard = ({ name, industry, platform, description, features, status }) => {
  const statusColors = {
    'Live': 'bg-green-100 text-green-800',
    'Private': 'bg-yellow-100 text-yellow-800',
    'Demo': 'bg-blue-100 text-blue-800',
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        {status && (
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[status] || 'bg-gray-100 text-gray-800'}`}>
            {status}
          </span>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {industry && (
          <span className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-sm font-medium">
            {industry}
          </span>
        )}
        {platform && (
          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm font-medium">
            {platform}
          </span>
        )}
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      {features && features.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ProjectCard

