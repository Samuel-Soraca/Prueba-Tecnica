function cambiarEstilo() {
    let marca = document.getElementById("marca").value;
    let body = document.body;
    let select = document.getElementById("marca");

    body.className = "default";
    select.style.backgroundColor = "";
    select.style.color = "";

    document
        .querySelectorAll(
            "#form-Americanino, #form-AmericanEagle, #form-Chevignon, #form-Esprit, #form-Rifle"
        )
        .forEach((div) => div.classList.add("d-none"));

    if (marca === "Americanino") {
        body.className = "Americanino";
        select.style.backgroundColor = "#1e3b8a67";
        select.style.color = "#ffffffff";
        document.getElementById("form-Americanino").classList.remove("d-none");
    } else if (marca === "AmericanEagle") {
        body.className = "AmericanEagle";
        select.style.backgroundColor = "rgba(255, 236, 194, 0.63)";
        select.style.color = "rgba(65, 42, 0, 1)";
        document.getElementById("form-AmericanEagle").classList.remove("d-none");
    } else if (marca === "Chevignon") {
        body.className = "Chevignon";
        select.style.backgroundColor = "#5a332175";
        select.style.color = "rgba(255, 234, 222, 1)";
        document.getElementById("form-Chevignon").classList.remove("d-none");
    } else if (marca === "Esprit") {
        body.className = "Esprit";
        select.style.backgroundColor = "#ffffffff";
        select.style.color = "#000000ff";
        document.getElementById("form-Esprit").classList.remove("d-none");
    } else if (marca === "Rifle") {
        body.className = "Rifle";
        select.style.backgroundColor = "#00000081";
        select.style.color = "#ffa837ff";
        document.getElementById("form-Rifle").classList.remove("d-none");
    }
}

const locations = {
    colombia: {
        Amazonas: ["Leticia"],
        Antioquia: ["Medellín"],
        Arauca: ["Arauca"],
        Atlántico: ["Barranquilla"],
        Bolívar: ["Cartagena de Indias"],
        Boyacá: ["Tunja"],
        Caldas: ["Manizales"],
        Caquetá: ["Florencia"],
        Casanare: ["Yopal"],
        Cauca: ["Popayán"],
        Cesar: ["Valledupar"],
        Chocó: ["Quibdó"],
        Córdoba: ["Montería"],
        Cundinamarca: ["Bogotá D.C."],
        Guainía: ["Inírida"],
        Guaviare: ["San José del Guaviare"],
        Huila: ["Neiva"],
        Guajira: ["Riohacha"],
        Magdalena: ["Santa Marta"],
        Meta: ["Villavicencio"],
        Nariño: ["Pasto"],
        Norte_Santander: ["Cúcuta"],
        Putumayo: ["Mocoa"],
        Quindío: ["Armenia"],
        Risaralda: ["Pereira"],
        SanAndrés_Providencia: ["San Andrés"],
        Santander: ["Bucaramanga"],
        Sucre: ["Sincelejo"],
        Tolima: ["Ibagué"],
        Valle_del_Cauca: ["Cali"],
        Vaupés: ["Mitú"],
        Vichada: ["Puerto Carreño"],
    },
    argentina: {
        Buenos_Aires: ["La Plata", "Mar del Plata", "Bahía Blanca", "Tandil"],
        Catamarca: ["San Fernando del Valle de Catamarca", "Belén"],
        Chaco: ["Resistencia", "Presidencia Roque Sáenz Peña"],
        Chubut: ["Rawson", "Comodoro Rivadavia", "Trelew"],
        Córdoba: ["Córdoba", "Villa Carlos Paz", "Río Cuarto"],
        Corrientes: ["Corrientes", "Goya"],
        Entre_Ríos: ["Paraná", "Concordia", "Gualeguaychú"],
        Formosa: ["Formosa", "Clorinda"],
        Jujuy: ["San Salvador de Jujuy", "Palpalá"],
        La_Pampa: ["Santa Rosa", "General Pico"],
        La_Rioja: ["La Rioja", "Chilecito"],
        Mendoza: ["Mendoza", "San Rafael", "Godoy Cruz"],
        Misiones: ["Posadas", "Oberá", "Eldorado"],
        Neuquén: ["Neuquén", "San Martín de los Andes", "Cutral Có"],
        Río_Negro: ["Viedma", "San Carlos de Bariloche", "General Roca"],
        Salta: ["Salta", "San Ramón de la Nueva Orán", "Tartagal"],
        San_Juan: ["San Juan", "Caucete"],
        San_Luis: ["San Luis", "Villa Mercedes"],
        Santa_Cruz: ["Río Gallegos", "Caleta Olivia", "El Calafate"],
        Santa_Fe: ["Santa Fe", "Rosario", "Rafaela"],
        Santiago_del_Estero: ["Santiago del Estero", "La Banda"],
        Tierra_del_Fuego: ["Ushuaia", "Río Grande"],
        Tucumán: ["San Miguel de Tucumán", "Tafí Viejo"],
    },
    chile: {
        Arica_Parinacota: ["Arica"],
        Tarapacá: ["Iquique"],
        Antofagasta: ["Antofagasta"],
        Atacama: ["Copiapó"],
        Coquimbo: ["La Serena"],
        Valparaíso: ["Valparaíso"],
        Metropolitana_de_Santiago: ["Santiago"],
        Libertador_General_Bernardo_OHiggins: ["Rancagua"],
        Maule: ["Talca"],
        Ñuble: ["Chillán"],
        Biobío: ["Concepción"],
        Araucanía: ["Temuco"],
        Los_Ríos: ["Valdivia"],
        Los_Lagos: ["Puerto Montt"],
        Aysén_del_General_Carlos_Ibáñez_del_Campo: ["Coyhaique"],
        Magallanes_Antártica_Chilena: ["Punta Arenas"],
    },
    ecuador: {
        Azuay: ["Cuenca"],
        Bolívar: ["Guaranda"],
        Cañar: ["Azogues"],
        Carchi: ["Tulcán"],
        Chimborazo: ["Riobamba"],
        Cotopaxi: ["Latacunga"],
        El_Oro: ["Machala"],
        Esmeraldas: ["Esmeraldas"],
        Galápagos: ["Puerto Baquerizo Moreno"],
        Guayas: ["Guayaquil"],
        Imbabura: ["Ibarra"],
        Loja: ["Loja"],
        Los_Ríos: ["Babahoyo"],
        Manabí: ["Portoviejo"],
        Morona_Santiago: ["Macas"],
        Napo: ["Tena"],
        Orellana: ["Puerto Francisco de Orellana"],
        Pastaza: ["Puyo"],
        Pichincha: ["Quito"],
        Santa_Elena: ["Santa Elena"],
        Santo_Domingo_de_los_Tsáchilas: ["Santo Domingo"],
        Sucumbíos: ["Nueva Loja"],
        Tungurahua: ["Ambato"],
        Zamora_Chinchipe: ["Zamora"],
    },
    venezuela: {
        Amazonas: ["Puerto Ayacucho"],
        Anzoátegui: ["Barcelona"],
        Apure: ["San Fernando de Apure"],
        Aragua: ["Maracay"],
        Barinas: ["Barinas"],
        Bolívar: ["Ciudad Bolívar"],
        Carabobo: ["Valencia"],
        Cojedes: ["San Carlos"],
        Delta_Amacuro: ["Tucupita"],
        Falcón: ["Coro"],
        Guárico: ["San Juan de los Morros"],
        Lara: ["Barquisimeto"],
        Mérida: ["Mérida"],
        Miranda: ["Los Teques"],
        Monagas: ["Maturín"],
        Nueva_Esparta: ["La Asunción"],
        Portuguesa: ["Guanare"],
        Sucre: ["Cumaná"],
        Táchira: ["San Cristóbal"],
        Trujillo: ["Trujillo"],
        Vargas: ["La Guaira"],
        Yaracuy: ["San Felipe"],
        Zulia: ["Maracaibo"],
        Distrito_Capital: ["Caracas"],
        Dependencias_Federales: ["La Orchila"],
    },
    usa: {
        Alabama: ["Montgomery", "Birmingham", "Mobile", "Huntsville"],
        Alaska: ["Juneau", "Anchorage", "Fairbanks"],
        Arizona: ["Phoenix", "Tucson", "Mesa", "Scottsdale"],
        Arkansas: ["Little Rock", "Fayetteville", "Fort Smith"],
        California: ["Los Angeles", "San Francisco", "San Diego", "Sacramento"],
        Colorado: ["Denver", "Colorado Springs", "Aurora"],
        Connecticut: ["Hartford", "New Haven", "Stamford"],
        Delaware: ["Dover", "Wilmington"],
        Florida: ["Miami", "Orlando", "Tampa", "Jacksonville"],
        Georgia: ["Atlanta", "Savannah", "Augusta"],
        Hawaii: ["Honolulu", "Hilo"],
        Idaho: ["Boise", "Idaho Falls"],
        Illinois: ["Chicago", "Springfield", "Naperville"],
        Indiana: ["Indianapolis", "Fort Wayne", "Evansville"],
        Iowa: ["Des Moines", "Cedar Rapids"],
        Kansas: ["Topeka", "Wichita", "Kansas City"],
        Kentucky: ["Frankfort", "Louisville", "Lexington"],
        Louisiana: ["Baton Rouge", "New Orleans", "Shreveport"],
        Maine: ["Augusta", "Portland"],
        Maryland: ["Annapolis", "Baltimore"],
        Massachusetts: ["Boston", "Cambridge", "Worcester"],
        Michigan: ["Lansing", "Detroit", "Grand Rapids"],
        Minnesota: ["Saint Paul", "Minneapolis", "Duluth"],
        Mississippi: ["Jackson", "Biloxi"],
        Missouri: ["Jefferson City", "St. Louis", "Kansas City"],
        Montana: ["Helena", "Billings"],
        Nebraska: ["Lincoln", "Omaha"],
        Nevada: ["Carson City", "Las Vegas", "Reno"],
        New_Hampshire: ["Concord", "Manchester"],
        New_Jersey: ["Trenton", "Newark", "Jersey City"],
        New_Mexico: ["Santa Fe", "Albuquerque", "Las Cruces"],
        New_York: ["Albany", "New York City", "Buffalo", "Rochester"],
        North_Carolina: ["Raleigh", "Charlotte", "Durham"],
        North_Dakota: ["Bismarck", "Fargo"],
        Ohio: ["Columbus", "Cleveland", "Cincinnati"],
        Oklahoma: ["Oklahoma City", "Tulsa"],
        Oregon: ["Salem", "Portland", "Eugene"],
        Pennsylvania: ["Harrisburg", "Philadelphia", "Pittsburgh"],
        Rhode_Island: ["Providence", "Newport"],
        South_Carolina: ["Columbia", "Charleston"],
        South_Dakota: ["Pierre", "Sioux Falls"],
        Tennessee: ["Nashville", "Memphis", "Knoxville"],
        Texas: ["Austin", "Houston", "Dallas", "San Antonio"],
        Utah: ["Salt Lake City", "Provo", "Ogden"],
        Vermont: ["Montpelier", "Burlington"],
        Virginia: ["Richmond", "Virginia Beach", "Norfolk"],
        Washington: ["Olympia", "Seattle", "Spokane"],
        West_Virginia: ["Charleston", "Morgantown"],
        Wisconsin: ["Madison", "Milwaukee", "Green Bay"],
        Wyoming: ["Cheyenne", "Casper"],
    },
    mexico: {
        Aguascalientes: ["Aguascalientes"],
        Baja_California: ["Mexicali", "Tijuana"],
        Baja_California_Sur: ["La Paz", "Cabo San Lucas"],
        Campeche: ["San Francisco de Campeche", "Ciudad del Carmen"],
        Chiapas: ["Tuxtla Gutiérrez", "San Cristóbal de las Casas"],
        Chihuahua: ["Chihuahua", "Ciudad Juárez"],
        Coahuila: ["Saltillo", "Torreón"],
        Colima: ["Colima", "Manzanillo"],
        Durango: ["Victoria de Durango"],
        Guanajuato: ["Guanajuato", "León"],
        Guerrero: ["Chilpancingo", "Acapulco"],
        Hidalgo: ["Pachuca de Soto"],
        Jalisco: ["Guadalajara", "Puerto Vallarta"],
        México: ["Toluca de Lerdo", "Naucalpan", "Ecatepec"],
        Michoacán: ["Morelia", "Uruapan"],
        Morelos: ["Cuernavaca"],
        Nayarit: ["Tepic"],
        Nuevo_León: ["Monterrey"],
        Oaxaca: ["Oaxaca de Juárez"],
        Puebla: ["Puebla de Zaragoza"],
        Querétaro: ["Santiago de Querétaro"],
        Quintana_Roo: ["Chetumal", "Cancún", "Playa del Carmen"],
        San_Luis_Potosí: ["San Luis Potosí"],
        Sinaloa: ["Culiacán", "Mazatlán"],
        Sonora: ["Hermosillo", "Ciudad Obregón"],
        Tabasco: ["Villahermosa"],
        Tamaulipas: ["Ciudad Victoria", "Tampico"],
        Tlaxcala: ["Tlaxcala de Xicohténcatl"],
        Veracruz: ["Xalapa", "Veracruz"],
        Yucatán: ["Mérida"],
        Zacatecas: ["Zacatecas"],
    },
    panama: {
        Bocas_del_Toro: ["Bocas del Toro"],
        Coclé: ["Penonomé"],
        Colón: ["Colón"],
        Chiriquí: ["David"],
        Darién: ["La Palma"],
        Herrera: ["Chitré"],
        Los_Santos: ["Las Tablas"],
        Panamá: ["Ciudad de Panamá"],
        Panamá_Este: ["Chepo"],
        Panamá_Oeste: ["La Chorrera"],
        Veraguas: ["Santiago de Veraguas"],
        Guna_Yala: ["El Porvenir"],
        Emberá_Wounaan: ["Unión Chocó"],
        Ngäbe_Buglé: ["Chichica"],
    },
    canada: {
        Alberta: ["Edmonton", "Calgary"],
        British_Columbia: ["Victoria", "Vancouver"],
        Manitoba: ["Winnipeg"],
        New_Brunswick: ["Fredericton", "Moncton"],
        Newfoundland_and_Labrador: ["St. John’s"],
        Northwest_Territories: ["Yellowknife"],
        Nova_Scotia: ["Halifax"],
        Nunavut: ["Iqaluit"],
        Ontario: ["Toronto", "Ottawa"],
        Prince_Edward_Island: ["Charlottetown"],
        Quebec: ["Quebec City", "Montreal"],
        Saskatchewan: ["Regina", "Saskatoon"],
        Yukon: ["Whitehorse"],
    },
    peru: {
        Amazonas: ["Chachapoyas"],
        Áncash: ["Huaraz"],
        Apurímac: ["Abancay"],
        Arequipa: ["Arequipa"],
        Ayacucho: ["Ayacucho"],
        Cajamarca: ["Cajamarca"],
        Callao: ["Callao"],
        Cusco: ["Cusco"],
        Huancavelica: ["Huancavelica"],
        Huánuco: ["Huánuco"],
        Ica: ["Ica"],
        Junín: ["Huancayo"],
        La_Libertad: ["Trujillo"],
        Lambayeque: ["Chiclayo"],
        Lima: ["Lima"],
        Loreto: ["Iquitos"],
        Madre_de_Dios: ["Puerto Maldonado"],
        Moquegua: ["Moquegua"],
        Pasco: ["Cerro de Pasco"],
        Piura: ["Piura"],
        Puno: ["Puno"],
        San_Martín: ["Moyobamba"],
        Tacna: ["Tacna"],
        Tumbes: ["Tumbes"],
        Ucayali: ["Pucallpa"],
    },
    costa_rica: {
        San_José: ["San José"],
        Alajuela: ["Alajuela"],
        Cartago: ["Cartago"],
        Heredia: ["Heredia"],
        Guanacaste: ["Liberia"],
        Puntarenas: ["Puntarenas"],
        Limón: ["Limón"],
    },
};

const data = {
    americanino: {
        colombia: locations.colombia,
        chile: locations.chile,
        ecuador: locations.ecuador,
        panama: locations.panama,
        mexico: locations.mexico,
        costa_rica: locations.costa_rica,
    },
    americaneagle: {
        canada: locations.canada,
        colombia: locations.colombia,
        mexico: locations.mexico,
    },
    chevignon: {
        colombia: locations.colombia,
        chile: locations.chile,
        panama: locations.panama,
        mexico: locations.mexico,
        costa_rica: locations.costa_rica,
        peru: locations.peru,
        ecuador: locations.ecuador,
        usa: locations.usa,
    },
    esprit: {
        colombia: locations.colombia,
        chile: locations.chile,
        panama: locations.panama,
        mexico: locations.mexico,
        costa_rica: locations.costa_rica,
        peru: locations.peru,
        ecuador: locations.ecuador,
        venezuela: locations.venezuela,
        canada: locations.canada,
    },
    rifle: {
        colombia: locations.colombia,
    },
};

function cargarUbicacion(marca, paisId, depId, ciuId) {
    const paisSelect = document.getElementById(paisId);
    const depSelect = document.getElementById(depId);
    const ciuSelect = document.getElementById(ciuId);

    if (!paisSelect) return;

    paisSelect.addEventListener("change", () => {
        const pais = paisSelect.value;
        depSelect.innerHTML = "<option value=''>Departamento</option>";
        ciuSelect.innerHTML = "<option value=''>Ciudad</option>";

        if (pais && data[marca] && data[marca][pais]) {
            Object.keys(data[marca][pais]).forEach((dep) => {
                let option = document.createElement("option");
                option.value = dep;
                option.textContent = dep;
                depSelect.appendChild(option);
            });
        }
    });

    depSelect.addEventListener("change", () => {
        const pais = paisSelect.value;
        const dep = depSelect.value;
        ciuSelect.innerHTML = "<option value=''>Ciudad</option>";

        if (dep && data[marca][pais][dep]) {
            data[marca][pais][dep].forEach((ciudad) => {
                let option = document.createElement("option");
                option.value = ciudad;
                option.textContent = ciudad;
                ciuSelect.appendChild(option);
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    cargarUbicacion(
        "americanino",
        "pais-Americanino",
        "departamento-Americanino",
        "ciudad-Americanino"
    );
    cargarUbicacion(
        "americaneagle",
        "pais-Eagle",
        "departamento-Eagle",
        "ciudad-Eagle"
    );
    cargarUbicacion(
        "chevignon",
        "pais-Chevignon",
        "departamento-Chevignon",
        "ciudad-Chevignon"
    );
    cargarUbicacion(
        "esprit",
        "pais-Esprit",
        "departamento-Esprit",
        "ciudad-Esprit"
    );
    cargarUbicacion("rifle", "pais-Rifle", "departamento-Rifle", "ciudad-Rifle");
});

function enviarFormulario(marca) {
    const form = document.getElementById(`form-${marca}`);
    const cliente = {
        tipoIdentificacion: document.getElementById("tipoIdentificacion").value,
        numeroIdentificacion: document.getElementById("numeroIdentificacion").value,
        nombres: document.getElementById("nombres").value,
        apellidos: document.getElementById("apellidos").value,
        fechaNacimiento: document.getElementById("fechaNacimiento").value,
        direccion: document.getElementById("direccion").value,
        pais: document.getElementById(`pais-${marca}`).value,
        departamento: document.getElementById(`departamento-${marca}`).value,
        ciudad: document.getElementById(`ciudad-${marca}`).value,
        marca: marca,
    };

    fetch("http://localhost:8080/api/clientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cliente),
    })
        .then((res) => res.json())
        .then((data) => {
            alert(`Cliente registrado en ${marca} 🚀`);
            console.log("Respuesta del backend:", data);
        })
        .catch((err) => console.error("Error:", err));
}
