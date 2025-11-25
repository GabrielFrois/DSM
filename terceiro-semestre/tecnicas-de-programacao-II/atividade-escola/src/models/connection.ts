import mongoose from "mongoose"; 
 
const uri = "mongodb://127.0.0.1:27017/bdaula"; 
 
export default function connect() { 
  mongoose.connection.on("connected", () => console.log("connected")); 
  mongoose.connection.on("open", () => console.log("open")); 
  mongoose.connection.on("disconnected", () => console.log("disconnected")); 
  mongoose.connection.on("reconnected", () => console.log("reconnected")); 
  mongoose.connection.on("disconnecting", () => console.log("disconnecting")); 
  mongoose.connection.on("close", () => console.log("close")); 
  
  mongoose 
    .connect(uri, { 
      serverSelectionTimeoutMS: 5000, 
      maxPoolSize: 10, 
    }) 
    .then(() => console.log("Conectado ao MongoDB")) 
    .catch((e) => { 
      console.error("Erro ao conectar ao MongoDB:", e.message); 
    }); 
 
  process.on("SIGINT", async () => { 
    try { 
      console.log("Conexão com o MongoDB fechada"); 
      await mongoose.connection.close(); 
      process.exit(0); 
    } catch (error) { 
      console.error("Erro ao fechar a conexão com o MongoDB:", error); 
      process.exit(1); 
    } 
  }); 
} 