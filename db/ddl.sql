drop database if exists challengeDB;
create database if not exists challengeDB;
use challengeDB;



create table tb_client (
    id_client       int auto_increment primary key,
    nm_client       varchar(200),
    ds_email        varchar(200),
    ds_senha        varchar(200),
    ds_cpf          varchar(200),
    dt_birth        date,
    bt_active       tinyint
);

create table tb_order (
    id_order        int auto_increment primary key,
    id_client       int,
    id_product      int,
    vl_purchase     float(15, 2),
    qtd_purchase    int,
    vl_total        float(15, 2),
    dt_order        date,
    foreign key (id_usuario) references tb_usuario(id_usuario),
    foreign key (id_product) references tb_product(id_product)
);

create table tb_product (
    id_product      int auto_increment primary key,
    nm_product      varchar(200),
    bt_active       tinyint
);

create table tb_admin (
    id_admin        int auto_increment primary key,
    ds_email        varchar(200),
    ds_senha        varchar(200)
);