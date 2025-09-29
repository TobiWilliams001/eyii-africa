import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200/50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
            <div className="flex items-center gap-2">
              <div className="text-red-600">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 10 C30 10, 15 25, 15 45 C15 65, 30 80, 50 80 C70 80, 85 65, 85 45 C85 25, 70 10, 50 10 Z M50 20 C65 20, 75 30, 75 45 C75 60, 65 70, 50 70 C35 70, 25 60, 25 45 C25 30, 35 20, 50 20 Z" />
                  <path d="M40 35 L45 40 L55 30 L60 35 L50 45 L40 35 Z" fill="white" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-bold text-black">Emerge Youth</p>
                <p className="text-xs text-gray-600">Innovation Initiative</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">© 2023 Emerge Youth. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <Link href="/about" className="hover:text-red-600">
              About
            </Link>
            <Link href="/programs" className="hover:text-red-600">
              Programs
            </Link>
            <Link href="/resources" className="hover:text-red-600">
              Resources
            </Link>
            <Link href="/contact" className="hover:text-red-600">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 hover:text-red-600">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46,6.52a.5.5,0,0,0-.47-.32H19.9a3,3,0,0,0-2.6-1.57,2.94,2.94,0,0,0-2.11.86,3,3,0,0,0-1.25.3V7.5C10,7.15,7.93,5.69,7.9,5.67a.5.5,0,0,0-.85.31c-.27,3,1.19,5,2.12,6.14a6.93,6.93,0,0,0,1.37,1.51c-.95,1.1-2.45,1.67-2.47,1.68a.5.5,0,0,0-.24.74c.05.07.24.32.7.54,1.15.56,2.23.69,3.75.69,4.42,0,8.11-3.4,8.48-7.78l1.87-1.87A.5.5,0,0,0,22.46,6.52Z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-red-600">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-red-600">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
