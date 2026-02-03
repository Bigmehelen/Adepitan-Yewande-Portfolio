import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-rose-60 py-20 px-6 lg:px-[8%] border-t border-luxury-black/5">
      <div className="max-w-360 mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        <div className="space-y-4 text-center md:text-left">
          <h2 className="font-serif text-3xl text-luxury-black tracking-tighter">
            Yewande<span className="text-luxury-gray">.</span>
          </h2>
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-luxury-gray">
            Software Engineer & Product Designer
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12">
          {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
            <a
              key={social}
              href={`https://${social.toLowerCase()}.com`}
              target="_blank"
              className="text-xs uppercase tracking-widest font-bold text-luxury-black hover:text-luxury-gray transition-colors pb-1 border-b border-transparent hover:border-luxury-gray"
            >
              {social}
            </a>
          ))}
        </div>

        <div className="text-right">
          <p className="text-[10px] uppercase tracking-widest font-bold text-luxury-gray">
            © {new Date().getFullYear()} Adepitan Yewande Helen. <br />
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
