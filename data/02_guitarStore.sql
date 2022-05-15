alter table product change productcondition_id productCondition_id INT(11) unsigned;
alter table product add foreign key (productCondition_id) references productcondition(id);


alter table user drop index name;
alter table user drop index lastName;