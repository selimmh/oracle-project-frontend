-- tabel pacient
create table pacient (
    id_pacient integer not null,
    prenume varchar(255) not null,
    nume varchar(255) not null,
    gen varchar(255) not null,
    ani integer not null,
    adresa varchar(255) not null,
    email varchar(255) not null,
    tel varchar(255) not null,
    primary key (id_pacient)
);

-- tabel medic
create table medic (
    id_medic integer not null,
    prenume varchar(255) not null,
    nume varchar(255) not null,
    specializare varchar(255) not null,
    camera int not null,
    email varchar(255) not null,
    tel varchar(255) not null,
    primary key (id_medic)
);

-- tabel programare
create table programare (
    id_programare integer not null,
    id_pacient integer not null,
    id_medic integer not null,
    data_programare date not null,
    ora_programare time not null,
    primary key (id_programare),
    foreign key (id_pacient) references pacient(id_pacient),
    foreign key (id_medic) references medic(id_medic)
);

-- tabel diagnostic
create table diagnostic (
    id_diagnostic integer not null,
    id_programare integer not null,
    diagnostic varchar(255) not null,
    primary key (id_diagnostic),
    foreign key (id_programare) references programare(id_programare)
);

-- tabel tratament
create table tratament (
    id_tratament integer not null,
    id_programare integer not null,
    medicament varchar(255) not null,
    primary key (id_tratament),
    foreign key (id_programare) references programare(id_programare)
);

