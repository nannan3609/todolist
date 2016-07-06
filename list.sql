-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-07-06 13:29:42
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `missionList`
--

-- --------------------------------------------------------

--
-- 表的结构 `list`
--

CREATE TABLE `list` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `content` varchar(100) NOT NULL,
  `time` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `list`
--

INSERT INTO `list` (`id`, `title`, `content`, `time`, `status`) VALUES
(1, '吃饭', '吃饭', '2016年6月30日', 'finish'),
(2, '看电视', '看电视', '2016年6月30日', 'finish'),
(3, '欧洲杯', '欧洲杯', '2016年6月30日', 'unfinish'),
(4, '睡觉', '睡觉', '2016年6月30日', 'unfinish'),
(6, '洗脸', '洗脸', '2016年6月30日', 'finish'),
(7, '洗澡', '洗澡', '2016年7月1日', 'finish'),
(8, '上班', '上班', '2016年7月1日', 'unfinish'),
(9, '上班', '上班', '2016年7月1日', 'unfinish'),
(10, '回家', '回家', '2016年7月1日', 'unfinish'),
(11, '洗洗睡了', '洗洗睡了', '2016年7月1日', 'unfinish'),
(12, '交作业吧', '好好好', '2016年7月2日', 'unfinish');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `list`
--
ALTER TABLE `list`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `list`
--
ALTER TABLE `list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
