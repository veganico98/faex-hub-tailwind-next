"use client";
import { Button } from "../ui/Button";
import { Users, BookOpen, MessageCircle, Star } from "lucide-react";
import { ReactNode } from "react";

type CardProps = {
  icon: ReactNode;
  value: string;
  label: string;
};

export default function HeroBanner() {
  return (
    <section className="bg-[#f5f6f8] min-h-[80vh] mt-4 pt-16 md:relative md:block flex items-center justify-center overflow-hidden dark:bg-stone-900">
      <div className="max-w-6xl mx-auto px-6 w-full relative">

        <div className="flex justify-center mb-6">
          <span className="text-sm bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm text-gray-700 dark:bg-stone-600 dark:text-slate-200 dark:!border-stone-800">
            🚀 A rede social acadêmica que faltava
          </span>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight dark:text-slate-200">
            Conecte-se. <br />
            <span className="text-indigo-500">Compartilhe.</span> Aprenda.
          </h1>
          <p className="text-gray-600 dark:text-slate-200 mt-6 text-base md:text-lg">
            faexHUB é a rede social que conecta alunos e professores para
            compartilhar experiências e conteúdos dentro da sala de aula.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button className="bg-black text-white rounded-lg px-6 py-3 hover:scale-105 hover:bg-indigo-500 transition">
              Acessar agora →
            </Button>
            <Button className="border border-gray-300 dark:!border-stone-500 rounded-lg px-6 py-3 hover:bg-blue-500 dark:hover:bg-gray-100 transition dark:bg-stone-500 dark:hover:bg-stone-600">
              Saiba mais
            </Button>
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-4 absolute left-25 xl:left-10 top-1/2 -translate-y-1/2 animate-bounce [animation-duration:3s]">
          <Card 
            icon={<Users size={18} />} 
            value="500+" 
            label="Alunos" />
        </div>
        <div className="hidden lg:flex flex-col gap-4 absolute left-5 xl:-left-15 top-4/5 -translate-y-1/2 animate-bounce [animation-duration:3s]">
          <Card
            icon={<BookOpen size={18} />}
            value="1.200+"
            label="Conteúdos"
          />
        </div>

        <div className="hidden lg:flex flex-col gap-4 absolute right-25 xl:right-10 top-1/2 -translate-y-1/2 animate-bounce [animation-duration:3s]">
          <Card
            icon={<MessageCircle size={18} />}
            value="10.000+"
            label="Interações"
          />
        </div>
        <div className="hidden lg:flex flex-col gap-4 absolute right-5 xl:-right-15 top-4/5 -translate-y-1/2 animate-bounce [animation-duration:3s]">
          <Card 
            icon={<Star size={18} />} 
            value="100%" 
            label="Gratuito" />
        </div>
      </div>

      <div className="hidden md:flex items-end justify-center absolute -bottom-6 left-1/2 -translate-x-1/2 z-0 -space-x-6 lg:-space-x-10 text-white">

        <div className="md:w-40 md:h-60 lg:w-70 lg:h-80 bg-sky-300 translate-y-20 -rotate-6 rounded-2xl z-0 flex justify-center flex-col p-2 lg:p-6 -space-y-3">
          <div>
            <h1 className="font-bold text-xl">Eduardo Santos</h1>
            <p className="text-[10px] text-start">Direito</p>
          </div>
          <img className="-rotate-12" src="/personagem-03.png" alt="" />
        </div>

        <div className="md:w-40 md:h-60 lg:w-70 lg:h-80 bg-pink-300 translate-y-8 -rotate-6 rounded-2xl z-10 flex justify-center flex-col p-2 lg:p-6 -space-y-3">
          <div>
            <h1 className="font-bold text-xl">João Victor</h1>
            <p className="text-[10px] text-start">Psicologia</p>
          </div>
          <img className="-rotate-12" src="/personagem-04.png" alt="" />
        </div>

        <div className="md:w-40 md:h-60 lg:w-70 lg:h-80 bg-indigo-300 z-20 rounded-2xl flex justify-center flex-col p-2 lg:p-6 -space-y-3">
          <div className="">
            <h1 className="font-bold text-xl">Nicolas Linares</h1>
            <p className="text-[10px] text-start">Desenvolvimento de sistemas</p>
          </div>
          <img className=" w- h-auto rotate-12" src="/personagem-01.png" alt="" />
        </div>

        <div className="md:w-40 md:h-60 lg:w-70 lg:h-80 bg-orange-300 translate-y-8 rotate-6 rounded-2xl z-10 flex justify-center flex-col p-2 lg:p-6 -space-y-3">
          <div>
            <h1 className="font-bold text-xl">Luiz Eduardo</h1>
            <p className="text-[10px] text-start">Administração</p>
          </div>
          <img className="rotate-12" src="/personagem-02.png" alt="" />
        </div>

        <div className="md:w-40 md:h-60 lg:w-70 lg:h-80 bg-green-300 translate-y-20 rotate-6 rounded-2xl z-0 flex justify-center flex-col p-2 lg:p-6 -space-y-3">
          <div>
            <h1 className="font-bold text-xl">Luiz Gabriel</h1>
            <p className="text-[10px] text-start">Gestão da Produção Industrial</p>
          </div>
          <img className="rotate-12" src="/personagem-05.png" alt="" />
        </div>

      </div>
    </section>
  );
}

function Card({ icon, value, label }: CardProps) {
  return (
    <div className="flex items-center gap-3 bg-white border border-gray-200 dark:!border-stone-600 rounded-xl px-4 py-3 shadow-sm hover:shadow-md dark:bg-stone-500/50 transition">
      <div className="bg-indigo-50 dark:bg-stone-500/50 text-indigo-500 dark:text-stone-200 p-2 rounded-lg">{icon}</div>
      <div>
        <p className="text-sm font-semibold text-gray-900 dark:text-slate-300">{value}</p>
        <p className="text-xs text-gray-500 dark:text-slate-200">{label}</p>
      </div>
    </div>
  );
}


