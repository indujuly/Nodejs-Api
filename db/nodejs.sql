-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 16, 2016 at 01:26 PM
-- Server version: 10.1.9-MariaDB
-- PHP Version: 5.5.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `id` int(11) NOT NULL,
  `driverId` varchar(50) NOT NULL,
  `bookId` varchar(100) NOT NULL,
  `mobile` varchar(50) NOT NULL,
  `city` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `vehicletype` varchar(50) NOT NULL,
  `source` varchar(100) NOT NULL,
  `destination` varchar(100) NOT NULL,
  `startTime` varchar(50) NOT NULL,
  `endTime` varchar(50) NOT NULL,
  `km` varchar(50) NOT NULL,
  `trackId` varchar(100) NOT NULL,
  `carId` varchar(100) NOT NULL,
  `paystatus` int(11) NOT NULL DEFAULT '0',
  `status` int(11) NOT NULL DEFAULT '0',
  `bookDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`id`, `driverId`, `bookId`, `mobile`, `city`, `email`, `vehicletype`, `source`, `destination`, `startTime`, `endTime`, `km`, `trackId`, `carId`, `paystatus`, `status`, `bookDate`) VALUES
(3, '', 'cp3', '5656561s', '', 'cus1@gmail.com', '', 'onedf', 'two1', '17:7', '', '', '', '', 0, 0, '2016-02-13 11:37:23'),
(4, '0002', 'cp4', '9080706050', '', 'cus2@gmail.com', '', '', '', '', '19:31', '', '', '', 1, 1, '2016-02-11 14:01:13'),
(5, '', 'CB5', '9600921722', 'trichy', 'kevell@gmail.com', 'bus', 'trichy', 'salem', '', '', '', '', '', 0, 0, '2016-02-11 07:57:37'),
(6, '', 'cp6', '9600921722', 'trichy', 'kevell@gmail.com', 'bus', 'trichy', 'salem', '', '', '', '', '', 0, 0, '2016-02-11 07:59:01'),
(7, '', 'CB7', '9600921722', 'trichy', 'kevell@gmail.com', 'bus', 'trichy', 'salem', '', '', '', '', '', 0, 0, '2016-02-13 11:27:51'),
(8, '', 'CB8', '9600921722', 'trichy', 'kevell@gmail.com', 'bus', 'trichy', 'salem', '', '', '', '', '', 0, 0, '2016-02-13 11:29:11'),
(9, '', 'CB9', '9600921722', 'trichy', 'kevell@gmail.com', 'bus', 'trichy', 'salem', '', '', '', '', '', 0, 0, '2016-02-13 11:32:21'),
(10, '', 'CB10', '9600921722', 'trichy', 'kevell@gmail.com', 'bus', 'trichy', 'salem', '', '', '', '', '', 0, 0, '2016-02-13 11:37:09'),
(11, '', 'CB11', '9600921722', 'trichy', 'kevell@gmail.com', 'bus', 'trichy', 'salem', '', '', '', '', '', 0, 0, '2016-02-13 11:39:33'),
(12, '', 'CB12', '9600921722', 'trichy', 'kevell@gmail.com', 'bus', 'trichy', 'salem', '', '', '', '', '', 0, 0, '2016-02-13 11:39:58');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `bid` varchar(50) NOT NULL,
  `did` varchar(50) NOT NULL,
  `name` varchar(200) NOT NULL,
  `address` text NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `bid`, `did`, `name`, `address`, `email`, `phone`) VALUES
(2, 'cp2', '', 'Nadya Eka', 'Jl. Ciwidey no 20', 'nadya@yahoo.com', '086454743743'),
(3, 'cp4', '', 'Amali', 'Jl. kemandoran no 10 Jakarta', 'amalia@langit.com', '03937263623'),
(4, 'cp4', '', 'Angel ', 'Jl. Ciledug no 45A. tanggerang', 'angel@gmail.com', '082271626121'),
(5, '', '', 'Ujang', 'Jl. ribut no 90 A', 'ujang@gmail.com', '07846352532'),
(6, '', '', 'Memet', 'Blok cepu no 14. Bandung', 'memet@ongkek.com', '038372636232'),
(9, '', '', 'Agung', 'Jl st Petersburg no 34. Russia', 'agung@yahoo.com', '038373273262'),
(10, '', '', 'Jhon Taylor', 'St paris A . Block 43. paris', 'jtaylor@yahoo.com', '039223232323'),
(19, 'cp19', '0002', 'Kevell', 'corp', '', ''),
(20, 'cp20', '1', 'Kevell', 'corp', '', ''),
(21, 'cp21', '0001', 'Kevell', 'corp', '', ''),
(22, '', '', 'Kevell', 'corp', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `driver`
--

CREATE TABLE `driver` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `mobile` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `did` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `driver`
--

INSERT INTO `driver` (`id`, `name`, `mobile`, `email`, `did`) VALUES
(1, 'driver1', '6456457', 'driver@gmail.com', '0001'),
(2, 'driver2', '536457657', 'driver2@gmail.com', '0002');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `id` int(11) NOT NULL,
  `km` varchar(50) NOT NULL,
  `amount` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`id`, `km`, `amount`) VALUES
(1, '1', '10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `driver`
--
ALTER TABLE `driver`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `driver`
--
ALTER TABLE `driver`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
