import { 
    FaGithub, FaLinkedin, FaTwitter
  } from "react-icons/fa";
  
export default function Footer()  { 
    return(
        <footer className="mt-16 bottom-0 bg-neutral-50 dark:bg-neutral-800 py-6 px-4 rounded-lg w-full">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="w-6 h-6 text-gray-700 dark:text-white" />
            </a>
            <a href="https://linkedin.com/yourlinkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="w-6 h-6 text-blue-700" />
            </a>
            <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="w-6 h-6 text-blue-500" />
            </a>
          </div>
        </div>
      </footer>
    )
 };