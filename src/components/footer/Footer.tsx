import { GithubLogoIcon, GoogleLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'
import React from 'react'

function Footer() {
    const data = new Date().getFullYear()
    return (
      <>
        <div className="flex justify-center bg-indigo-900 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className="text-xl font-bold">
              Blog Pessoal Generation | Rayribeirost | Copyright {data}
            </p>
            <p className="text-lg">Acesse nossas redes sociais</p>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/raylanderribeiro/"
                target="_blank"
              >
                <LinkedinLogoIcon
                  size={48}
                  weight="light"
                  className="hover:text-indigo-300 transition-colors"
                />
              </a>
              <a href="https://github.com/RayRibeirost" target="_blank">
                <GithubLogoIcon
                  size={48}
                  weight="light"
                  className="hover:text-indigo-300 transition-colors"
                />
              </a>
              <a href="mailto:ribeiroraylander7@gmail.com" target="_blank">
                <GoogleLogoIcon
                  size={48}
                  weight="light"
                  className="hover:text-indigo-300 transition-colors"
                />
              </a>
            </div>
          </div>
        </div>
      </>
    );
}

export default Footer