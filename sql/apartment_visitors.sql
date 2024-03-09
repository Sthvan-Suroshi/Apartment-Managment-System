-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: apartment
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `visitors`
--

DROP TABLE IF EXISTS `visitors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `visitors` (
  `visitor_id` int NOT NULL AUTO_INCREMENT,
  `visitor_name` varchar(255) NOT NULL,
  `apartment_number` int NOT NULL,
  `contact_number` varchar(20) NOT NULL,
  `visit_date` date NOT NULL,
  `resident_id` int DEFAULT NULL,
  `reason_for_visit` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`visitor_id`),
  KEY `resident_id` (`resident_id`),
  CONSTRAINT `visitors_ibfk_1` FOREIGN KEY (`resident_id`) REFERENCES `residents` (`resident_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visitors`
--

LOCK TABLES `visitors` WRITE;
/*!40000 ALTER TABLE `visitors` DISABLE KEYS */;
INSERT INTO `visitors` VALUES (1,'Visitor 1',101,'111-111-1111','2022-04-01',1,'Delivery'),(2,'Visitor 2',102,'222-222-2222','2022-04-02',2,'Meeting'),(3,'Visitor 3',103,'333-333-3333','2022-04-03',3,'Delivery'),(4,'Visitor 4',104,'444-444-4444','2022-04-04',4,'Other'),(5,'Visitor 5',105,'555-555-5555','2022-04-05',5,'Delivery'),(6,'Visitor 6',106,'666-666-6666','2022-04-06',6,'Other'),(7,'Visitor 7',107,'777-777-7777','2022-04-07',7,'Meeting'),(8,'Vinay',404,'123-123-1111','2024-03-09',8,'Other'),(9,'swap',49,'123-123-2222','2024-03-28',9,'Gaming'),(10,'vandana',777,'123-123-3333','2024-03-09',7,'Coding'),(11,'Ashwin',333,'123-123-9999','2024-03-09',6,'Playing');
/*!40000 ALTER TABLE `visitors` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-09 13:17:58
