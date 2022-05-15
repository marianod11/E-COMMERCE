-- MariaDB dump 10.17  Distrib 10.4.11-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: guitarstore
-- ------------------------------------------------------
-- Server version	10.4.11-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (4,'electro-harmonix'),(3,'fender'),(2,'gibson'),(1,'marshall'),(5,'martin');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (2,'mostSelled'),(1,'offers');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `colour`
--

LOCK TABLES `colour` WRITE;
/*!40000 ALTER TABLE `colour` DISABLE KEYS */;
INSERT INTO `colour` VALUES (3,'black'),(1,'natural'),(2,'sunburst'),(4,'white');
/*!40000 ALTER TABLE `colour` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (10,'Gibson Les Paul Standard \'60s','','','1988-04-21',3,3000,0,'El nuevo Les Paul Standard vuelve al diseño clásico que lo hizo relevante, tocado y amado, moldeando el sonido a través de generaciones y géneros de música. Rinde homenaje a la Era Dorada de la innovación de Gibson y le da vida a la autenticidad. El Les Paul Standard 60\'s tiene un cuerpo sólido de caoba con una parte superior de arce con figura AA y un delgado cuello de caoba de estilo años 60 con un diapasón de palo de rosa e incrustaciones trapezoidales. Está equipado con un puente Tune-O-Matic de estilo clásico, cordal de aluminio con barra de parada, sintonizadores Grover Rotomatic Riñón y perillas doradas con reflectores plateados. Las pastillas Burstbucker 61R (cuello) Burstbucker 61T (puente) están cargadas con imanes AlNiCo V, potenciómetros cónicos de audio y condensadores de caída naranja.','img-1596306106443.jpg',1,5,2,2,1),(11,'Squier By Fender Classic Vibe \'70S Jaguar','','','1970-12-12',2,500,0,'El Jaguar Classic Vibe 70s sube el volumen en estilo retro y produce un tono increíble por cortesía de sus pastillas de doble bobina alnico diseñadas por Fender. Las manos pequeñas apreciarán la corta escala de 24 de largo y el delgado y cómodo perfil de cuello en forma de C con un diapasón de radio fácil de tocar de 9.5 y trastes estrechos y altos. Este Jaguar es fiel al original con un sistema de trémolo de estilo vintage para efectos expresivos de flexión de cuerdas y puente flotante con sillines de barril para una estabilidad sólida de la cuerda. Este retroceso del modelo Squier también presenta marcas en el cabezal inspiradas en la década de 1970, herrajes niquelados de aspecto rico y un elegante acabado brillante de tinte vintage para un ambiente de la vieja escuela.','img-1596306215126.jpg',1,5,3,3,1),(12,'Martin D-28','','','1990-12-12',5,2500,0,'A veces la innovación está en los detalles y esto es cierto con el D-28 reinventado de Martin. Después de casi un siglo al timón, y como el caballo de batalla por excelencia de leyendas de la música como Hank Williams, The Beatles, JOHNNY CASH , Neil Young, Bob Dylan y muchos más, el legendario D-28 de Martin se ha mejorado con amor e ingenio. El D-28 posterior a la Segunda Guerra Mundial tenía un aspecto ligeramente diferente al de su predecesor y se convirtió en la pieza central de los movimientos de folk y folk rock en su pináculo en las décadas de 1950 y 1960. El nuevo D-28 combina la rica historia de la guitarra con las innovaciones más nuevas y anunciadas de Martin. El fabricante de guitarras de 184 años ha combinado citas vintage, incluidos sintonizadores de engranajes abiertos, una tapa de tóner envejecida, detalles en blanco antiguo y un golpeador de falsa tortuga con un nuevo perfil de cuello para brindar a los entusiastas del D-28 una sensación moderna y una experiencia de juego cómoda. Martin también ha agregado refuerzos desplazados hacia adelante para permitir una mayor vibración de la parte superior. ¡La leyenda acaba de mejorar!','img-1596306326928.jpg',1,5,5,1,1),(13,'Amplificador Marshall 1974X','','','1974-12-12',5,1500,0,'El amplificador de 18w 1974XTMes una fiel réplica del modelo 1974 producido entre los años 1966 y 1968. Al igual que el original, este 1974X es 100% a válvulas, soldado a mano punto por punto, cuenta con chásis de aluminio y un circuito de trémolo. Tiene un diseño de dos canales con volumen, tono, velocidad del trémolo y sensibilidad en el canal 1, y control de trémolo, volumen y tono en el canal 2. Monta un altavoz especial de 12″ Celestion G12M-20 Greenback para reproducir el carácter vintage del 1974X\"','img-1596317089835.jpg',2,4,1,1,1),(14,'Fender Telecaster American Original \'50S','','','1950-12-12',5,1900,0,'La última creación de la guitarra más batalladora, la Telecaster lanzó una revolución musical cuando la lanzamos. Adoptada rápidamente por guitarristas en activo que estaban enamorados de su sonido, y estilo único, la Telecaster sentó las bases para el country moderno, el blues y hasta el heavy metal (en manos de Jimmy Page). La Telecaster de los 50 American Original tiene todos los toques auténticos de Fender que hicieron de la Telecaster una estrella para el estudio y el escenario, pero agregando un toque moderno y un cambio de pastillas nuevo','img-1596317234443.jpg',2,5,3,1,1),(15,'Pedal Electro-Harmonix Big Muff','','','1969-12-12',10,100,0,'El original de Nueva York. Hendrix y Santana fueron de los primeros en obtener una pieza de Pi, y durante más de 40 años, Big Muff Pi ha estado definiendo el sonido de la guitarra rock. Venerado por los guitarristas contemporáneos y las leyendas del rock por su rico y cremoso sustento de violín, desde Pink Floyd hasta The White Stripes','img-1596317401228.jpg',2,3,4,1,1);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product_shoplist`
--

LOCK TABLES `product_shoplist` WRITE;
/*!40000 ALTER TABLE `product_shoplist` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_shoplist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `productcondition`
--

LOCK TABLES `productcondition` WRITE;
/*!40000 ALTER TABLE `productcondition` DISABLE KEYS */;
INSERT INTO `productcondition` VALUES (1,'new'),(3,'refurbished'),(2,'used');
/*!40000 ALTER TABLE `productcondition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `producttype`
--

LOCK TABLES `producttype` WRITE;
/*!40000 ALTER TABLE `producttype` DISABLE KEYS */;
INSERT INTO `producttype` VALUES (2,'accesory'),(4,'amp'),(5,'guitar'),(3,'pedal'),(1,'replacement');
/*!40000 ALTER TABLE `producttype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `shoplist`
--

LOCK TABLES `shoplist` WRITE;
/*!40000 ALTER TABLE `shoplist` DISABLE KEYS */;
/*!40000 ALTER TABLE `shoplist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'magdalena','',NULL,'','$2b$10$4.zsCz7SDIcvM8FXLXpod.BNs5rGv68IKBzmH0ibIJsJmnRzim2oy',0,'avatar-1594496183617.jpg'),(2,'Jose','sanguinetti',NULL,'lodegiunta@gmail.com','$2b$10$C1KV.NOlVXovcWwqZfazh.SruqxG4oP4LCJMROhcGw4mcGprgIR/K',0,'avatar-1594496792228.jpg'),(3,'oscar','jalife',NULL,'Oscarcjalife@live.com.ar','$2b$10$aP6XP3hr0p/bGqwxjgq5Veo2B1mVDySdcs9BHIrnfpdI4PhZfclre',0,'avatar-1594496888392.jpg'),(4,'silvia','pagano','1967-12-12','sil196517@hotmail.com','$2b$10$0hZj7ZWmI68xEZTrkO9Kb.nl61GZOCBX0p5MWswoOaYJ/B6s.lpr6',0,'avatar-1594497080597.jpg'),(7,'mariano','dell','1988-12-12','mariano@hotmail.com','$2b$10$s71gF4WrH3etvYButmo.d.n5oPucWw3MGzyy4Zic4ak4f3rt7jLE2',1,'avatar-1594501111946.jpg'),(23,'emeli','passini','1988-04-21','emeli@hotmail.com','$2b$10$YDs6DqOdhyqYoPdLaEnfkO0mcE9AIG0HjkM80r6M8hfZlPmth0Icu',1,'avatar-1596223301721.jpg'),(24,'ernesto','giunta','1988-04-21','ernest@hotmail.com','$2b$10$oO.qwJW0dhUdj1wD/sxXyOiiLOuzx8WoGUazh3wQdk762jYwmeYA.',1,'avatar-1596289498298.jpg'),(26,'alberto','sasa ','1988-04-21','emelis@hotmail.com','$2b$10$vSivW9r3hqWxXFDkwpCNUOM/YfgoAsGgnxPIa9/HXTES3aVHAGMBa',1,'avatar-1596293119500.jpg');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-06 16:54:17
