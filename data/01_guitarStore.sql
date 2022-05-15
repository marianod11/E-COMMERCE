create database guitarStore;
use guitarStore; 




create table colour (
id INT(11) unsigned primary key auto_increment, 
name VARCHAR(255) unique not null 
);

create table productType (
id INT(11) unsigned primary key auto_increment, 
name VARCHAR(255) unique not null
);

create table brand (
id INT(11) unsigned primary key auto_increment, 
name VARCHAR(255) unique not null 
);

create table category (
id INT(11) unsigned primary key auto_increment, 
name VARCHAR(255) unique not null 
);

create table product(
id INT(11) unsigned primary key auto_increment, 
name VARCHAR(255) unique not null,
modelType VARCHAR(100) not null,
modelName VARCHAR(100) not null,
releaseYear DATE not null,
stock INT(11) unsigned not null,
price INT(11) unsigned not null,
discount INT unsigned not null,
description TEXT,
img VARCHAR(255) not null,
category_id INT(11) unsigned,
productType_id INT(11) unsigned,
brand_id INT(11) unsigned,
colour_id INT(11) unsigned,
foreign key (category_id) references category(id),
foreign key (productType_id) references productType(id),
foreign key (brand_id) references brand(id),
foreign key (colour_id) references colour(id)
);

create table user(
id INT(11) unsigned primary key auto_increment, 
name VARCHAR(255) unique not null,
lastName VARCHAR(255) unique not null,
birthDate DATE,
email VARCHAR(100) unique not null,
pass VARCHAR(255) not null,
accessLevel tinyint unsigned not null,
avatar varchar(255) not null
);

create table shoplist(
id INT(11) unsigned primary key auto_increment,
user_id INT(11) unsigned,
shopDate TIMESTAMP,
foreign key (user_id) references user(id)
);

create table product_shoplist(
id INT(11) unsigned primary key auto_increment,
product_id INT(11) unsigned,
shoplist_id INT(11) unsigned,
product_price INT(11) unsigned,
foreign key (product_id) references product(id),
foreign key (shoplist_id) references shoplist(id)
);

insert into category(name) values("offers");
insert into category(name) values("mostSelled");


insert into producttype(name) values("guitar");
insert into producttype(name) values("amp");
insert into producttype(name) values("pedal");
insert into producttype(name) values("accesory");
insert into producttype(name) values("replacement");

insert into brand(name) values("marshall");
insert into brand(name) values("gibson");
insert into brand(name) values("fender");
insert into brand(name) values("electro-harmonix");
insert into brand(name) values("martin");

insert into colour(name) values("natural");
insert into colour(name) values("sunburst");
insert into colour(name) values("black");
insert into colour(name) values("white");

create table productcondition (
id INT(11) unsigned primary key auto_increment, 
name VARCHAR(255) unique not null
);

alter table product add productcondition_id INT(11) unsigned;
alter table product add foreign key (productcondition_id) references productcondition(id);

insert into productcondition(name) values("new");
insert into productcondition(name) values("used");
insert into productcondition(name) values("refurbished");

alter table product change productcondition_id productCondition_id INT(11) unsigned;
alter table product add foreign key (productCondition_id) references productcondition(id);