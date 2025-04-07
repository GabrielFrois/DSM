import query from "./db";
async function init() {
return await query(`
START TRANSACTION;
DROP TABLE IF EXISTS spents, users;
CREATE TABLE IF NOT EXISTS users (
id serial PRIMARY KEY,
mail VARCHAR(50) NOT NULL,
password VARCHAR(100) NOT NULL
);
CREATE TABLE IF NOT EXISTS spents (
id serial PRIMARY KEY,
iduser integer not null,
description VARCHAR(50) NOT NULL,
value decimal(10,2) NOT NULL,
constraint fk_iduser
foreign key (iduser)
references users (id)
on delete cascade
on update cascade
);
COMMIT;
`);
}
init()
.then((r) => console.log(r))
.catch((e) => console.log(e));