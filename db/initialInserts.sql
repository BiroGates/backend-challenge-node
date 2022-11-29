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
                values("Gustavo Alves Vieira", "360.915.878-62", "2022-01-23", 1);



-- Order
insert into tb_order (id_client, id_product, vl_purchase, qtd_purchase, vl_total, dt_order)
               values(1, 1, 200.00, 2, 400.00, "2022-11-28");