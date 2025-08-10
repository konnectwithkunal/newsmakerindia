const Clients = () => {
  const clients = [
    { name: "Google", logo: "/icons/abbott.png" },
    { name: "Netflix", logo: "/icons/apollo.png" },
    { name: "Snapchat", logo: "/icons/bio.png" },
    { name: "Verily", logo: "/icons/cadila.png" },
    { name: "Samsung", logo: "/icons/eris.png" },
    { name: "YouTube", logo: "/icons/fortis.png" },
    { name: "Tinder", logo: "/icons/jh.png" },
    { name: "Gemini", logo: "/icons/lifewins.png" },
    { name: "Grab", logo: "/icons/medtronics.png" },
    { name: "Prime Video", logo: "/icons/merlin2.png" },
    { name: "Swiggy", logo: "/icons/park.png" },
    { name: "Robinhood", logo: "/icons/tac.png" },
    { name: "Google", logo: "/icons/aimil.png" },
    { name: "Netflix", logo: "/icons/bharat.png" },
    { name: "Snapchat", logo: "/icons/cor.png" },
    { name: "Verily", logo: "/icons/cyble.png" },
    { name: "Samsung", logo: "/icons/dava.png" },
    { name: "YouTube", logo: "/icons/dens2.png" },
    { name: "Tinder", logo: "/icons/h2s.png" },
    { name: "Gemini", logo: "/icons/iato.png" },
    { name: "Grab", logo: "/icons/know.png" },
    { name: "Prime Video", logo: "/icons/nation.png" },
    { name: "Swiggy", logo: "/icons/plutos.png" },
    { name: "Robinhood", logo: "/icons/smfg.png" }
  ];

  return (
    <section id="people" className="py-20 bg-[#fff]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl text-black md:text-5xl font-bold mb-8 md:mb-16 text-center">Clients</h2>
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
              <img 
                src={client.logo} 
                alt={`${client.name} Logo`}
                className="max-h-16 w-auto  hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;