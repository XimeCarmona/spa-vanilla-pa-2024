import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character =  async () => {

    const id = getHash();
    let character = await getData(id);
    console.log(character);
    const view = `
        <div class="Characters-inner">
            <article class="Character-card">
                <img src="${character.links.patch.small}" alt="${character.name}">
                <h2>${character.name}</h2>
            </article>

            <article class="Characters-card">
                <h3>Fallas:</h3>
                <ul>
                    ${character.failures.map(failure => `
                        <li>
                            Tiempo: ${failure.time} segundos, 
                            Altitud: ${failure.altitude !== null ? failure.altitude : 'N/A'}, 
                            Razón: ${failure.reason}
                        </li>
                    `).join('')}
                </ul>
                <h3>Detalles: <span>${character.details}</span></h3>
                <h3>Numero de vuelo: <span>${character.flight_number}</span></h3>
                <h3>Fecha y hora de despegue: <span>${character.date_utc}</span></h3>
            </article>
        </div> 
    `
    return view
};
export default Character;