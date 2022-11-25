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
        const [results] = await pool.query("delete from modulo1 where id_expediente = ?",[id]);
        res.json(results)

    }catch{
        res.json('0')
    }

}

async function getModulo1ID(req,res){
    try{
        const {id} = req.params
        const [results] = await pool.query("select * from modulo1 where id_expediente = ?",[id]);
        res.json(results[0])

    }catch{
        res.json('0')
    }

}

async function UpdateModulo1(req,res){
    try{
        const {id} = req.params

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
            console.log(fechaingreso)

            const [result] = await pool.query(`update modulo1 set
            fechaIngreso = IFNULL(?,fechaIngreso),agente = IFNULL(?,agente),nombre= IFNULL(?,nombre),app=IFNULL(?,app),apm=IFNULL(?,apm),sexo =IFNULL(?,sexo),genero = IFNULL(?,genero),
            fechaNacimiento = IFNULL(?,fechaNacimiento),edad = IFNULL(?,edad),calle = IFNULL(?,calle),numero = IFNULL(?,numero),
            colonia = IFNULL(?,colonia),municipio = IFNULL(?,municipio),estado = IFNULL(?,estado),zonaPertenencia = IFNULL(?,zonaPertenencia), telefono = IFNULL(?,telefono),email = IFNULL(?,email),
            estadoCivil = IFNULL(?,estadoCivil),numeroHijos = IFNULL(?,numeroHijos),estaEmbarazada = IFNULL(?,estaEmbarazada),
            actRealiza = IFNULL(?,actRealiza),fuenteIngresos = IFNULL(?,fuenteIngresos),lugarTrabajo = IFNULL(?,lugarTrabajo),servicioMedico = IFNULL(?,servicioMedico),horario= IFNULL(?,horario),
            formacionEducativa = IFNULL(?,formacionEducativa),concluida = IFNULL(?,concluida),encontrarTrabajo = IFNULL(?,encontrarTrabajo),
            capacitarse = IFNULL(?,capacitarse),seguirEstudiando = IFNULL(?,seguirEstudiando),enfermedades = IFNULL(?,enfermedades),origenEnfermedad = IFNULL(?,origenEnfermedad),
            discapacidad = IFNULL(?,discapacidad),origenDiscapacidad = IFNULL(?,origenDiscapacidad),vivienda = IFNULL(?,vivienda),adicciones = IFNULL(?,adicciones),
            tipoViolencia = IFNULL(?,tipoViolencia),ambitoViolencia = IFNULL(?,ambitoViolencia),efectosViolencia = IFNULL(?,efectosViolencia),nararcionHechos = IFNULL(?,nararcionHechos),
            fechaHechos = IFNULL(?,fechaHechos),lugarHechos = IFNULL(?,lugarHechos),efectosDrogaAlcohol = IFNULL(?,efectosDrogaAlcohol),usoArmas = IFNULL(?,usoArmas),
            nombreAgresor = IFNULL(?,nombreAgresor),appAgresor = IFNULL(?,appAgresor),apmAgresor = IFNULL(?,apmAgresor),sexoAgresor = IFNULL(?,sexoAgresor) ,generoAgresor = IFNULL(?,generoAgresor),fechaNacimientoAgresor = IFNULL(?,fechaNacimientoAgresor),edadAgresor = IFNULL(?,edadAgresor),
            calleAgresor = IFNULL(?,calleAgresor),numeroAgresor = IFNULL(?,numeroAgresor),coloniaAgresor = IFNULL(?,coloniaAgresor),municipioAgresor = IFNULL(?,municipioAgresor),
            estadoAgresor = IFNULL(?,estadoAgresor),zonaPertenenciaAgresor = IFNULL(?,zonaPertenenciaAgresor),telAgresor = IFNULL(?,telAgresor),actRealizaAgresor = IFNULL(?,actRealizaAgresor),
            fuenteIngresosAgresor = IFNULL(?,fuenteIngresosAgresor),lugarTrabajoAgresor = IFNULL(?,lugarTrabajoAgresor),servicioMedAgresor = IFNULL(?,servicioMedAgresor),
            horarioAgresor = IFNULL(?,horarioAgresor),viviendaAgresor = IFNULL(?,viviendaAgresor),enfermedadesAgresor = IFNULL(?,enfermedadesAgresor),
            origenEnfermedadAgresor = IFNULL(?,origenEnfermedadAgresor),discapacidadAgresor = IFNULL(?,discapacidadAgresor),origenDiscapacidadAgresor = IFNULL(?,origenDiscapacidadAgresor),
            adiccionesAgresor = IFNULL(?,adiccionesAgresor),estadoNacimientoAgresor = IFNULL(?,estadoNacimientoAgresor),mediaFiliacion = IFNULL(?,mediaFiliacion),
            serReferencia = IFNULL(?,serReferencia),estatusServicio = IFNULL(?,estatusServicio),eje = IFNULL(?,eje),lineaAccion = IFNULL(?,lineaAccion),Observaciones = IFNULL(?,Observaciones)
            where id_expediente = ?`,
            [fechaingreso,agente,nombre,app,apm,sexo,genero,fechaNacimiento,parseInt(edad),calle,parseInt(numero),colonia,municipio,estado,zonap,telefono,correo,civil,numHijos,embarazada,actividadRealiza,
            fuenteIngresos,lugarTrabajo,servicioMedico,horario,formacionEducativa,Concluida,encontrarTrabajo,capacitarse,seguirEstudiando,dificultadesSalud,origenEnfermedad,
            discapacidad,origenDiscapacidad,Vivienda,Adicciones,tipoViolencia,ambitoViolencia,efectosViolencia,narracionHechos,fechaHechos,LugardelosHechos,agresorDrogasAlcohol,usoArmas,
            nombreAgresor,appAgresor,apmAgresor,sexoAgresor,generoAgresor,fechaNacAgresor,EdadAgresor,calleAgresor,parseInt(numeroAgresor),coloniaAgresor,MunicipioAgresor,
            EstadoAgresor,zonapAgresor,telAgresor,actividadRealizaAgresor,fuenteIngresosAgresor,lugarTrabajoAgresor,servicioMedicoAgresor,
            horarioAgresor,ViviendaAgresor,dificultadesSaludAgresor,origenEnfermedadAgresor,discapacidadAgresor,origenDiscapacidadAgresor,AdiccionesAgresor,EstadoNacimientoAgresor,MediaFiliacionAgresor,
            servicioReferencia,EstatusServicio,ejeServicio,lineaAccion,Observaciones,id])


        res.send('1')
    }catch{
        res.send('0')
    }

}



module.exports={getUsuarios,findRequisiciones,insertModulo1,getModulo1,deleteModulo1,UpdateModulo1,getModulo1ID}
