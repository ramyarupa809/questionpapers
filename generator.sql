-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 11, 2023 at 02:28 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `connect`
--

-- --------------------------------------------------------

--
-- Table structure for table `generator`
--

CREATE TABLE `generator` (
  `id` int(11) NOT NULL,
  `paper_name` varchar(50) NOT NULL,
  `marks` int(11) NOT NULL,
  `timer` int(11) NOT NULL,
  `paper_no` int(11) NOT NULL,
  `question_no` int(11) NOT NULL,
  `multi_question` varchar(100) NOT NULL,
  `op1` varchar(100) NOT NULL,
  `op2` varchar(100) NOT NULL,
  `op3` varchar(100) NOT NULL,
  `op4` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `generator`
--

INSERT INTO `generator` (`id`, `paper_name`, `marks`, `timer`, `paper_no`, `question_no`, `multi_question`, `op1`, `op2`, `op3`, `op4`) VALUES
(1, 'English', 20, 30, 1, 1, 'Rama is playing a game. Find the verb', 'Rama', 'Playing', 'Is', 'Game'),
(2, 'English', 20, 30, 1, 2, 'Virat has three brothers. Find the adjective', 'Virat', 'has', 'three', 'brothers'),
(3, 'English', 20, 30, 1, 3, 'He is going on a cycle. Find the verb', 'He', 'going', 'cycle', 'on'),
(4, 'Maths', 20, 30, 2, 1, 'What is 2+2', '2', '4', '6', '8'),
(5, 'Maths', 20, 30, 1, 2, 'what is 2(2/2)+3(4*2)', '26', '60', '-4', '13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `generator`
--
ALTER TABLE `generator`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `generator`
--
ALTER TABLE `generator`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
