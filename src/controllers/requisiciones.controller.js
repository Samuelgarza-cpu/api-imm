const {createPool} = require('mysql2/promise');
const pool = createPool({
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'imm',
    // port: 3306

    host: '162.241.2.112',
    user: 'gruposav_imm',
    password: 'Admin2910*',
    database: 'gruposav_imm'
})
async function getUsuarios (req,res){
    try{
        const [results] = await pool.query("select * from usuarios");
        res.json(results)

    }catch{
        res.json('0')
    }

}

async function findRequisiciones(req,res){
    try{
        const {id} = req.params
        const [results] = await pool.query("select * from requisiciones where id_requi = ? ",[id]);
            res.json(results[0])
    }catch{
        res.json('0')
    }

}

async function insertModulo1(req,res){
    try{
        console.log(req.body)
        const{lineaAccion,ejeServicio,
            EstatusServicio,servicioReferencia,MediaFiliacionAgresor,EstadoNacimientoAgresor,AdiccionesAgresor,ViviendaAgresor,
            otraCausaDiscapacidadAgresor,origenDiscapacidadAgresor,discapacidadAgresor,otraCausaEnfermedadAgresor,origenEnfermedadAgresor,
            dificultadesSaludAgresor,horarioAgresor,servicioMedicoAgresor,lugarTrabajoAgresor,fuenteIngresosAgresor,actividadRealizaAgresor,
            telAgresor,zonapAgresor,EstadoAgresor,MunicipioAgresor,numeroAgresor,coloniaAgresor,calleAgresor,EdadAgresor,fechaNacAgresor,generoAgresor,
            sexoAgresor, apmAgresor,appAgresor,nombreAgresor,usoArmas,agresorDrogasAlcohol,LugardelosHechos,fechaHechos,narracionHechos,efectosViolencia,
            ambitoViolencia,tipoViolencia,Adicciones,Vivienda,otraCausaDiscapacidad,origenDiscapacidad,discapacidad,otraCausaEnfermedad,origenEnfermedad,
            dificultadesSalud,seguirEstudiando,capacitarse,encontrarTrabajo,Concluida,formacionEducativa,servicioMedico,horario,telefono,actividadRealiza,
            fuenteIngresos,lugarTrabajo,fechaingreso,horaingreso,agente,nombre,app,apm,sexo,genero,fechaNacimiento,edad,correo,civil,numHijos,embarazada,
            calle,colonia,numero,municipio,estado,zonap,Observaciones} = req.body

            const date = new Date(Date.parse(fechaingreso));
            const fechaNacimientoIn = new Date(Date.parse(fechaNacimiento))
            const fechaNacimientoAgresorIn = new Date(Date.parse(fechaNacAgresor))
            const fechaHechosIn = new Date(Date.parse(fechaHechos))
            console.log(date)
        const [result] = await pool.query(`INSERT INTO modulo1
        (fechaIngreso,agente,nombre,app,apm,sexo,genero,fechaNacimiento,edad,calle,numero,colonia,municipio,estado,zonaPertenencia,telefono,email,
        estadoCivil,numeroHijos,estaEmbarazada,estadoNacimiento,actRealiza,fuenteIngresos,lugarTrabajo,horario,servicioMedico,formacionEducativa,concluida,encontrarTrabajo,
        capacitarse,seguirEstudiando,enfermedades,origenEnfermedad,discapacidad,origenDiscapacidad,vivienda,adicciones,tipoViolencia,ambitoViolencia,efectosViolencia,
        nararcionHechos,fechaHechos,lugarHechos,efectosDrogaAlcohol,usoArmas,nombreAgresor,appAgresor,apmAgresor,sexoAgresor,generoAgresor,fechaNacimientoAgresor,edadAgresor,
        calleAgresor,numeroAgresor,coloniaAgresor,municipioAgresor,estadoAgresor,zonaPertenenciaAgresor,telAgresor,actRealizaAgresor,fuenteIngresosAgresor,lugarTrabajoAgresor,
        horarioAgresor,servicioMedAgresor,viviendaAgresor,enfermedadesAgresor,origenEnfermedadAgresor,discapacidadAgresor,origenDiscapacidadAgresor,
        otroOrigenDisAgresor,adiccionesAgresor,estadoNacimientoAgresor,mediaFiliacion,serReferencia,estatusServicio,eje,lineaAccion,
        Observaciones)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,
    ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [date,agente,nombre,app,apm,sexo,genero,fechaNacimientoIn,edad,calle,numero,colonia,municipio,estado,zonap,telefono,correo,civil,numHijos,embarazada,'S/N',actividadRealiza,
    fuenteIngresos,lugarTrabajo,horario,servicioMedico,formacionEducativa,Concluida,encontrarTrabajo,capacitarse,seguirEstudiando,dificultadesSalud,origenEnfermedad,discapacidad,origenDiscapacidad,Vivienda,
    Adicciones,tipoViolencia,ambitoViolencia,efectosViolencia,narracionHechos,fechaHechosIn,LugardelosHechos,agresorDrogasAlcohol,usoArmas,nombreAgresor,appAgresor,apmAgresor,
    sexoAgresor,generoAgresor,fechaNacimientoAgresorIn,EdadAgresor,calleAgresor,numeroAgresor,coloniaAgresor,MunicipioAgresor,EstadoAgresor,zonapAgresor,telAgresor,
    actividadRealizaAgresor,fuenteIngresosAgresor,lugarTrabajoAgresor,horarioAgresor,servicioMedicoAgresor,ViviendaAgresor,dificultadesSaludAgresor,origenEnfermedadAgresor,discapacidadAgresor,
    origenDiscapacidadAgresor,otraCausaDiscapacidadAgresor,AdiccionesAgresor,EstadoNacimientoAgresor,MediaFiliacionAgresor,servicioReferencia,EstatusServicio,ejeServicio,lineaAccion,Observaciones])
       if(result.affectedRows > 0){
        console.log(result)
        res.json({STATUS:'correcto',id:result.insertId})
       }else{
        console.log(result)
        res.json({STATUS:'No inserto'})
       }
      

    }catch(err){
        console.log(err)

        res.json({STATUS:err})
    }

}

async function getModulo1(req,res){
    try{
        const [results] = await pool.query("select * from modulo1");
        
        res.json(results)

    }catch{
        res.json('0')
    }

}

async function deleteModulo1(req,res){
    try{
        const {id} = req.params
        console.log(id)
        const [results] = await pool.query("delete from modulo1 where id_expediente = ?",[id]);
        res.json(results)

    }catch{
        res.json('0')
    }

}



module.exports={getUsuarios,findRequisiciones,insertModulo1,getModulo1,deleteModulo1}
