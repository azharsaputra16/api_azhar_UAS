-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2024 at 04:07 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api_azhar_p2`
--

-- --------------------------------------------------------

--
-- Table structure for table `viva_fantasy`
--

CREATE TABLE `viva_fantasy` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `jenis_kelamin` enum('L','P') DEFAULT NULL,
  `sifat_karakter` varchar(100) DEFAULT NULL,
  `sihir` varchar(100) DEFAULT NULL,
  `tempat` varchar(100) DEFAULT NULL,
  `senjata` varchar(100) DEFAULT NULL,
  `persen_kekuatan` int(11) DEFAULT NULL,
  `jabatan` varchar(100) DEFAULT NULL,
  `energi` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `viva_fantasy`
--

INSERT INTO `viva_fantasy` (`id`, `nama`, `jenis_kelamin`, `sifat_karakter`, `sihir`, `tempat`, `senjata`, `persen_kekuatan`, `jabatan`, `energi`) VALUES
(1, 'marvel', '', 'protagonis', 'hitam kombinasi cahaya', 'spadia', 'levram', 95, 'spade', 89),
(2, 'peppey', '', 'Protagonis', 'api', 'Spadia', 'sihir', 85, 'adik marvel', 85),
(3, 'malik', '', 'neutral', 'aura', 'vermilion', 'excalibur', 96, 'royalknights', 95),
(4, 'samsul', '', 'protagonis', 'petir dan ilusi', 'spadia', 'topaz', 90, 'adik marvel', 87),
(5, 'raja GM', '', 'protagonis', 'api kombinasi tanah', 'olvia', 'chaos', 96, 'raja olvia', 97),
(6, 'ayon', '', 'protagonis', 'air', 'olvia', 'trident', 96, 'raja elheims', 97),
(7, 'via', '', 'protagonis', 'api', 'elheims', 'surya', 85, 'heart', 78),
(8, 'herobrine', '', 'antagonis', 'api', 'babylonia', 'sihir ribuan abad lalu', 99, 'villain utama', 99),
(9, 'azrealon', '', 'protagonis', 'aura', 'babylonia', 'sihir ribuan abad lalu', 100, 'dewa', 100),
(10, 'zifa', '', 'antagonis', 'aura', 'babylonia', 'sihir ribuan abad', 100, 'ace of heart', 96);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `viva_fantasy`
--
ALTER TABLE `viva_fantasy`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `viva_fantasy`
--
ALTER TABLE `viva_fantasy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
