-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-03-2021 a las 12:34:55
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
(2, 'Cuentos y colores', 'Juego didactico', NULL, 5000, '2021-03-05 12:04:07', '2021-03-05 12:04:07', '2021-03-06 20:04:09', 3, NULL, ''),
(3, 'Animales', 'Memotest didactico ilustrado. 30 Piezas', NULL, 500, '2021-03-05 12:06:03', '2021-03-05 12:06:03', '2021-03-06 20:23:10', 2, NULL, '+9 años'),
(4, 'Domino de Colores S5', 'Juego didactico. Tablero y 35 piezas.', NULL, 4000, '2021-03-05 12:21:46', '2021-03-05 12:21:46', '2021-03-06 20:23:14', 3, NULL, '3 a 6 años'),
(5, 'Rimas de colores', 'Juego didactico', NULL, 400, '2021-03-05 13:04:08', '2021-03-05 13:04:08', '2021-03-06 20:23:12', 3, NULL, '3 a 6 años'),
(6, 'Anidomino', 'Juego didactico', 'Anidomino1614950036393.jpg', 344, '2021-03-05 13:13:56', '2021-03-05 13:13:56', '2021-03-06 20:01:30', 3, NULL, ''),
(7, 'Cuentos y colores', 'Memotest didactico ilustrado. 30 Piezas', 'Cuentos y colores1614952230538.jpgCuentos y colores', 500, '2021-03-05 13:50:30', '2021-03-05 13:50:30', '2021-03-06 20:03:29', 3, NULL, ''),
(8, 'Cuentos Modernos', 'Juego didactico. Tablero y 35 piezas.', 'Cuentos clasicos1614952399128.jpg', 300, '2021-03-05 13:53:19', '2021-03-10 22:35:38', '2021-03-10 22:35:48', 2, NULL, '1 a 3 años'),
(9, 'Quien es quien', 'Juego didactico', 'Quien es quien1614952485280.jpg', 555, '2021-03-05 13:54:45', '2021-03-05 13:54:45', '2021-03-09 00:48:32', 3, NULL, '3 a 6 años'),
(10, '', 'Memotest didactico ilustrado. 30 Piezas', 'Letras y numeros1614952677690.jpg', 800, '2021-03-05 13:57:57', '2021-03-22 18:47:13', NULL, 3, NULL, '1 a 3 años'),
(11, 'Memo 3', 'Memotest didactico ilustrado. 30 Piezas', 'Memo1614963422173.jpg', 2000, '2021-03-05 16:57:02', '2021-03-22 19:09:39', NULL, 3, NULL, '1 a 3 años'),
(12, 'Plantas', 'Juego didactico', 'Plantas1614963853525.jpg', 4000, '2021-03-05 17:04:13', '2021-03-05 17:04:13', NULL, 2, NULL, '3 a 6 años'),
(13, 'Huerta organica', 'Juego didactico', 'Huerta organica1614964917722.jpg', 990, '2021-03-05 17:21:57', '2021-03-05 17:21:57', NULL, 2, NULL, '6 a 9 años'),
(14, 'Mantita de colores', 'Memotest didactico ilustrado. 30 Piezas', 'Mantita de colores1614965205057.jpg', 444, '2021-03-05 17:26:45', '2021-03-05 17:26:45', NULL, 2, NULL, '3 a 6 años'),
(15, 'Mantita de colores', 'Memotest didactico ilustrado. 30 Piezas', 'Mantita de colores1614966616902.jpg', 444, '2021-03-05 17:50:16', '2021-03-05 17:50:16', NULL, 2, NULL, '3 a 6 años'),
(16, 'Numeros y letras', 'Juego didactico. Tablero y 35 piezas.', 'Numeros y letras1614966855831.jpg', 999, '2021-03-05 17:54:15', '2021-03-05 17:54:15', NULL, 3, NULL, '3 a 6 años'),
(17, 'Medios de Transporte', 'Juego didactico. Tablero y 35 piezas.', 'Medios de Transporte1614967207985.jpg', 555, '2021-03-05 18:00:08', '2021-03-05 18:00:08', NULL, 2, NULL, '6 a 9 años'),
(18, 'Vocales ', 'Memotest didactico ilustrado. 30 Piezas', 'Vocales 1614970378522.jpg', 666, '2021-03-05 18:52:58', '2021-03-05 18:52:58', NULL, 1, NULL, '6 a 9 años'),
(19, 'Consonantes', 'Memotest didactico ilustrado. 30 Piezas', 'Consonantes1614970720888.jpg', 777, '2021-03-05 18:58:40', '2021-03-05 18:58:40', NULL, 2, NULL, '3 a 6 años'),
(20, 'Colores Primarios', 'Memotest didactico ilustrado. 30 Piezas', 'Colores Primarios1614970905357.jpg', 870, '2021-03-05 19:01:45', '2021-03-05 19:01:45', NULL, 2, NULL, '3 a 6 años'),
(21, 'Paloma blanca', 'Juego didactico. Tablero y 35 piezas.', 'Paloma blanca1615030980119.jpg', 4000, '2021-03-06 11:43:00', '2021-03-06 11:43:00', NULL, 2, NULL, '6 a 9 años'),
(22, 'Paloma Rosa', 'Juego didactico. Tablero y 35 piezas.', 'Gato azul1615043663335.jpg', 5590, '2021-03-06 15:14:23', '2021-03-06 15:53:24', NULL, 4, NULL, '+9 años'),
(23, 'Unicornio Azul', 'Juego didactico. Tablero y 39 piezas.', 'Unicornio Azul1615235309274.jpg', 999, '2021-03-08 20:28:29', '2021-03-08 20:28:29', NULL, 2, NULL, '+9 años'),
(24, 'elina', 'Memotest didactico ilustrado. 30 Piezas', 'elina1615250868689.jpg', 999, '2021-03-09 00:47:48', '2021-03-09 00:47:48', NULL, 3, NULL, '6 a 9 años'),
(25, 'Margaritas del jardin', 'Juego didactico. Tablero y 39 piezas.', 'Margaritas del jardin1615314645995.jpg', 300, '2021-03-09 18:30:46', '2021-03-09 18:30:46', NULL, 4, NULL, '1 a 3 años'),
(26, 'Domino de Letras', 'Juego didactico. Tablero y 35 piezas.', 'Domino de Letras1615415890009.jpg', 900, '2021-03-10 22:38:10', '2021-03-10 22:38:10', NULL, 3, NULL, '6 a 9 años'),
(27, 'Anidomino', 'Memotest didactico ilustrado. 30 Piezas', 'Anidomino1615494741900.jpg', 900, '2021-03-11 20:32:21', '2021-03-11 20:32:21', NULL, 3, NULL, '6 a 9 años'),
(28, 'Buba GUM', 'Memotest didactico ilustrado. 30 Piezas', 'Buba GUM1615495257854.png', 0, '2021-03-11 20:40:57', '2021-03-11 20:40:57', '2021-03-11 20:41:11', 3, NULL, '6 a 9 años'),
(29, '', '', '1615502576396.jpg', 0, '2021-03-11 22:42:56', '2021-03-11 22:42:56', '2021-03-15 20:07:37', 1, NULL, '1 a 3 años'),
(30, 'Picachu', 'Memotest didactico ilustrado. 30 Piezas', 'Picachu1615838844747.jpg', 990, '2021-03-15 20:07:24', '2021-03-15 20:07:24', NULL, 3, NULL, '+9 años'),
(31, 'Jirafa de colores', 'Memotest didactico ilustrado. 30 Piezas', 'Jirafa de colores1616428801226.jpg', 990, '2021-03-22 16:00:01', '2021-03-22 16:00:01', '2021-03-22 16:08:12', 3, NULL, '3 a 6 años'),
(32, 'Pizarra', 'Juego didactico. Tablero y 39 piezas.', 'Pizarra1616429345213.jpg', 660, '2021-03-22 16:09:05', '2021-03-22 16:09:05', '2021-03-22 16:43:35', 3, NULL, '1 a 3 años'),
(33, 'Memoria Express', 'Memotest didactico ilustrado. 30 Piezas', 'Memoria Express1616431487451.jpg', 330, '2021-03-22 16:44:47', '2021-03-22 16:44:47', NULL, 3, NULL, '1 a 3 años');

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
(2, 'Carmela', 'Garcia', 'garcia@gmail.com', 'Carmela1615312729878.jpg', 'Manuel1234', NULL, '2021-03-06 23:18:14', '2021-03-10 23:05:08', NULL, NULL),
(3, 'Sofia', 'Claus', 'claus@gmail.com', 'Sofia1615072761990.png', 'Sofia1234', NULL, '2021-03-06 23:19:21', '2021-03-06 23:19:21', NULL, NULL),
(4, 'Tomas', 'Garcia', 'garcia@hotmail.com', 'Tomas1615311934621.png', 'antonio1234', NULL, '2021-03-06 23:27:29', '2021-03-09 17:45:34', NULL, NULL),
(5, 'Vicente', 'Calonia', 'calonia@pappa.com', 'Vicente1615073436391.png', 'vicente1234', NULL, '2021-03-06 23:30:36', '2021-03-06 23:30:36', NULL, NULL),
(6, 'Camila', 'Gonzales', 'gonzales@sarasa.com', 'Camila1615073548528.png', 'camila1234', NULL, '2021-03-06 23:32:28', '2021-03-06 23:32:28', NULL, NULL),
(7, 'Dario', 'Sonriente', 'dario@dario.com', 'Dario1615416667899.png', 'monito1234', NULL, '2021-03-10 22:51:07', '2021-03-10 22:51:07', NULL, NULL),
(8, 'Carlitos', 'Bala', 'bala@bala.com', 'Carlitos1615417092895.png', 'carlos1234', NULL, '2021-03-10 22:58:12', '2021-03-10 22:58:12', NULL, NULL),
(9, 'Nelida', 'Capristo', 'PAPAPA@gmail.com', 'Nelida1615417723445.png', 'nelida1234', NULL, '2021-03-10 23:08:43', '2021-03-10 23:08:43', NULL, NULL),
(10, 'Andres', 'Gaspachi', 'PAPAPA2@gmail.com', 'Andres1615417831839.png', 'koko', NULL, '2021-03-10 23:10:31', '2021-03-10 23:10:31', NULL, NULL),
(11, 'Pepe', 'Papa', 'pepe@gmail.com', 'Pepe1615417955604.png', 'pepe1234', NULL, '2021-03-10 23:12:35', '2021-03-10 23:12:35', NULL, NULL),
(12, 'Pedro', 'Picapiedras', 'picapiedras@gmail.com', 'Pedro1615418144851.png', 'picapiedras1234', NULL, '2021-03-10 23:15:44', '2021-03-10 23:15:44', NULL, NULL),
(13, 'Vilma', 'Marmol', 'marmol@marmol.com', 'Vilma1615418263082.png', 'vilma12345', NULL, '2021-03-10 23:17:43', '2021-03-10 23:17:43', NULL, NULL),
(14, 'Marta', 'Sanchez', 'sanche@marmol.com', 'Marta1615418384471.png', 'sanchez1234', NULL, '2021-03-10 23:19:44', '2021-03-10 23:19:44', NULL, NULL),
(15, 'Lucia', 'Castillo', 'castillo@castillo.com', 'Lucia1615589790224.png', '$2a$12$ZlI9Novacco1mzsYXKptKOd0YjxbafVrq4QhYsJDtqMehgcchvvJK', NULL, '2021-03-12 22:56:32', '2021-03-12 22:56:32', NULL, NULL),
(16, 'Pedro', 'Picapiedras', 'pedro@pedro.com', 'Pedro1615593843000.png', '$2a$12$i3MfJKSKiFqLUOb19WGT0.K4jF0JfoYTEQOwAVBiQ6J8q0M8JZnXy', NULL, '2021-03-13 00:04:04', '2021-03-13 00:04:04', NULL, NULL),
(17, 'Micaela', 'Beltrano', 'micaela@micaela.com', 'Micaela1615838471123.jpg', '$2a$12$DzlxM2WQk7h7mDTK1FTT8.bkyDBCN63ronvZnrV.ioivfR0L8bGI2', NULL, '2021-03-15 20:01:12', '2021-03-15 20:01:57', NULL, NULL),
(18, 'Pampa', 'Humeda', 'pampa@pampa.com', 'Pampa1616068437628.png', '$2a$12$ZMjtVQfCrKiucGIYM8z.xOItloyozP4uP1wUlfcGDS4GNXr9.KvLq', NULL, '2021-03-18 11:53:59', '2021-03-18 11:53:59', NULL, NULL),
(19, 'Clara', 'Demarco', 'clara@clara.com', 'Clara1616088760084.jpg', '$2a$12$t1T8SBpVsyUrVEX9VyMpVOalmzfud0jaPhYP8.y4vswxLLMyv7ErS', NULL, '2021-03-18 17:32:41', '2021-03-21 10:39:50', NULL, NULL),
(20, 'Manuel', 'Anana', 'manuel@manuel.com', 'Manuel1616326116317.png', '$2a$12$GJ7vuCKGIHOEgc2at82WwOWQxOYeJDnRMNs1bssnej5k5Hl94nTkW', NULL, '2021-03-21 11:28:38', '2021-03-21 11:28:38', NULL, NULL),
(21, 'Marta', 'Sanchez', 'marta@marta.com', 'Marta1616326649384.png', '$2a$12$ZND73kUA75O69FXYMTfeoO2MpgkMhepnNuErGlgKnFOtSCj7Katp2', NULL, '2021-03-21 11:37:31', '2021-03-21 11:37:31', NULL, NULL),
(22, 'Marisa', 'Gonzalez', 'marisa@marisa.com', 'Marisa1616328323140.png', '$2a$12$wdujHK3qz8x3.v2gnCZJGOGZdzWMWi7HG9ewa2b1o6WUAwOLfacoS', NULL, '2021-03-21 12:05:25', '2021-03-21 12:05:25', NULL, NULL),
(23, 'Carolina', 'Garcia', 'carolina@carolina.com', 'Carolina1616328416503.jpg', '$2a$12$06Wl8kWpzmwES8Bif/obPOOnAQ6KyivL2BiOYjqPACCzd8fs13FaW', NULL, '2021-03-21 12:06:58', '2021-03-21 12:06:58', NULL, NULL),
(24, 'Mandarina', 'Garcia', 'mandarina@mandarina.com', 'Mandarina1616328596261.jpg', '$2a$12$VaT8WKG6R2dufa6QPbSmm.bYOWETDKBkSSWBrBMzeFyfhfIUCPzT.', NULL, '2021-03-21 12:09:58', '2021-03-21 12:09:58', NULL, NULL),
(25, 'Banana', 'Garcia', 'banana@banana.com', 'Banana1616329256700.png', '$2a$12$jd6kBF7kAl0FV5vwFpr9XeTlO/1vsM/UJDYSZ26OF5oNj8BrW3mkS', NULL, '2021-03-21 12:20:59', '2021-03-21 12:20:59', NULL, NULL),
(26, 'Aki', 'Garza', 'aki@aki.com', 'Aki1616329318868.png', '$2a$12$w5HctdR5OKV9dEUGLUcoZes/c2XmZS.CPkKa52nj95XEipR4hQdha', NULL, '2021-03-21 12:22:00', '2021-03-21 12:22:00', NULL, NULL),
(27, 'Gato', 'Gomez', 'gato@gato.com', 'Gato1616329455322.png', '$2a$12$MXU2LuYyY9Rz72uCP.yBX.93kS2F4EE1T5miQNnWQNp48zZXjgWxS', NULL, '2021-03-21 12:24:17', '2021-03-21 12:24:17', NULL, NULL),
(28, 'Perro', 'Gomez', 'perro@perro.com', 'Perro1616329584364.png', '$2a$12$NFiW56K1dHf72d9S91LfP.K8ab3/8b.csBAj6s3dxYuWf5yXWeXam', NULL, '2021-03-21 12:26:26', '2021-03-21 12:26:26', NULL, NULL),
(29, 'Nelida', 'Garcia', 'nelida@nelida.com.ar', 'Nelida1616329725168.png', '$2a$12$he2jFQLB6vyK9YvNdBz89Ou8rpNtjWQT5n3QYn1.o7tewalewLDr2', NULL, '2021-03-21 12:28:47', '2021-03-21 12:28:47', NULL, NULL),
(30, 'Nutria', 'Garcia', 'nutria@nutria.com', 'Nutria1616329811314.png', '$2a$12$7hpI15HlZGizKsjlqGbb5.Ek4iYvffiD58icOuTmAKrQ.47oL//Sy', NULL, '2021-03-21 12:30:13', '2021-03-21 12:30:13', NULL, NULL),
(31, 'Garza', 'Gomez', 'garza@garza.com', 'Garza1616329893500.png', '$2a$12$NJvJp3i8LDljSQWVjdlqAe1A6O8xSLGVxyL.5nG/U09CSSEDCeIji', NULL, '2021-03-21 12:31:35', '2021-03-21 12:31:35', NULL, NULL),
(32, 'Nata', 'Gomez', 'nata@nata.com', 'Nata1616330023236.png', '$2a$12$HXh3JKpMSNE4ZMwgppteFO5uGWIwP4p8LCpvB63VxKAOPa.k.1lvO', NULL, '2021-03-21 12:33:45', '2021-03-21 12:33:45', NULL, NULL),
(33, 'Delfin', 'Piquin', 'delfin@delfin.com', 'Delfin1616330291192.png', '$2a$12$QxoI6lThFY7ye6f1pG0shuYQTlmb4eUvKzqWWdfaUq5lwScDzdD3S', NULL, '2021-03-21 12:38:13', '2021-03-21 12:38:13', NULL, NULL),
(34, 'Tiburon', 'Ocon', 'tiburon@tiburon.com', 'Tiburon1616330416677.png', '$2a$12$uizPfdyzc4NuawFJkSGw9e5CjcGFBz4NxUQeudI4AKQZwv1OBSUHS', NULL, '2021-03-21 12:40:19', '2021-03-21 12:40:19', NULL, NULL),
(35, 'Anakin', 'Perez', 'anakin@anakin.com', 'Anakin1616330738313.png', '$2a$12$aAwt2gxjxz7drylLnMD8w.0hQR8fkAfh2JYbzO5X/PmHDe1C/KSjO', NULL, '2021-03-21 12:45:40', '2021-03-21 12:45:40', NULL, NULL),
(36, 'Manila', 'Garcia', 'manila@manila.com', 'Manila1616330973888.png', '$2a$12$6ORubiFNig04unv7ExHU1.hHfkacfXlSK7OzMYfjuowVLd19krIaa', NULL, '2021-03-21 12:49:36', '2021-03-21 12:49:36', NULL, NULL),
(37, 'Tomas', 'Garcia', 'tomas@tomas.com', 'Tomas1616331310445.png', '$2a$12$3pr9uo2cJXaZ44oxnoH0MOu79pyYSCj5Jk2/EgRua5mxEAokg.1Rq', NULL, '2021-03-21 12:55:12', '2021-03-21 12:55:12', NULL, NULL),
(38, 'Tortuga', 'Gomez', 'tortuga@tortuga.com', 'Tortuga1616331540626.png', '$2a$12$GN50dlzD1BtNimBZ7PP1ye3pyhPyDjD3/6BlAZWiLdbpdmD0m/d2m', NULL, '2021-03-21 12:59:03', '2021-03-21 12:59:03', NULL, NULL),
(39, 'Narigon', 'Garcia', 'narigon@narigon.com', 'Narigon1616331859871.png', '$2a$12$2pCZFEgvMKQywv5rIy7vcOxMjzUsQosyHXlq7OVe.ehgHfWNSkvES', NULL, '2021-03-21 13:04:21', '2021-03-21 13:04:21', NULL, NULL),
(40, 'Euge', 'Garzia', 'euge@euge.com', 'Euge1616332387079.png', '$2a$12$/kdjraOWTRTNTPqeNGQ/juRNYigETgOSudnZuyzwkFyG9YIIvrM/m', NULL, '2021-03-21 13:13:09', '2021-03-21 13:13:09', NULL, NULL),
(41, 'Melisa', 'Garcia', 'melisa@melisa.com', 'Melisa1616332508769.png', '$2a$12$jWsY3G/IR80ZNRL.2Es5dOgz6ht.swKFrktxyRjfSfZvFCiepjC/K', NULL, '2021-03-21 13:15:10', '2021-03-21 13:15:10', NULL, NULL);

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
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

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
