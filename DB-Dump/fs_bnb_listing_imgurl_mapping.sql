-- MySQL dump 10.13  Distrib 5.6.19, for osx10.7 (i386)
--
-- Host: localhost    Database: fs_bnb
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `listing_imgurl_mapping`
--

DROP TABLE IF EXISTS `listing_imgurl_mapping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `listing_imgurl_mapping` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `listingId` int(6) unsigned NOT NULL,
  `imgUrl` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `listingImgUrl_idx` (`listingId`),
  CONSTRAINT `listingImgUrl` FOREIGN KEY (`listingId`) REFERENCES `listing` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listing_imgurl_mapping`
--

LOCK TABLES `listing_imgurl_mapping` WRITE;
/*!40000 ALTER TABLE `listing_imgurl_mapping` DISABLE KEYS */;
INSERT INTO `listing_imgurl_mapping` VALUES (1,1,'https://assets.architecturaldesigns.com/plan_assets/325002316/large/500063VV_01_1556635118.jpg?1556635119'),(2,2,'https://wp.zillowstatic.com/streeteasy/2/tile-floor-design-piece-0c0f7d.jpg'),(3,3,'http://www.districtpartners.com/images/11379577_s_450.jpg'),(4,4,'https://odis.homeaway.com/odis/listing/e894c5de-91a2-461b-9dc1-586bed183647.c10.jpg'),(5,5,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoeAuHYoTy1a6uuKGYCLpxuIPU3V3YEcefGbSEz1IC3PzobOtn'),(6,6,'https://odis.homeaway.com/odis/listing/fbd67356-418b-4494-8b5d-e9857cb5d571.f10.jpg');
/*!40000 ALTER TABLE `listing_imgurl_mapping` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-04 10:04:09
