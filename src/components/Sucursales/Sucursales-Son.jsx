
import SucursalCard from './SucursalCard';

const SucursalesSon = () => {
  return (
    <section className="py-10 px-4 bg-gray-100">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Sonora</h2>
        <SucursalCard
          nombre="Sucursal Miguel Aleman"
          direccion="Av. Miguel Aleman 3985 - Local 5"
          colonia = "Col. Centro"
          ciudad="Ciudad Obregon"
          telefono="644 415 2541"
          imagen="/images/nvo-horizonte.webp"
          mapsUrl="https://maps.google.com/?q=Av.+Ju%C3%A1rez+123"
        />
        <SucursalCard
          nombre="Sucursal Central"
          direccion="Rodolfo Elias Calles 723 pte - Local B"
          colonia="Col. Prados del Tepeyac"
          ciudad="Ciudad Obregon"
          telefono="644 412 7277"
          imagen="/images/sucursal-norte.jpg"
          mapsUrl="https://maps.google.com/?q=Calle+Reforma+456"
        />
        <SucursalCard
          nombre="Sucursal Paris"
          direccion="Rodolfo Elias Calles 1787"
          colonia = "Col. Fovisste 2"
          ciudad="Ciudad Obregon"
          telefono="644 690 9779"
          imagen="/images/nvo-horizonte.webp"
          mapsUrl="https://maps.google.com/?q=Av.+Ju%C3%A1rez+123"
        />
        <SucursalCard
          nombre="Sucursal Galeana"
          direccion="C. Galeana 817"
          colonia = "Col. Centro"
          ciudad="Ciudad Obregon"
          telefono="644 144 1208"
          imagen="/images/sucursal-norte.jpg"
          mapsUrl="https://maps.google.com/?q=Calle+Reforma+456"
        />
        <SucursalCard
          nombre="Sucursal Jalisco"
          direccion="Plaza Ley Jalisco - Local 10"
          colonia = "Mucipio Libre"
          ciudad="Ciudad Obregon"
          telefono="644 179 0634"
          imagen="/images/nvo-horizonte.webp"
          mapsUrl="https://maps.google.com/?q=Av.+Ju%C3%A1rez+123"
        />
        <SucursalCard
          nombre="Sucursal Plano Oriente"
          direccion="No reeleccion 1621"
          colonia="Col. Benito Juarez"
          ciudad="Ciudad Obregon"
          telefono="644 688 1827"
          imagen="/images/sucursal-norte.jpg"
          mapsUrl="https://maps.google.com/?q=Calle+Reforma+456"
        />
        <SucursalCard
          nombre="Sucursal Guerrero"
          direccion="C. Guerrero 2258"
          colonia = "Infonavit Yucujimari"
          ciudad="Ciudad Obregon"
          telefono="644 414 5920"
          imagen="/images/nvo-horizonte.webp"
          mapsUrl="https://maps.google.com/?q=Av.+Ju%C3%A1rez+123"
        />
        <SucursalCard
          nombre="Sucursal Hermosillo"
          direccion="Av. Morelia 18"
          colonia= "Col. Centro"
          ciudad="Hermosillo"
          telefono="662 217 9259"
          imagen="/images/sucursal-norte.jpg"
          mapsUrl="https://maps.google.com/?q=Calle+Reforma+456"
        />
        <SucursalCard
          nombre="Sucursal Gaymas"
          direccion="Av. Serdan 01"
          colonia = "Col. Centro"
          ciudad="Guaymas"
          telefono="622 113 2369"
          imagen="/images/nvo-horizonte.webp"
          mapsUrl="https://maps.google.com/?q=Av.+Ju%C3%A1rez+123"
        />
        <SucursalCard
          nombre="Sucursal Huatabampo"
          direccion="C. Hidalgo 19"
          colonia= "Col. Centro"
          ciudad="Huatabampo"
          telefono="647 112 1408"
          imagen="/images/sucursal-norte.jpg"
          mapsUrl="https://maps.google.com/?q=Calle+Reforma+456"
        />
       
      </div>

      
    </section>

    
  );
};

export default SucursalesSon;
