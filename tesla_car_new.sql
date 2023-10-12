-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 13, 2023 at 12:12 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tesla_car_new`
--

-- --------------------------------------------------------

--
-- Table structure for table `car_api_car`
--

CREATE TABLE `car_api_car` (
  `id` int(11) NOT NULL,
  `make` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  `image_path` varchar(100) NOT NULL,
  `year` int(10) UNSIGNED NOT NULL CHECK (`year` >= 0),
  `price` decimal(10,2) NOT NULL,
  `configuration` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`configuration`)),
  `description` longtext DEFAULT NULL,
  `variants` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`variants`)),
  `car_colors` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`car_colors`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `car_api_car`
--

INSERT INTO `car_api_car` (`id`, `make`, `model`, `image_path`, `year`, `price`, `configuration`, `description`, `variants`, `car_colors`) VALUES
(1, 'Tesla', 'Model s', 'assets/model-s-red.jpg', 0, 75000.00, '{\r\n  \"range\": \"405mi\",\r\n  \"top-speed\": \"149mph\"\r\n}', 'Est. Delivery: Oct – Nov 2023', '[\"Steering Wheel\", \"Yoke Steering\"]', '[\"white\",\"blue\",\"red\",\"black\"]'),
(2, 'Tesla', 'Model 3', 'assets/model-3.jpg', 0, 75000.00, '{\r\n  \"range\": \"405mi\",\r\n  \"top-speed\": \"149mph\"\r\n}', 'Est. Delivery: Oct – Nov 2023', '[\"Steering Wheel\", \"Yoke Steering\"]', '[\"white\",\"blue\",\"red\",\"black\"]'),
(3, 'Tesla', 'Model x', 'assets/model-x-blue.jpg', 0, 75000.00, '{\r\n  \"range\": \"405mi\",\r\n  \"top-speed\": \"149mph\"\r\n}', 'Est. Delivery: Oct – Nov 2023', '[\"Steering Wheel\", \"Yoke Steering\"]', '[\"white\",\"blue\",\"red\",\"black\"]'),
(4, 'Tesla', 'Model y', 'assets/model-y-white.jpg', 0, 75000.00, '{\r\n  \"range\": \"405mi\",\r\n  \"top-speed\": \"149mph\"\r\n}', 'Est. Delivery: Oct – Nov 2023', '[\"Steering Wheel\", \"Yoke Steering\"]', '[\"white\",\"blue\",\"red\",\"black\"]');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'car_api', '0001_initial', '2023-10-09 20:10:04.882335');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `car_api_car`
--
ALTER TABLE `car_api_car`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `car_api_car`
--
ALTER TABLE `car_api_car`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
