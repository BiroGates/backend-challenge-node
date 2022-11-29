-- Admin
insert into tb_admin (ds_email, ds_senha) 
               values("teste@teste.com", "123456");


-- Product
insert into tb_product (nm_product, bt_active) 
                values ("Facebook", 1);

insert into tb_product (nm_product, bt_active) 
                values ("Amazon", 1);

insert into tb_product (nm_product, bt_active) 
                values ("Netflix", 1);


-- Client
insert into tb_client (nm_client, ds_cpf, dt_birth, bt_active)
                values("Gustavo Alves Vieira", "360.915.878-62", "2022-01-23");



-- Order
insert into tb_order ()