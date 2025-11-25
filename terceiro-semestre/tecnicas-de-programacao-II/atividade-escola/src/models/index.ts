import mongoose from "mongoose"; 
const { Schema } = mongoose; 
import { isValidCPF } from "../models/validaCPF";
 
const ProfessorSchema = new Schema({ 
    nome: { 
        type: String, 
        maxlength: [45, "O nome do professor pode ter no máximo 45 caracteres"], 
        required: [true, "O nome do professor é obrigatório"], 
    }, 
    email: { 
        type: String, 
        maxlength: [60, "O e-mail pode ter no máximo 60 caracteres"], 
        unique: true, 
        required: [true, "O e-mail é obrigatório"], 
        validate: { 
            validator: function (value: string) { 
                // expressão regular para validar o formato do e-mail 
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        return regex.test(value); 
            }, 
            message: (props: any) => 
                `${props.value} não é um formato de e-mail válido`, 
        }, 
    }, 
    cpf: { 
        type: String, 
        trim: true, 
        minlength: [11, "O CPF precisa ter no mínimo 6 caracteres"], 
        maxlength: [11, "O CPF precisa ter no máximo 10 caracteres"], 
        required: [true, "O CPF é obrigatório"], 
        validate: { 
            validator: function (value: string) { 
                return isValidCPF(value); 
            }, 
            message: (props: any) => 
                `${props.value} não é um CPF válido`, 
        }, 
    }, 
}); 
 
const DisciplinaSchema = new Schema({ 
    descricao: { 
        type: String, 
        maxlength: [45, "A descrição da disciplina pode ter no máximo 45 caracteres"], 
        required: [true, "A descrição da disciplina é obrigatória"], 
    }, 
}); 
 
const Professor = mongoose.model("Professor", ProfessorSchema,"professores"); 
const Disciplina = mongoose.model("Disciplina", DisciplinaSchema); 
 
const Professor_has_DisciplinaSchema = new Schema({ 
    professor: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Professor", 
        required: true, 
        validate: { 
            validator: async function (id: string) { 
    const professor = await Professor.findById(id); 
                return !!professor; 
                 }, 
            message: 'O ID do professor fornecido não existe', 
        }, 
    }, 
    disciplina: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Disciplina", 
        required: true, 
        validate: { 
            validator: async function (id: string) { 
                const disciplina = await Disciplina.findById(id);  
                return !!disciplina; 
            }, 
            message: 'O ID da disciplina fornecido não existe', 
        }, 
    }, 
 
}); 
 
const Professor_has_Disciplina = mongoose.model("Professor_has_Disciplina", Professor_has_DisciplinaSchema); 
 
export { Professor, Disciplina, Professor_has_Disciplina }; 