-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-03-2021 a las 14:25:05
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 7.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_tamaiti`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Domino'),
(2, 'Memotest'),
(3, 'Rompecabeza'),
(4, 'Kit huerta');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  `img_url` varchar(100) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `id_category` int(10) DEFAULT NULL,
  `id_sale` int(10) UNSIGNED DEFAULT NULL,
  `age` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `img_url`, `price`, `created_at`, `updated_at`, `deleted_at`, `id_category`, `id_sale`, `age`) VALUES
(1, 'Tablerito', 'Juego didactico', '', 2000, '2021-03-05 11:40:28', '2021-03-05 11:40:28', '2021-03-06 19:54:49', 0, NULL, ''),
(2, 'Cuentos y colores', 'Juego didactico', NULL, 5000, '2021-03-05 12:04:07', '2021-03-05 12:04:07', '2021-03-06 20:04:09', NULL, NULL, ''),
(3, 'Animales', 'Memotest didactico ilustrado. 30 Piezas', NULL, 500, '2021-03-05 12:06:03', '2021-03-05 12:06:03', '2021-03-06 20:23:10', NULL, NULL, '+9 años'),
(4, 'Domino de Colores S5', 'Juego didactico. Tablero y 35 piezas.', NULL, 4000, '2021-03-05 12:21:46', '2021-03-05 12:21:46', '2021-03-06 20:23:14', NULL, NULL, '3 a 6 años'),
(5, 'Rimas de colores', 'Juego didactico', NULL, 400, '2021-03-05 13:04:08', '2021-03-05 13:04:08', '2021-03-06 20:23:12', NULL, NULL, '3 a 6 años'),
(6, 'Anidomino', 'Juego didactico', 'Anidomino1614950036393.jpg', 344, '2021-03-05 13:13:56', '2021-03-05 13:13:56', '2021-03-06 20:01:30', NULL, NULL, ''),
(7, 'Cuentos y colores', 'Memotest didactico ilustrado. 30 Piezas', 'Cuentos y colores1614952230538.jpgCuentos y colores', 500, '2021-03-05 13:50:30', '2021-03-05 13:50:30', '2021-03-06 20:03:29', NULL, NULL, ''),
(8, 'Cuentos clasicos', 'Juego didactico. Tablero y 35 piezas.', 'Cuentos clasicos1614952399128.jpg', 300, '2021-03-05 13:53:19', '2021-03-05 13:53:19', NULL, NULL, NULL, '+9 años'),
(9, 'Quien es quien', 'Juego didactico', 'Quien es quien1614952485280.jpg', 555, '2021-03-05 13:54:45', '2021-03-05 13:54:45', '2021-03-09 00:48:32', NULL, NULL, '3 a 6 años'),
(10, 'Animales de la selva', 'Memotest didactico ilustrado. 30 Piezas', 'Letras y numeros1614952677690.jpg', 1200, '2021-03-05 13:57:57', '2021-03-09 18:09:10', NULL, NULL, NULL, '+9 años'),
(11, 'Memo', 'Memotest didactico ilustrado. 30 Piezas', 'Memo1614963422173.jpg', 2000, '2021-03-05 16:57:02', '2021-03-05 16:57:02', NULL, NULL, NULL, '3 a 6 años'),
(12, 'Plantas', 'Juego didactico', 'Plantas1614963853525.jpg', 4000, '2021-03-05 17:04:13', '2021-03-05 17:04:13', NULL, NULL, NULL, '3 a 6 años'),
(13, 'Huerta organica', 'Juego didactico', 'Huerta organica1614964917722.jpg', 990, '2021-03-05 17:21:57', '2021-03-05 17:21:57', NULL, NULL, NULL, '6 a 9 años'),
(14, 'Mantita de colores', 'Memotest didactico ilustrado. 30 Piezas', 'Mantita de colores1614965205057.jpg', 444, '2021-03-05 17:26:45', '2021-03-05 17:26:45', NULL, NULL, NULL, '3 a 6 años'),
(15, 'Mantita de colores', 'Memotest didactico ilustrado. 30 Piezas', 'Mantita de colores1614966616902.jpg', 444, '2021-03-05 17:50:16', '2021-03-05 17:50:16', NULL, NULL, NULL, '3 a 6 años'),
(16, 'Numeros y letras', 'Juego didactico. Tablero y 35 piezas.', 'Numeros y letras1614966855831.jpg', 999, '2021-03-05 17:54:15', '2021-03-05 17:54:15', NULL, NULL, NULL, '3 a 6 años'),
(17, 'Medios de Transporte', 'Juego didactico. Tablero y 35 piezas.', 'Medios de Transporte1614967207985.jpg', 555, '2021-03-05 18:00:08', '2021-03-05 18:00:08', NULL, NULL, NULL, '6 a 9 años'),
(18, 'Vocales ', 'Memotest didactico ilustrado. 30 Piezas', 'Vocales 1614970378522.jpg', 666, '2021-03-05 18:52:58', '2021-03-05 18:52:58', NULL, NULL, NULL, '6 a 9 años'),
(19, 'Consonantes', 'Memotest didactico ilustrado. 30 Piezas', 'Consonantes1614970720888.jpg', 777, '2021-03-05 18:58:40', '2021-03-05 18:58:40', NULL, 2, NULL, '3 a 6 años'),
(20, 'Colores Primarios', 'Memotest didactico ilustrado. 30 Piezas', 'Colores Primarios1614970905357.jpg', 870, '2021-03-05 19:01:45', '2021-03-05 19:01:45', NULL, 2, NULL, '3 a 6 años'),
(21, 'Paloma blanca', 'Juego didactico. Tablero y 35 piezas.', 'Paloma blanca1615030980119.jpg', 4000, '2021-03-06 11:43:00', '2021-03-06 11:43:00', NULL, 2, NULL, '6 a 9 años'),
(22, 'Paloma Rosa', 'Juego didactico. Tablero y 35 piezas.', 'Gato azul1615043663335.jpg', 5590, '2021-03-06 15:14:23', '2021-03-06 15:53:24', NULL, 4, NULL, '+9 años'),
(23, 'Unicornio Azul', 'Juego didactico. Tablero y 39 piezas.', 'Unicornio Azul1615235309274.jpg', 999, '2021-03-08 20:28:29', '2021-03-08 20:28:29', NULL, 2, NULL, '+9 años'),
(24, 'elina', 'Memotest didactico ilustrado. 30 Piezas', 'elina1615250868689.jpg', 999, '2021-03-09 00:47:48', '2021-03-09 00:47:48', NULL, 3, NULL, '6 a 9 años'),
(25, 'Margaritas del jardin', 'Juego didactico. Tablero y 39 piezas.', 'Margaritas del jardin1615314645995.jpg', 300, '2021-03-09 18:30:46', '2021-03-09 18:30:46', NULL, 4, NULL, '1 a 3 años');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sale`
--

CREATE TABLE `sale` (
  `id` int(10) UNSIGNED NOT NULL,
  `amount` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `id_user` int(10) NOT NULL,
  `id_product` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `dni` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `id_sale` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `name`, `last_name`, `email`, `avatar`, `password`, `dni`, `created_at`, `updated_at`, `deleted_at`, `id_sale`) VALUES
(1, 'Carlos', 'Beltran', 'elinabeltran@gmail.com', 'Carlos1615312444665.png', 'Monito22', NULL, '2021-03-06 23:13:46', '2021-03-09 17:54:04', NULL, NULL),
(2, 'Nelida', 'Franquet', 'manuel@gmail.com', 'Carmela1615312729878.jpg', 'Manuel1234', NULL, '2021-03-06 23:18:14', '2021-03-09 18:04:44', NULL, NULL),
(3, 'Sofia', 'Claus', 'claus@gmail.com', 'Sofia1615072761990.png', 'Sofia1234', NULL, '2021-03-06 23:19:21', '2021-03-06 23:19:21', NULL, NULL),
(4, 'Tomas', 'Garcia', 'garcia@hotmail.com', 'Tomas1615311934621.png', 'antonio1234', NULL, '2021-03-06 23:27:29', '2021-03-09 17:45:34', NULL, NULL),
(5, 'Vicente', 'Calonia', 'calonia@pappa.com', 'Vicente1615073436391.png', 'vicente1234', NULL, '2021-03-06 23:30:36', '2021-03-06 23:30:36', NULL, NULL),
(6, 'Camila', 'Gonzales', 'gonzales@sarasa.com', 'Camila1615073548528.png', 'camila1234', NULL, '2021-03-06 23:32:28', '2021-03-06 23:32:28', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_sale_idx` (`id_sale`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sale`
--
ALTER TABLE `sale`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sale`
--
ALTER TABLE `sale`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `id_sale` FOREIGN KEY (`id_sale`) REFERENCES `sale` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
