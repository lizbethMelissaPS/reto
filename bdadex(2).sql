-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-10-2023 a las 05:11:54
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdadex`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_alumno`
--

CREATE TABLE `tb_alumno` (
  `nidAlumno` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tb_alumno`
--

INSERT INTO `tb_alumno` (`nidAlumno`) VALUES
(10),
(11),
(12),
(13);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_aulas`
--

CREATE TABLE `tb_aulas` (
  `nidAula` int(11) UNSIGNED NOT NULL,
  `nCapacidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tb_aulas`
--

INSERT INTO `tb_aulas` (`nidAula`, `nCapacidad`) VALUES
(100, 20),
(101, 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_cursos`
--

CREATE TABLE `tb_cursos` (
  `nidCurso` int(11) UNSIGNED NOT NULL,
  `sDesCurso` decimal(10,0) NOT NULL,
  `nidSeccion` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tb_cursos`
--

INSERT INTO `tb_cursos` (`nidCurso`, `sDesCurso`, `nidSeccion`) VALUES
(300, '100', 200),
(301, '120', 201);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_matricula`
--

CREATE TABLE `tb_matricula` (
  `nidRegistro` int(11) UNSIGNED NOT NULL,
  `nidAlumno` int(10) UNSIGNED NOT NULL,
  `nidSeccion` int(10) UNSIGNED NOT NULL,
  `nidCurso` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tb_matricula`
--

INSERT INTO `tb_matricula` (`nidRegistro`, `nidAlumno`, `nidSeccion`, `nidCurso`) VALUES
(500, 10, 200, 300),
(501, 11, 201, 301);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_secciones`
--

CREATE TABLE `tb_secciones` (
  `nidSeccion` int(11) UNSIGNED NOT NULL,
  `sTurno` varchar(25) NOT NULL,
  `tHoraInicio` date NOT NULL,
  `tHoraFin` date NOT NULL,
  `nidAula` int(11) UNSIGNED NOT NULL,
  `nidCurso` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tb_secciones`
--

INSERT INTO `tb_secciones` (`nidSeccion`, `sTurno`, `tHoraInicio`, `tHoraFin`, `nidAula`, `nidCurso`) VALUES
(200, 'mañana', '2024-02-20', '2024-06-20', 100, 300),
(201, 'tarde', '2024-03-20', '2024-07-20', 101, 301),
(202, 'noche', '2024-02-20', '2024-06-20', 100, 301);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tb_alumno`
--
ALTER TABLE `tb_alumno`
  ADD PRIMARY KEY (`nidAlumno`);

--
-- Indices de la tabla `tb_aulas`
--
ALTER TABLE `tb_aulas`
  ADD PRIMARY KEY (`nidAula`);

--
-- Indices de la tabla `tb_cursos`
--
ALTER TABLE `tb_cursos`
  ADD PRIMARY KEY (`nidCurso`),
  ADD KEY `fk_cursos_seccion` (`nidSeccion`);

--
-- Indices de la tabla `tb_matricula`
--
ALTER TABLE `tb_matricula`
  ADD PRIMARY KEY (`nidRegistro`),
  ADD KEY `fk_matricula_alumno` (`nidAlumno`),
  ADD KEY `fk_matricula_seccion` (`nidSeccion`),
  ADD KEY `fk_matricula_curso` (`nidCurso`);

--
-- Indices de la tabla `tb_secciones`
--
ALTER TABLE `tb_secciones`
  ADD PRIMARY KEY (`nidSeccion`),
  ADD KEY `fk_cursos_aula` (`nidAula`),
  ADD KEY `fk_seccion_curso` (`nidCurso`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tb_cursos`
--
ALTER TABLE `tb_cursos`
  ADD CONSTRAINT `fk_cursos_seccion` FOREIGN KEY (`nidSeccion`) REFERENCES `tb_secciones` (`nidSeccion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `tb_matricula`
--
ALTER TABLE `tb_matricula`
  ADD CONSTRAINT `fk_matricula_alumno` FOREIGN KEY (`nidAlumno`) REFERENCES `tb_alumno` (`nidAlumno`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_matricula_curso` FOREIGN KEY (`nidCurso`) REFERENCES `tb_cursos` (`nidCurso`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_matricula_seccion` FOREIGN KEY (`nidSeccion`) REFERENCES `tb_secciones` (`nidSeccion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `tb_secciones`
--
ALTER TABLE `tb_secciones`
  ADD CONSTRAINT `fk_cursos_aula` FOREIGN KEY (`nidAula`) REFERENCES `tb_aulas` (`nidAula`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_seccion_curso` FOREIGN KEY (`nidCurso`) REFERENCES `tb_cursos` (`nidCurso`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
