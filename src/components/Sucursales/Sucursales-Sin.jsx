
import SucursalCard from './SucursalCard';

const SucursalesSin = () => {
  return (
    <section className="py-10 px-4 bg-gray-100">
    

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Sinaloa</h2>
        <SucursalCard
          nombre="Sucursal Ortopedia"
          direccion="Blvd. Lopez Mateos #1271"
          colonia="Col. Jiquilpan"
          ciudad="Los Mochis"
          telefono="668 688 6506"
          imagen=""
          mapsUrl="https://maps.google.com/?q=Av.+Ju%C3%A1rez+123"
        />
        <SucursalCard
          nombre="Sucursal Pedro Anaya"
          direccion="Bvld. Pedro Anaya #454"
          colonia="Fracc. Villas de Santiago"
          ciudad="Los Mochis"
          telefono="668 177 1294"
          imagen="/images/sucursal-norte.jpg"
          mapsUrl="https://maps.google.com/?q=Calle+Reforma+456"
        />
        <SucursalCard
          nombre="Sucursal Nuevo Horizonte"
          direccion="C. Eustaquio Buelna #3412"
          colonia="Fracc. Nuevo Horizonte"
          ciudad="Los Mochis"
          telefono="668 165 3227"
          imagen="/images/nvo-horizonte.webp"
          mapsUrl="https://maps.google.com/?q=Av.+Ju%C3%A1rez+123"
        />
        <SucursalCard
          nombre="Sucursal Alamos Country"
          direccion="Blvd. Pedro Anaya"
          colonia="Fracc. Alamos Country"
          ciudad="Los Mochis"
          telefono="668 824 7212"
          imagen="/images/sucursal-norte.jpg"
          mapsUrl="https://maps.google.com/?q=Calle+Reforma+456"
        />
        <SucursalCard
          nombre="Sucursal Centro"
          direccion="Blvd. Rosendo G. Castro 320 pte"
          colonia="Col. Centro"
          ciudad="Los Mochis"
          telefono="668 815 8166"
          imagen="/images/nvo-horizonte.webp"
          mapsUrl="https://maps.google.com/?q=Av.+Ju%C3%A1rez+123"
        />
        <SucursalCard
          nombre="Sucursal Centro"
          direccion="C. Zaragoza 385"
          colonia="Col. Centro"
          ciudad="Los Mochis"
          telefono="668 818 2130"
          imagen="/images/sucursal-norte.jpg"
          mapsUrl="https://maps.google.com/?q=Calle+Reforma+456"
        />
        <SucursalCard
          nombre="Sucursal Libertad"
          direccion="C. Tlaxcala 1780"
          coloina="Col. Libertad"
          ciudad="Los Mochis"
          telefono="s/n"
          imagen="/images/nvo-horizonte.webp"
          mapsUrl="https://maps.google.com/?q=Av.+Ju%C3%A1rez+123"
        />
        <SucursalCard
          nombre="Sucursal San Blas"
          direccion="C. 20 de noviembre Poste C18"
          ciudad="San Blas"
          telefono="668 820 8361"
          imagen="/images/sucursal-norte.jpg"
          mapsUrl="https://maps.google.com/?q=Calle+Reforma+456"
        />
        <SucursalCard
          nombre="Sucursal San Miguel Zapotitlan"
          direccion="C. Benito Juarez 14"
          ciudad="San Miguel Zapotitlan"
          telefono="668 813 9125"
          imagen="/images/nvo-horizonte.webp"
          mapsUrl="https://maps.google.com/?q=Av.+Ju%C3%A1rez+123"
        />
        <SucursalCard
          nombre="Sucursal El Fuerte"
          direccion="C. Zaragoza 200"
          ciudad="El Fuerte"
          telefono="698 893 1893"
          imagen="/images/sucursal-norte.jpg"
          mapsUrl="https://maps.google.com/?q=Calle+Reforma+456"
        />
        
      </div>
    </section>

    
  );
};

export default SucursalesSin;
