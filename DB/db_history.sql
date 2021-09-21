-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 21, 2021 at 07:55 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_history`
--

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `ciudad` varchar(250) COLLATE utf8_bin NOT NULL,
  `info` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `ciudad`, `info`) VALUES
(61, 'New york', '{\"coord\":{\"lon\":-74.006,\"lat\":40.7143},\"weather\":[{\"id\":721,\"main\":\"Haze\",\"description\":\"haze\",\"icon\":\"50d\"}],\"base\":\"stations\",\"main\":{\"temp\":297.12,\"feels_like\":297.24,\"temp_min\":294.79,\"temp_max\":299.12,\"pressure\":1028,\"humidity\":64},\"visibility\":8047,\"wind\":{\"speed\":5.66,\"deg\":250,\"gust\":22.12},\"clouds\":{\"all\":40},\"dt\":1632245678,\"sys\":{\"type\":1,\"id\":4610,\"country\":\"US\",\"sunrise\":1632220966,\"sunset\":1632264919},\"timezone\":-14400,\"id\":5128581,\"name\":\"New York\",\"cod\":200}'),
(62, 'ibague', '{\"coord\":{\"lon\":-75.2322,\"lat\":4.4389},\"weather\":[{\"id\":803,\"main\":\"Clouds\",\"description\":\"broken clouds\",\"icon\":\"04d\"}],\"base\":\"stations\",\"main\":{\"temp\":299.36,\"feels_like\":299.36,\"temp_min\":299.36,\"temp_max\":299.36,\"pressure\":1013,\"humidity\":66,\"sea_level\":1013,\"grnd_level\":883},\"visibility\":10000,\"wind\":{\"speed\":2.96,\"deg\":147,\"gust\":2.73},\"clouds\":{\"all\":68},\"dt\":1632246013,\"sys\":{\"country\":\"CO\",\"sunrise\":1632221427,\"sunset\":1632265047},\"timezone\":-18000,\"id\":3680656,\"name\":\"IbaguÃ©\",\"cod\":200}'),
(63, 'IbaguÃ©', '{\"coord\":{\"lon\":-75.2322,\"lat\":4.4389},\"weather\":[{\"id\":803,\"main\":\"Clouds\",\"description\":\"broken clouds\",\"icon\":\"04d\"}],\"base\":\"stations\",\"main\":{\"temp\":299.36,\"feels_like\":299.36,\"temp_min\":299.36,\"temp_max\":299.36,\"pressure\":1013,\"humidity\":66,\"sea_level\":1013,\"grnd_level\":883},\"visibility\":10000,\"wind\":{\"speed\":2.96,\"deg\":147,\"gust\":2.73},\"clouds\":{\"all\":68},\"dt\":1632245888,\"sys\":{\"country\":\"CO\",\"sunrise\":1632221427,\"sunset\":1632265047},\"timezone\":-18000,\"id\":3680656,\"name\":\"IbaguÃ©\",\"cod\":200}'),
(64, 'IbaguÃ©', '{\"coord\":{\"lon\":-75.2322,\"lat\":4.4389},\"weather\":[{\"id\":803,\"main\":\"Clouds\",\"description\":\"broken clouds\",\"icon\":\"04d\"}],\"base\":\"stations\",\"main\":{\"temp\":299.36,\"feels_like\":299.36,\"temp_min\":299.36,\"temp_max\":299.36,\"pressure\":1013,\"humidity\":66,\"sea_level\":1013,\"grnd_level\":883},\"visibility\":10000,\"wind\":{\"speed\":2.96,\"deg\":147,\"gust\":2.73},\"clouds\":{\"all\":68},\"dt\":1632245888,\"sys\":{\"country\":\"CO\",\"sunrise\":1632221427,\"sunset\":1632265047},\"timezone\":-18000,\"id\":3680656,\"name\":\"IbaguÃ©\",\"cod\":200}'),
(65, 'New York', '{\"coord\":{\"lon\":-74.006,\"lat\":40.7143},\"weather\":[{\"id\":804,\"main\":\"Clouds\",\"description\":\"overcast clouds\",\"icon\":\"04d\"}],\"base\":\"stations\",\"main\":{\"temp\":297.17,\"feels_like\":297.35,\"temp_min\":294.79,\"temp_max\":299.43,\"pressure\":1028,\"humidity\":66},\"visibility\":10000,\"wind\":{\"speed\":3.13,\"deg\":143,\"gust\":4.47},\"clouds\":{\"all\":98},\"dt\":1632246478,\"sys\":{\"type\":2,\"id\":2008776,\"country\":\"US\",\"sunrise\":1632220966,\"sunset\":1632264919},\"timezone\":-14400,\"id\":5128581,\"name\":\"New York\",\"cod\":200}'),
(66, 'IbaguÃ©', '{\"coord\":{\"lon\":-75.2322,\"lat\":4.4389},\"weather\":[{\"id\":803,\"main\":\"Clouds\",\"description\":\"broken clouds\",\"icon\":\"04d\"}],\"base\":\"stations\",\"main\":{\"temp\":299.36,\"feels_like\":299.36,\"temp_min\":299.36,\"temp_max\":299.36,\"pressure\":1013,\"humidity\":66,\"sea_level\":1013,\"grnd_level\":883},\"visibility\":10000,\"wind\":{\"speed\":2.96,\"deg\":147,\"gust\":2.73},\"clouds\":{\"all\":68},\"dt\":1632245888,\"sys\":{\"country\":\"CO\",\"sunrise\":1632221427,\"sunset\":1632265047},\"timezone\":-18000,\"id\":3680656,\"name\":\"IbaguÃ©\",\"cod\":200}');

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
