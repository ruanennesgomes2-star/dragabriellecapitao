import { Instagram, MapPin, Phone, Clock, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A0408] pt-12 md:pt-16 pb-8 text-white/60">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 mb-12 md:mb-16 text-center md:text-left">
          <div className="col-span-1 md:col-span-2 flex justify-center md:justify-start">
            <img src="/logogabi.PNG" alt="Dra. Gabrielle Capitão Logo" className="h-40 md:h-64 lg:h-80 w-auto object-contain -mt-4 md:mt-0 mb-0 md:mb-4 transform translate-x-0 md:translate-x-6" />
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-4 md:mb-6">Redes Sociais</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://www.instagram.com/dentista.gabicapitao?igsh=NTY5emNucGthY2R0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all text-white">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me/5521971783571" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all text-white">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-4 md:mb-6">Informações</h4>
            <ul className="space-y-4 font-light text-sm text-center md:text-left">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                <FileText className="w-4 h-4 md:mt-0.5 text-secondary shrink-0" />
                <span>CRO: 50770 RJ</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                <Phone className="w-4 h-4 md:mt-0.5 text-secondary shrink-0" />
                <span>(21) 97178-3571</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                <MapPin className="w-4 h-4 md:mt-0.5 text-secondary shrink-0" />
                <span>Avenida Dedo de Deus, 69 - Sala 2, Guapimirim</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                <Clock className="w-4 h-4 md:mt-0.5 text-secondary shrink-0" />
                <div>
                  <p>Terça a sexta: 09:00h às 18:00h</p>
                  <p className="mt-1">1° e 3° sábado: 09:00h às 12:00h</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-4 md:mb-6">Convênios Aceitos</h4>
            <ul className="space-y-3 font-light text-xs opacity-80 flex flex-col items-center md:items-start">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Bradesco Dental
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Odonto Serv
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Odontoprev
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Privian Odonto
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Odonto System
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Bradescard
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Rede Dental
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Riachuelo R
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Brasil Dental
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between font-light text-xs gap-4">
          <p>© {new Date().getFullYear()} Dra. Gabrielle Capitão. Todos os direitos reservados.</p>
          <p>Desenvolvido por Ruan Ennes</p>
        </div>
      </div>
    </footer>
  );
}
