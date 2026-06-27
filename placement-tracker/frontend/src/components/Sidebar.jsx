import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 h-screen p-6 flex flex-col">
      <h2 className="text-teal-400 text-3xl font-extrabold mb-10 tracking-widest">
        TRK<span className="text-white">.AI</span>
      </h2>
      
      <ul className="space-y-4 flex-1">
        {/* Dashboard Link */}
        <li className="text-white bg-teal-500/10 border border-teal-500/30 rounded-lg transition-all shadow-[0_0_10px_rgba(20,184,166,0.1)]">
          <Link to="/" className="block w-full p-3 cursor-pointer">
            Dashboard
          </Link>
        </li>
        
        {/* AI Mock Interviews Link */}
        <li className="text-gray-400 hover:text-teal-400 hover:bg-gray-800 rounded-lg transition-all">
          <Link to="/ai-interviews" className="block w-full p-3 cursor-pointer">
            AI Mock Interviews
          </Link>
        </li>
        
        {/* Code Vault Link */}
        <li className="text-gray-400 hover:text-teal-400 hover:bg-gray-800 rounded-lg transition-all">
          <Link to="/code-vault" className="block w-full p-3 cursor-pointer">
            Code Vault
          </Link>
        </li>
        
        {/* Skill Badges Link */}
        <li className="text-gray-400 hover:text-teal-400 hover:bg-gray-800 rounded-lg transition-all">
          <Link to="/badges" className="block w-full p-3 cursor-pointer">
            Skill Badges
          </Link>
        </li>
      </ul>

      <div className="mt-auto pt-6 border-t border-gray-800">
        <p className="text-gray-500 text-sm text-center">v1.0.0 Advanced</p>
      </div>
    </div>
  )
}

export default Sidebar;