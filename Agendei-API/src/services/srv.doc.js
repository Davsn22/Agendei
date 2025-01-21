import repositoryDoctors from "../repositories/repository.doctors.js";

async function Listar(name){
    
    const doctors = await repositoryDoctors.Listar(name);

    return doctors;
}

async function Inserir(name, specialty, icon){


    const doctor = await repositoryDoctors.Inserir(name, specialty, icon);

    return doctor;

}
async function Editar(id_doctor,name,specialty,icon){


    const doctor = await repositoryDoctors.Editar(id_doctor,name,specialty,icon);

    return doctor;

}
async function Excluir(id_doctor){

    const doctor = await repositoryDoctors.Excluir(id_doctor);

    return doctor;

}
async function ListarServiços(id_doctor){
    
    const serv = await repositoryDoctors.ListarServiços(id_doctor);

    return serv;
}

export default { ListarServiços,Listar,Inserir,Editar,Excluir }
