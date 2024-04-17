-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 14/04/2024 às 02:49
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `pp2pi`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `comentarios`
--

CREATE TABLE `comentarios` (
  `username` varchar(60) NOT NULL,
  `comentario` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `comentarios`
--

INSERT INTO `comentarios` (`username`, `comentario`) VALUES
('Leo', 'blablabla'),
('Hanny', 'Testanmto\r\n'),
('Hanny', 'Testanmto\r\n'),
('Leo', 'testeNumero 2'),
('Leo', 'testeNumero 2'),
('Teste', 'tedfasfdsfgdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfsdfsdfsdfdsfsdfsdfds'),
('Teste', 'tedfasfdsfgdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfsdfsdfsdfdsfsdfsdfds'),
('teste 4', 'frdsfdsfdsf'),
('blablabla', 'pipipipopopo'),
('', ''),
('fmdskfmds', 'vvmdpvmdpf');

-- --------------------------------------------------------

--
-- Estrutura para tabela `formulario`
--

CREATE TABLE `formulario` (
  `nome` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `idade` int(11) NOT NULL,
  `sexo` varchar(15) NOT NULL,
  `duvidas` text NOT NULL,
  `textArea` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `formulario`
--

INSERT INTO `formulario` (`nome`, `email`, `idade`, `sexo`, `duvidas`, `textArea`) VALUES
('Leonardo Gabriel Sousa Ribeiro', 'legendargames200@gmail.com', 14, 'masculino', 'critica-construtiva', 'fdsfds'),
('Leonardo Gabriel Sousa Ribeiro', 'legendargames200@gmail.com', 14, 'masculino', 'critica-construtiva', 'fdsfds'),
('Hanny Emily', 'hanny@gmail.com', 22, '', 'encontrei-bug', 'TESTE 2'),
('Hanny Emily', 'hanny@gmail.com', 22, '', 'encontrei-bug', 'TESTE 2'),
('Leonardo Gabriel Sousa Ribeiro', 'legendargames200@gmail.com', 23, 'masculino', 'encontrei-bug', 'fsdfsd'),
('Leonardo Gabriel Sousa Ribeiro', 'legendargames200@gmail.com', 23, 'masculino', 'encontrei-bug', 'fsdfsd'),
('Leonardo Gabriel Sousa Ribeiro', 'legendargames200@gmail.com', 13, 'feminino', 'reclamacao', 'asdfasdas'),
('mfkdsfmes dsadas', 'wsdfasdas@hgmail.com', 12, 'masculino', 'critica-construtiva', 'fdsfsd'),
('mfkdsfmes dsadas', 'wsdfasdas@hgmail.com', 12, 'masculino', 'encontrei-bug', 'fdsfsd'),
('mfkdsfmes dsadas', 'wsdfasdas@hgmail.com', 12, 'feminino', 'encontrei-bug', 'fdsfsd'),
('Leonardo Gabriel Sousa Ribeiro', 'legendargames200@gmail.com', 13, '', 'critica-construtiva', 'fdsfsd'),
('Leonardo Gabriel Sousa Ribeiro', 'legendargames200@gmail.com', 13, '', 'critica-construtiva', 'fdsfsd'),
('Leonardo Gabriel Sousa Ribeiro', 'legendargames200@gmail.com', 19, 'masculino', 'duvida, critica-construtiva', 'Tdmfidspfnpweifwem'),
('Leonardo Gabriel Sousa Ribeiro', 'legendargames200@gmail.com', 22, 'masculino', 'duvida, encontrei-bug', 'TESTANDO 123');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
