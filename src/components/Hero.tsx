"use client";
import NetworkBackground from "@/components/NetworkBackground";
import Typewriter from 'typewriter-effect';
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative w-screen -mx-[calc((100vw-100%)/2)] py-12 bg-zinc-950 border-b border-zinc-800 overflow-hidden">
      <NetworkBackground />
      <div className="max-w-5xl mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Colonna Sinistra */}
          <div className="space-y-6 w-full text-center lg:text-left">
            <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none">
              Lab<span className="text-emerald-500">Z</span>
              <div className="text-5xl md:text-7xl mt-2 font-black text-transparent" 
                  style={{ WebkitTextStroke: '1px #10b981', letterSpacing: '-0.05em' }}>
                v0.1
              </div>
            </h1>
              <div className="text-zinc-400 text-lg font-mono">
                <Typewriter
                  options={{
                    strings: [
                      '> Decoding the future of tech.', 
                      '> Architecting secure networks.', 
                      '> Automating infrastructure.', 
                      '> Building scalable systems.'
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </div>
            <div className="flex gap-4 justify-center lg:justify-start mt-6">
              <Button href="/workshops">Explore Now →</Button>
              <Button href="/system" variant="secondary">About System</Button>
            </div>
          </div>

          {/* Colonna Destra (Stack Terminali) */}
          <div className="relative w-full min-h-[450px] lg:h-[500px] mt-10 lg:mt-0">
             <div className="flex flex-col-reverse lg:block">
               {/* Terminale 4 (Sotto - Traceroute) */}
              <div className="lg:absolute top-0 right-0 w-full lg:w-[90%] lg:rotate-3 bg-zinc-900 border border-zinc-800 rounded-lg p-6 opacity-30 shadow-2xl mb-4 lg:mb-0 transition-all hover:opacity-50">
                <div className="text-zinc-500 font-mono text-xs">$ traceroute 8.8.8.8</div>
                <div className="text-zinc-700 text-[10px] mt-2">1  192.168.1.1  0.5ms</div>
              </div>

              {/* Terminale 3 (Sotto - Nmap) */}
              <div className="lg:absolute top-12 right-12 w-full lg:w-[90%] lg:rotate-2 bg-zinc-900 border border-zinc-800 rounded-lg p-6 opacity-50 shadow-2xl mb-4 lg:mb-0 transition-all hover:opacity-70">
                <div className="text-zinc-500 font-mono text-xs">$ nmap -sV 192.168.1.50</div>
                <div className="text-zinc-700 text-[10px] mt-2">80/tcp open  http  Apache</div>
              </div>

              {/* Terminale 2 (Sotto - Netstat) */}
              <div className="lg:absolute top-24 right-24 w-full lg:w-[90%] lg:rotate-1 bg-zinc-900 border border-zinc-800 rounded-lg p-6 opacity-70 shadow-2xl mb-4 lg:mb-0 transition-all hover:opacity-90">
                <div className="text-zinc-500 font-mono text-xs">$ netstat -tulnp</div>
                <div className="text-zinc-700 text-[10px] mt-2">tcp  0  0  0.0.0.0:80  0.0.0.0:* LISTEN</div>
              </div>

              {/* Terminale 1 (Sopra - IP Active) */}
              <div className="lg:absolute top-36 right-36 w-full lg:w-[90%] bg-zinc-900 border border-emerald-900/50 rounded-lg shadow-2xl p-8 font-mono text-sm z-20 mb-4 lg:mb-0">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-3 text-zinc-300">
                  <p><span className="text-emerald-500">$</span> ip -br addr</p>
                  <div className="text-emerald-500 text-xs">
                    lo UNKNOWN 127.0.0.1/8<br/>
                    eth0 UP 192.168.1.50/24
                  </div>
                  <p className="text-emerald-500 mt-4 text-xs animate-pulse"> troubleshooting active...</p>
                </div>
              </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}