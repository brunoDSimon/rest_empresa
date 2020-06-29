-- MySQL dump 10.13  Distrib 8.0.18, for macos10.14 (x86_64)
--
-- Host: 127.0.0.1    Database: empresarest2
-- ------------------------------------------------------
-- Server version	8.0.19

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
-- Table structure for table `Beads`
--

DROP TABLE IF EXISTS `Beads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Beads` (
  `id` int NOT NULL AUTO_INCREMENT,
  `companyID` int NOT NULL,
  `userID` int NOT NULL,
  `reference` varchar(255) NOT NULL,
  `value` double NOT NULL,
  `amount` int NOT NULL,
  `patch` varchar(255) NOT NULL,
  `dateEntry` date NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=245 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Beads`
--

LOCK TABLES `Beads` WRITE;
/*!40000 ALTER TABLE `Beads` DISABLE KEYS */;
INSERT INTO `Beads` VALUES (10,2,1,'123f',2,3,'jj12','2020-04-13','2020-04-13 20:12:26','2020-04-13 20:12:26'),(103,2,1,'testeREF4',2.12,3,'abc123','2020-05-30','2020-05-30 12:21:00','2020-05-30 12:21:00'),(104,2,1,'testeREF5',2.12,3,'abc123','2020-05-30','2020-05-30 12:21:04','2020-05-30 12:21:04'),(105,2,1,'testeREF6',2.12,3,'abc123','2020-05-30','2020-05-30 12:21:06','2020-05-30 12:21:06'),(106,2,1,'testeREF7',2.12,3,'abc123','2020-05-30','2020-05-30 12:21:08','2020-05-30 12:21:08'),(107,2,1,'testeREF3',2.12,3,'abc123','2020-05-30','2020-05-30 12:21:09','2020-05-30 12:21:09'),(108,2,1,'testeREF2',2.12,3,'abc123','2020-05-30','2020-05-30 12:21:11','2020-05-30 12:21:11'),(109,2,1,'testeREF2',2.22,3,'abc123','2020-05-30','2020-05-30 12:21:14','2020-05-30 12:21:14'),(110,2,1,'testeREF2',2.24,3,'abc123','2020-05-30','2020-05-30 12:21:16','2020-05-30 12:21:16'),(111,2,1,'testeREF2',1.24,3,'abc123','2020-05-30','2020-05-30 12:21:19','2020-05-30 12:21:19'),(112,2,1,'testeREF2',1.24,3,'abc123','2020-05-30','2020-05-30 12:21:25','2020-05-30 12:21:25'),(113,2,1,'testeREF1',1.24,3,'abc123','2020-05-30','2020-05-30 12:21:27','2020-05-30 12:21:27'),(114,2,1,'testeREF',1.24,3,'abc123','2020-05-30','2020-05-30 12:21:29','2020-05-30 12:21:29'),(115,2,1,'testeREF',1.24,3,'abc123','2020-05-30','2020-05-30 12:21:29','2020-05-30 12:21:29'),(116,2,1,'testeREF',1.24,3,'abc123','2020-05-30','2020-05-30 12:21:29','2020-05-30 12:21:29'),(117,2,1,'testeREF',1.24,3,'abc123','2020-05-30','2020-05-30 12:21:30','2020-05-30 12:21:30'),(118,2,1,'testeREF',1.24,3,'abc123','2020-05-30','2020-05-30 12:21:30','2020-05-30 12:21:30'),(119,2,1,'testeREF',1.24,3,'abc123','2020-05-30','2020-05-30 12:21:30','2020-05-30 12:21:30'),(120,2,1,'testeREF',1.24,3,'abc123','2020-05-30','2020-05-30 12:21:30','2020-05-30 12:21:30'),(121,2,1,'testeREF',1.24,3,'abc123','2020-05-30','2020-05-30 12:21:30','2020-05-30 12:21:30'),(122,2,1,'testeREF',1.24,3,'abc123','2020-05-30','2020-05-30 12:21:31','2020-05-30 12:21:31'),(123,2,1,'testeREF',1.24,3,'abc123','2020-05-30','2020-05-30 12:21:31','2020-05-30 12:21:31'),(124,2,1,'testeREF',1.24,3,'abc123','2020-05-30','2020-05-30 12:21:31','2020-05-30 12:21:31'),(125,2,1,'testeREF',1.24,3,'abc123','2020-05-30','2020-05-30 12:21:31','2020-05-30 12:21:31'),(126,2,1,'testeREF',1.24,3,'abc123','2020-05-30','2020-05-30 12:21:31','2020-05-30 12:21:31'),(127,2,1,'testeREF',1.24,3,'abc123','2020-05-30','2020-05-30 12:21:32','2020-05-30 12:21:32'),(128,2,1,'testeREF',1.24,3,'abc123','2020-05-30','2020-05-30 12:21:32','2020-05-30 12:21:32'),(129,2,1,'testeREF',1.24,3,'abc123','2020-05-30','2020-05-30 12:21:32','2020-05-30 12:21:32'),(130,2,1,'testeREF',1.24,3,'abc123','2020-05-30','2020-05-30 12:21:32','2020-05-30 12:21:32'),(131,2,1,'testeREF',1.24,3,'abc123','2020-05-30','2020-05-30 12:21:32','2020-05-30 12:21:32'),(132,2,1,'testeREF',1.24,3,'abc123','2020-05-30','2020-05-30 12:21:32','2020-05-30 12:21:32'),(133,2,1,'testeREF',1.24,3,'abc123','2020-05-30','2020-05-30 12:21:32','2020-05-30 12:21:32'),(134,2,1,'testeREF',1.24,3,'abc123','2020-05-30','2020-05-30 12:21:33','2020-05-30 12:21:33'),(135,2,1,'testeREF',1.24,3,'abc123','2020-05-30','2020-05-30 12:21:33','2020-05-30 12:21:33'),(136,2,1,'testeREF',1.24,3,'abc123','2020-04-30','2020-05-30 12:21:37','2020-05-30 12:21:37'),(137,2,1,'testeREF',1.24,3,'abc123','2020-04-30','2020-05-30 12:21:37','2020-05-30 12:21:37'),(138,2,1,'testeREF',1.24,3,'abc123','2020-04-30','2020-05-30 12:21:38','2020-05-30 12:21:38'),(139,2,1,'testeREF',1.24,3,'abc123','2020-04-30','2020-05-30 12:21:38','2020-05-30 12:21:38'),(140,2,1,'testeREF',1.24,3,'abc123','2020-04-30','2020-05-30 12:21:38','2020-05-30 12:21:38'),(141,2,1,'testeREF',1.24,3,'abc123','2020-04-30','2020-05-30 12:21:38','2020-05-30 12:21:38'),(142,2,1,'testeREF',1.24,3,'abc123','2020-04-30','2020-05-30 12:21:38','2020-05-30 12:21:38'),(143,2,1,'testeREF',1.24,3,'abc123','2020-04-30','2020-05-30 12:21:39','2020-05-30 12:21:39'),(144,2,1,'testeREF',1.24,3,'abc123','2020-04-30','2020-05-30 12:21:39','2020-05-30 12:21:39'),(145,2,1,'testeREF',1.24,3,'abc123','2020-04-30','2020-05-30 12:21:39','2020-05-30 12:21:39'),(146,2,1,'testeREF',1.24,3,'abc123','2020-04-30','2020-05-30 12:21:39','2020-05-30 12:21:39'),(147,2,1,'testeREF',1.24,3,'abc123','2020-04-30','2020-05-30 12:21:40','2020-05-30 12:21:40'),(148,2,1,'testeREF',1.24,3,'abc123','2020-04-30','2020-05-30 12:21:40','2020-05-30 12:21:40'),(149,2,1,'testeREF',1.24,3,'abc123','2020-04-30','2020-05-30 12:21:40','2020-05-30 12:21:40'),(150,2,1,'testeREF',1.24,3,'abc123','2020-04-30','2020-05-30 12:21:40','2020-05-30 12:21:40'),(151,2,1,'testeREF',1.24,3,'abc123','2020-04-30','2020-05-30 12:21:40','2020-05-30 12:21:40'),(152,2,1,'testeREF',1.24,3,'abc123','2020-04-30','2020-05-30 12:21:40','2020-05-30 12:21:40'),(153,2,1,'testeREF',1.24,3,'abc123','2020-04-30','2020-05-30 12:23:13','2020-05-30 12:23:13'),(154,2,1,'testeREF',1.24,3,'abc123','2020-01-30','2020-05-30 12:23:21','2020-05-30 12:23:21'),(155,2,1,'testeREF',1.24,3,'abc123','2020-04-30','2020-05-30 12:23:34','2020-05-30 12:23:34'),(156,2,1,'testeREF',1.24,3,'abc123','2020-05-30','2020-05-30 12:23:37','2020-05-30 12:23:37'),(157,2,1,'testeREF',1.24,3,'abc123','2020-06-30','2020-05-30 12:23:39','2020-05-30 12:23:39'),(158,2,1,'testeREF',1.24,3,'abc123','2020-07-30','2020-05-30 12:23:41','2020-05-30 12:23:41'),(159,2,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:23:47','2020-05-30 12:23:47'),(160,2,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:23:48','2020-05-30 12:23:48'),(161,2,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:00','2020-05-30 12:54:00'),(162,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:07','2020-05-30 12:54:07'),(163,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:07','2020-05-30 12:54:07'),(164,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:08','2020-05-30 12:54:08'),(165,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:08','2020-05-30 12:54:08'),(166,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:08','2020-05-30 12:54:08'),(167,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:08','2020-05-30 12:54:08'),(168,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:09','2020-05-30 12:54:09'),(169,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:09','2020-05-30 12:54:09'),(170,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:09','2020-05-30 12:54:09'),(171,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:09','2020-05-30 12:54:09'),(172,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:09','2020-05-30 12:54:09'),(173,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:09','2020-05-30 12:54:09'),(174,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:10','2020-05-30 12:54:10'),(175,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:10','2020-05-30 12:54:10'),(176,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:11','2020-05-30 12:54:11'),(177,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:11','2020-05-30 12:54:11'),(178,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:12','2020-05-30 12:54:12'),(179,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:12','2020-05-30 12:54:12'),(180,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:12','2020-05-30 12:54:12'),(181,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:13','2020-05-30 12:54:13'),(182,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:14','2020-05-30 12:54:14'),(183,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:14','2020-05-30 12:54:14'),(184,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:14','2020-05-30 12:54:14'),(185,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:15','2020-05-30 12:54:15'),(186,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:15','2020-05-30 12:54:15'),(187,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:16','2020-05-30 12:54:16'),(188,3,1,'testeREF',1.24,3,'abc123','2020-08-30','2020-05-30 12:54:16','2020-05-30 12:54:16'),(189,3,1,'testeREF',1.24,3,'abc123','2020-12-30','2020-05-30 12:54:22','2020-05-30 12:54:22'),(190,3,1,'testeREF',1.24,3,'abc123','2020-12-30','2020-05-30 12:54:23','2020-05-30 12:54:23'),(191,3,1,'testeREF',1.24,3,'abc123','2020-12-30','2020-05-30 12:54:23','2020-05-30 12:54:23'),(192,3,1,'testeREF',1.24,3,'abc123','2020-12-30','2020-05-30 12:54:23','2020-05-30 12:54:23'),(193,3,1,'testeREF',1.24,3,'abc123','2020-12-30','2020-05-30 12:54:24','2020-05-30 12:54:24'),(194,3,1,'testeREF',1.24,3,'abc123','2020-12-30','2020-05-30 12:54:24','2020-05-30 12:54:24'),(195,3,1,'testeREF',1.24,3,'abc123','2020-12-30','2020-05-30 12:54:24','2020-05-30 12:54:24'),(196,3,1,'testeREF',1.24,3,'abc123','2020-12-30','2020-05-30 12:54:24','2020-05-30 12:54:24'),(197,3,1,'testeREF',1.24,3,'abc123','2020-03-01','2020-05-30 12:54:31','2020-05-30 12:54:31'),(198,3,1,'testeREF',1.24,3,'abc123','2020-03-01','2020-05-30 12:54:32','2020-05-30 12:54:32'),(199,3,1,'testeREF',1.24,3,'abc123','2020-03-01','2020-05-30 12:54:33','2020-05-30 12:54:33'),(200,3,1,'testeREF',1.24,3,'abc123','2020-03-01','2020-05-30 12:54:34','2020-05-30 12:54:34'),(201,3,1,'testeREF',1.24,3,'abc123','2020-03-01','2020-05-30 12:54:35','2020-05-30 12:54:35'),(202,3,1,'testeREF',1.24,3,'abc123','2020-03-30','2020-05-30 12:55:05','2020-05-30 12:55:05'),(203,3,1,'testeREF',1.24,3,'abc123','2020-03-30','2020-05-30 12:55:07','2020-05-30 12:55:07'),(204,3,1,'testeREF',1.24,3,'abc123','2020-03-30','2020-05-30 12:55:07','2020-05-30 12:55:07'),(205,3,1,'testeREF',1.24,3,'abc123','2020-03-30','2020-05-30 12:55:07','2020-05-30 12:55:07'),(206,3,1,'testeREF',1.24,3,'abc123','2020-03-30','2020-05-30 12:55:08','2020-05-30 12:55:08'),(207,3,1,'testeREF',1.24,3,'abc123','2020-03-30','2020-05-30 12:55:08','2020-05-30 12:55:08'),(208,1,1,'testeREF',1.24,30,'abc123','2020-03-30','2020-06-10 16:16:32','2020-06-10 16:16:32'),(209,1,1,'testeREF',1.24,30,'abc123','2020-02-10','2020-06-10 16:16:40','2020-06-10 16:16:40'),(210,1,1,'testeREF',1.24,30,'abc123','2020-01-10','2020-06-10 16:16:44','2020-06-10 16:16:44'),(211,1,1,'testeREF',1.24,30,'abc123','2020-04-10','2020-06-10 16:16:48','2020-06-10 16:16:48'),(212,1,1,'testeREF',1.24,30,'abc123','2020-05-10','2020-06-10 16:16:50','2020-06-10 16:16:50'),(213,1,1,'testeREF',1.24,30,'abc123','2020-06-10','2020-06-10 16:16:51','2020-06-10 16:16:51'),(214,1,1,'testeREF',1.24,30,'abc123','2020-07-10','2020-06-10 16:16:54','2020-06-10 16:16:54'),(215,1,1,'testeREF',1.24,30,'abc123','2020-08-10','2020-06-10 16:16:56','2020-06-10 16:16:56'),(216,1,1,'testeREF',1.24,30,'abc123','2020-09-10','2020-06-10 16:17:00','2020-06-10 16:17:00'),(217,1,1,'testeREF',1.24,30,'abc123','2020-10-10','2020-06-10 16:17:02','2020-06-10 16:17:02'),(218,1,1,'testeREF',1.24,30,'abc123','2020-11-10','2020-06-10 16:17:05','2020-06-10 16:17:05'),(219,1,1,'testeREF',1.24,30,'abc123','2020-12-10','2020-06-10 16:17:07','2020-06-10 16:17:07'),(220,2,1,'testeREF',1.24,34,'abc123','2020-01-10','2020-06-10 20:54:12','2020-06-10 20:54:12'),(221,2,1,'testeREF',1.29,39,'abc123','2020-02-10','2020-06-10 20:54:20','2020-06-10 20:54:20'),(222,2,1,'testeREF',1.29,20,'abc123','2020-03-10','2020-06-10 20:54:28','2020-06-10 20:54:28'),(223,2,1,'testeREF',1.29,50,'abc123','2020-04-10','2020-06-10 20:54:35','2020-06-10 20:54:35'),(224,2,1,'testeREF',1.29,10,'abc123','2020-05-10','2020-06-10 20:54:41','2020-06-10 20:54:41'),(225,2,1,'testeREF',1.29,15,'abc123','2020-06-10','2020-06-10 20:54:48','2020-06-10 20:54:48'),(226,2,1,'testeREF',1.29,5,'abc123','2020-07-10','2020-06-10 20:54:55','2020-06-10 20:54:55'),(227,2,1,'testeREF',1.29,19,'abc123','2020-08-10','2020-06-10 20:55:06','2020-06-10 20:55:06'),(228,2,1,'testeREF',1.5,19,'abc123','2020-09-10','2020-06-10 20:55:12','2020-06-10 20:55:12'),(229,2,1,'testeREF',1.5,10,'abc123','2020-10-10','2020-06-10 20:55:20','2020-06-10 20:55:20'),(230,2,1,'testeREF',1.7,11,'abc123','2020-10-10','2020-06-10 20:55:26','2020-06-10 20:55:26'),(231,2,1,'testeREF',2,11,'abc123','2020-11-10','2020-06-10 20:55:34','2020-06-10 20:55:34'),(232,2,1,'testeREF',2,20,'abc123','2020-12-10','2020-06-10 20:55:40','2020-06-10 20:55:40'),(233,3,1,'testeREF',1.25,20,'abc123','2020-01-10','2020-06-10 20:56:14','2020-06-10 20:56:14'),(234,3,1,'testeREF',1.3,22,'abc123','2020-02-10','2020-06-10 20:56:22','2020-06-10 20:56:22'),(235,3,1,'testeREF',1.32,20,'abc123','2020-03-10','2020-06-10 20:56:30','2020-06-10 20:56:30'),(236,3,1,'testeREF',1.52,22,'abc123','2020-04-10','2020-06-10 20:56:38','2020-06-10 20:56:38'),(237,3,1,'testeREF',1.52,10,'abc123','2020-05-10','2020-06-10 20:56:45','2020-06-10 20:56:45'),(238,3,1,'testeREF',1.22,10,'abc123','2020-06-10','2020-06-10 20:56:50','2020-06-10 20:56:50'),(239,3,1,'testeREF',1.29,20,'abc123','2020-07-10','2020-06-10 20:56:58','2020-06-10 20:56:58'),(240,3,1,'testeREF',1.4,25,'abc123','2020-08-10','2020-06-10 20:57:06','2020-06-10 20:57:06'),(241,3,1,'testeREF',1.2,25,'abc123','2020-10-10','2020-06-10 20:57:20','2020-06-10 20:57:20'),(242,3,1,'testeREF',1.1,35,'abc123','2020-11-10','2020-06-10 20:57:27','2020-06-10 20:57:27'),(243,3,1,'testeREF',1.6,12,'abc123','2020-12-10','2020-06-10 20:57:36','2020-06-10 20:57:36'),(244,3,1,'testeREF',1.1,29,'abc123','2020-09-10','2020-06-10 20:58:41','2020-06-10 20:58:41');
/*!40000 ALTER TABLE `Beads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Companies`
--

DROP TABLE IF EXISTS `Companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Companies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `companyName` varchar(255) NOT NULL,
  `cnpj` varchar(255) DEFAULT NULL,
  `telephone` bigint DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `zipCode` varchar(255) DEFAULT NULL,
  `number` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Companies`
--

LOCK TABLES `Companies` WRITE;
/*!40000 ALTER TABLE `Companies` DISABLE KEYS */;
INSERT INTO `Companies` VALUES (1,'Arrezo','5555555',5555555,'bruno werner 297','213231',123543,'2020-04-08 11:24:57','2020-05-30 21:02:19'),(2,'Sagga','5555555',5555555,'bruno werner 297','213231',123543,'2020-04-08 11:28:35','2020-05-30 21:01:11'),(3,'MCM','5555555',5555555,'bruno werner 297','213231',123543,'2020-05-27 11:31:57','2020-05-30 21:01:57');
/*!40000 ALTER TABLE `Companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20200323004011-create-bead.js'),('20200323114307-create-company.js'),('20200326180828-User.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'teste@bruno.com','teste4','bruno','2020-04-08 11:25:15','2020-04-08 11:25:15'),(2,'teste@bruno.com','$2a$10$qNXqFU/QAMe1l9yfiIuLO.oY8mq4o8otYHLc2dTnLM.xYQn6D4CGC','jonas','2020-04-21 20:26:18','2020-04-21 20:26:18'),(3,'usuario@teste.com','$2a$10$MjnKxHvSq.4yZd.MtsNUIOe097abJrzkii6rnH/nm1l31mXL8OziW','ze','2020-04-22 13:59:24','2020-04-22 13:59:24'),(4,'usuario@teste.com.br','$2a$10$JLxSY08W/jTNzeqGnv2uf.KUzgTZj/BF8rlPnKJsPJygYoxl6Sxhy','ze','2020-04-22 14:00:10','2020-04-22 14:00:10'),(5,'usuario@teste.com.br2','$2a$10$tqXhf4MwKpr7vjd3PkHzPuommsF./rnwToLxfyePmioTj35wPGtTa','ze','2020-04-22 14:02:01','2020-04-22 14:02:01'),(6,'usuario@teste.com.br3','$2a$10$xx0RnRRVzS.pwtbvRUGtlO42lPcd6jPus4/d45BpNdZ0eQWkoWuIG','ze','2020-04-22 14:02:10','2020-04-22 14:02:10'),(7,'usuario@teste.com.b3','$2a$10$xn8qvrWt3K6ReaeIkn4oduAHcOE7Z5LT2VZv.1tBvkKquN9YdfhdC','ze','2020-04-22 14:02:48','2020-04-22 14:02:48'),(8,'usuario@teste.com.3','$2a$10$aPNcAp1vGd6b1Y71V0Os.e1BuRcDS4.VN1RG.e1ioTcFuguhi/LpC','ze','2020-04-22 14:03:41','2020-04-22 14:03:41'),(9,'testebruno@teste.com','$2a$10$sVenYYNZTDv8fdcH29FereuTi54hF5IV/apbwklTL/3MLvdGVoK0.','bruno','2020-05-30 21:05:24','2020-05-30 21:05:24');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-29  8:27:55
