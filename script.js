const malla = [
  { anio: 'Año 1', semestres: [
    { nombre: '1er Semestre', ramos: [
      'Introducción a la Tecnología Médica (6 SCT)',
      'Química general (6 SCT)',
      'Biología celular (6 SCT)',
      'Anatomía general (6 SCT)',
      'Bases matemáticas (6 SCT)',
      'Sociedad y salud 1 (3 SCT)'] },
    { nombre: '2do Semestre', ramos: [
      'Bioquímica general (4 SCT)',
      'Fisiología general (6 SCT)',
      'Histombriología (4 SCT)',
      'Física general (6 SCT)',
      'Genética (5 SCT)',
      'Sociedad y salud 2 (3 SCT)'] }
  ]},
  { anio: 'Año 2', semestres: [
    { nombre: '3er Semestre', ramos: [
      'Farmacología (4 SCT)',
      'Agentes vivos de la enfermedad (6 SCT)',
      'Fisiología y Evaluación de Sistemas (8 SCT)',
      'Inmunología (5 SCT)',
      'Psicología General y Evolutiva (3 SCT)',
      'Inglés 1 / CFG (3 SCT)',
      'Sociedad y salud 3 (3 SCT)'] },
    { nombre: '4to Semestre', ramos: [
      'Bioquímica aplicada (9 SCT)',
      'Fisiopatología (6 SCT)',
      'Bioestadística aplicada a la investigación (4 SCT)',
      'Metodología moleculares aplicadas a la investigación (7 SCT)',
      'Salud pública (4 SCT)',
      'Inglés 2 / CFG (3 SCT)'] }
  ]},
  { anio: 'Año 3', semestres: [
    { nombre: '5to Semestre', ramos: [
      'Hematología 1 (9 SCT)',
      'Química clínica 1 (9 SCT)',
      'Parasitología (3 SCT)',
      'Salud Comunitaria (5 SCT)',
      'Inglés 3 / CFG (3 SCT)'] },
    { nombre: '6to Semestre', ramos: [
      'Hematología 2 (9 SCT)',
      'Química clínica 2 (10 SCT)',
      'Ética y Bioética (3 SCT)',
      'Gestión y Administración en Salud (3 SCT)',
      'Inglés 4 (3 SCT)'] }
  ]},
  { anio: 'Año 4', semestres: [
    { nombre: '7mo Semestre', ramos: [
      'Medicina transfusional 1 (9 SCT)',
      'Microbiología clínica 1 (9 SCT)',
      'Investigación e innovación básico-clínica (3 SCT)',
      'Intervención Comunitaria (3 SCT)',
      'Gestión y Administración en Tecnología Médica (3 SCT)',
      'Inglés 5 (3 SCT)'] },
    { nombre: '8vo Semestre', ramos: [
      'Medicina transfusional 2 (9 SCT)',
      'Microbiología clínica 2 (9 SCT)',
      'Aseguramiento y control de la calidad (3 SCT)',
      'Proyecto de Investigación e Innovación (3 SCT)',
      'Integración Profesional-Laboral en Tecnología Médica (3 SCT)',
      'Inglés 6 (3 SCT)'] }
  ]},
  { anio: 'Año 5', semestres: [
    { nombre: '9no Semestre', ramos: [
      'Integración Profesional 1 (2 SCT)',
      'Integración Profesional 2 (2 SCT)'] },
    { nombre: '10mo Semestre', ramos: [
      'Práctica Profesional (28 SCT)',
      'Trabajo de Investigación (28 SCT)'] }
  ]}
];

const container = document.getElementById('mallaGrid');
const savedState = JSON.parse(localStorage.getItem('estadoRamos')) || {};

for (const anio of malla) {
  const yearDiv = document.createElement('div');
  yearDiv.className = 'year';
  const yearTitle = document.createElement('h2');
  yearTitle.textContent = anio.anio;
  yearDiv.appendChild(yearTitle);

  for (const sem of anio.semestres) {
    const semesterDiv = document.createElement('div');
    semesterDiv.className = 'semester';
    const semTitle = document.createElement('h3');
    semTitle.textContent = sem.nombre;
    semesterDiv.appendChild(semTitle);

    const list = document.createElement('ul');
    for (const ramo of sem.ramos) {
      const li = document.createElement('li');
      li.textContent = ramo;
      const id = `${anio.anio}-${sem.nombre}-${ramo}`;
      if (savedState[id]) li.classList.add('completed');

      li.onclick = () => {
        li.classList.toggle('completed');
        savedState[id] = li.classList.contains('completed');
        localStorage.setItem('estadoRamos', JSON.stringify(savedState));
      };
      list.appendChild(li);
    }

    semesterDiv.appendChild(list);
    yearDiv.appendChild(semesterDiv);
  }

  container.appendChild(yearDiv);
}

