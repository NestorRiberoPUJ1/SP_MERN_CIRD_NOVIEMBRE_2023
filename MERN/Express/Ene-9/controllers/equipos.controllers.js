
const equipos = [
    { nombre: "Atlético Nacional", pais: "Colombia" },
    { nombre: "Libertad", pais: "Paraguay" },
    { nombre: "Colo-Colo", pais: "Chile" },
    { nombre: "River Plate", pais: "Argentina" },
    { nombre: "Flamengo", pais: "Brasil" },
    { nombre: "LDU", pais: "Ecuador" },
    { nombre: "Nacional", pais: "Uruguay" },
];


exports.getEquipos = (req, res) => {
    res.status(200);
    res.json(equipos);
};

exports.createEquipo = (req, res) => {
    console.log(req.body);
    equipos.push(req.body);
    res.status(201);
    res.json(equipos);
}

exports.getEquipoById = (req, res) => {
    const id = req.params.id;
    const equipo = equipos[id];
    console.log(equipo);
    if (equipo === undefined) {
        res.status(404);
        res.json({ error: "equipo no encontrado" });

        return;
    }
    res.status(200);
    res.json(equipo);
}

exports.updateEquipoById = (req, res) => {
    const id = req.params.id;
    const equipo = equipos[id];
    console.log(equipo);
    if (equipo === undefined) {
        res.status(404);
        res.json({ error: "equipo no encontrado" });

        return;
    }
    equipos[id] = req.body;
    const editedEquipo = equipos[id];
    res.status(200);
    res.json(editedEquipo);
}

exports.deleteEquipoById = (req, res) => {
    const id = req.params.id;
    const equipo = equipos[id];
    console.log(equipo);
    if (equipo === undefined) {
        res.status(404);
        res.json({ error: "equipo no encontrado" });

        return;
    }
    equipos.splice(id, 1);
    res.status(200);
    res.json({ deleted: "ok" });
}