-- Create the tech_support database
DROP DATABASE IF EXISTS fantasy_football;
CREATE DATABASE fantasy_football;
USE fantasy_football;

CREATE TABLE teams (
    teamName VARCHAR(30) NOT NULL,
    PRIMARY KEY (teamName)
);

INSERT INTO teams VALUES
('Arizona Cardinals'),
('Baltimore Ravens'),
('Atlanta Falcons'),
('Buffalo Bills'),
('Carolina Panthers'),
('Cincinnati Bengals'),
('Cleveland Browns'),
('Dallas Cowboys'),
('Chicago Bears'),
('Denver Broncos'),
('Detroit Lions'),
('Houston Texans'),
('Green Bay Packers'),
('Indianapolis Colts'),
('Los Angeles Rams'),
('Minnesota Vikings'),
('Jacksonville Jaguars'),
('Kansas City Chiefs'),
('New Orleans Saints'),
('Las Vegas Raiders'),
('New York Giants'),
('Los Angeles Chargers'),
('Philadelphia Eagles'),
('Miami Dolphins'),
('San Francisco 49ers'),
('New England Patriots'),
('Seattle Seahawks'),
('New York Jets'),
('Tampa Bay Buccaneers'),
('Pittsburgh Steelers'),
('Washington Football Team'),
('Tennessee Titans');

CREATE TABLE players (
  teamName VARCHAR(30) NOT NULL,
  playerName VARCHAR(30) NOT NULL,
  position VARCHAR(4) NOT NULL,
  height VARCHAR(4) NOT NULL,
  FOREIGN KEY (teamName) REFERENCES teams(teamName),
  PRIMARY KEY (playerName)
);

INSERT INTO players VALUES
('Baltimore Ravens', 'Marshal Yanda', 'OG', '6-3'),
('Baltimore Ravens', 'Derek Wolfe', 'DE', '6-5'),
('Baltimore Ravens', 'Luke Willson', 'TE', '6-5'),
('Baltimore Ravens', 'Tramon Williams', 'CB', '6-3'),
('Baltimore Ravens', 'Brandon Williams', 'DT', '6-1'),
('Baltimore Ravens', 'Kristian Welch', 'LB', '6-3'),
('Baltimore Ravens', 'Broderick Washington', 'DT', '6-1'),
('Baltimore Ravens', 'Jihad Ward', 'DE', '6-2'),
('Baltimore Ravens', 'Justin Tucker', 'K', '6-1'),
('Buffalo Bills', 'Justin Zimmer', 'DT', '6-6'),
('Buffalo Bills', 'T.J. Yeldon', 'RB', '6-0'),
('Buffalo Bills', 'Jonathan Woodard', 'DE', '6-2'),
('Buffalo Bills', 'Brian Winters', 'OG', '6-1'),
('Buffalo Bills', "Tre'Davious White", 'OT', '6-1'),
('Buffalo Bills', 'Levi Wallace', 'CB', '6-3'),
('Buffalo Bills', 'Garrett Taylor', 'RB', '6-2'),
('Buffalo Bills', 'Lee Smith', 'QT', '6-6'),
('Buffalo Bills', 'Andre Smith', 'LB', '6-1'),
('Denver Broncos', 'Sylvester Williams', 'FS', '6-6'),
('Denver Broncos', 'DeShawn Williams', 'DT', '6-1'),
('Denver Broncos', 'Elijah Wilkinson', 'NT', '6-2'),
('Denver Broncos', 'Josh Watson', 'NT', '6-1'),
('Denver Broncos', "DeMarcus Walker", 'OT', '6-1'),
('Denver Broncos', 'Colby Wadman', 'RB', '6-3'),
('Denver Broncos', 'Jay-Tee Tiuli', 'RB', '6-0'),
('Denver Broncos', 'Justin Simmons', 'QT', '6-6'),
('Denver Broncos', 'Brett Rypien', 'LB', '6-1'),
('Dallas Cowboys', 'Greg Zuerlein', 'FS', '6-0'),
('Dallas Cowboys', 'Xavier Woods', 'WR', '6-1'),
('Dallas Cowboys', 'Antwaun Woods', 'NT', '6-2'),
('Dallas Cowboys', 'Ced Wilson', 'K', '6-1'),
('Dallas Cowboys', "Connor Williams", 'OT', '5-11'),
('Dallas Cowboys', 'Donovan Wilson', 'RB', '6-3'),
('Dallas Cowboys', 'Cody Wichmann', 'K', '5-11'),
('Dallas Cowboys', 'Malik Turner', 'QT', '6-6'),
('Dallas Cowboys', 'Darian Thompson', 'LB', '6-1'),
('New York Giants', 'Kevin Zeitler', 'CB', '6-0'),
('New York Giants', 'Isaac Yiadom', 'WR', '6-1'),
('New York Giants', 'Nate Wozniak', 'QT', '6-2'),
('New York Giants', 'Leonard Williams', 'DT', '6-1'),
('New York Giants', "Usman Williams", 'SAF', '5-11'),
('New York Giants', 'Reggie White Jr.', 'RB', '6-3'),
('New York Giants', 'Tanner Volson', 'K', '5-11'),
('New York Giants', 'Levine Toilolo', 'QT', '6-6'),
('New York Giants', 'Andrew Thomas', 'LB', '6-1');


CREATE TABLE users (
    firstName varchar(50) NOT NULL,
    lastName varchar(50) NOT NULL,
    address varchar(50) NOT NULL,
    city varchar(50) NOT NULL,
    state varchar(50) NOT NULL,
    postalCode varchar(20) NOT NULL,
    countryCode char(2) NOT NULL,
    phone varchar(20) NOT NULL,
    email varchar(50) NOT NULL UNIQUE,
    password varchar(20) NOT NULL,
    PRIMARY KEY (email)
);

INSERT INTO users VALUES
('John', 'Irvin', 'PO Box 96621', 'Washington', 'DC', '20090', 'US', '(301) 555-8950', 'john@example.com', 'sesame'),
('Kenzie', 'Quinn', '1990 Westwood Blvd Ste 260', 'Los Angeles', 'CA', '90025', 'US', '(800) 555-8725', 'kenzie@jobtrak.com', 'sesame'),
('Anton', 'Mauro', '3255 Ramos Cir', 'Sacramento', 'CA', '95827', 'US', '(916) 555-6670', 'amauro@yahoo.org', 'sesame'),
('Kaitlyn', 'Anthoni', 'Box 52001', 'San Francisco', 'CA', '94152', 'US', '(800) 555-6081', 'kanthoni@pge.com', 'sesame'),
('Kendall', 'Mayte', 'PO Box 2069', 'Fresno', 'CA', '93718', 'US', '(559) 555-9999', 'kmayte@fresno.ca.gov', 'sesame'),
('Marvin', 'Quintin', '4420 N. First Street, Suite 108', 'Fresno', 'CA', '93726', 'US', '(559) 555-9586', 'marvin@expedata.com', 'sesame'),
('Gonzalo', 'Keeton', '27371 Valderas', 'Mission Viejo', 'CA', '92691', 'US', '(214) 555-3647', 'gonzok@fala.com', 'sesame'),
('Derek', 'Chaddick', '1952 "H" Street', 'Fresno', 'CA', '93718', 'US', '(559) 555-3005', 'dChaddick@fresnophoto.com', 'sesame'),
('Kirk', 'Marques', '7700 Forsyth', 'St Louis', 'MO', '63105', 'US', '(314) 555-8834', 'malia@gmail.com', 'sesame'),
('Emily', 'Evan', '1555 W Lane Ave', 'Columbus', 'OH', '43221', 'US', '(614) 555-4435', 'Emily@MicroCenter.com', 'sesame'),
('Alexandro', 'Alexis', '3711 W Franklin', 'Fresno', 'CA', '93706', 'US', '(559) 555-2993', 'alal@yaleindustries.com', 'sesame'),
('Ingrid', 'Neil', '12 Daniel Road', 'Fairfield', 'NJ', '07004', 'US', '(201) 555-9742', 'Ingrid@richadvertizing.com', 'sesame'),
('Eileen', 'Lawrence', '1483 Chain Bridge Rd, Ste 202', 'Mclean', 'VA', '22101', 'US', '(770) 555-9558', 'eLawrence@ecomm.com', 'sesame'),
('Nick', 'Massicino', '66531 W Telegraph', 'Dearborn', 'MI', '48126', 'US', '(313) 532-2943', 'nick@gmail.com', 'sesame'),
('Sasha', 'Barracks', '563 Fairwater Rd', 'New Wentworth', 'NJ', '44234', 'US', '(242) 342-4322', 'sashaba@gmail.com', 'sesame'),
('Ed', 'Honda', '5552 Walled Lake Rd', 'Yorkshire', 'VA', '44323', 'US', '(742) 423-4532', 'edhonda@ecomm.com', 'sesame'),
('Marjorie', 'Essence', 'PO Box 31', 'East Brunswick', 'NJ', '08810', 'US', '(800) 555-8110', 'messence@hotmail.com', 'sesame');


CREATE TABLE administrators (
  username    VARCHAR(40)    NOT NULL     UNIQUE,
  password    VARCHAR(40)    NOT NULL,
  PRIMARY KEY (username)
);


INSERT INTO administrators VALUES
('admin', 'sesame'),
('joel', 'sesame');


-- Create a user named ts_user
GRANT SELECT, INSERT, UPDATE, DELETE
ON *
TO ts_user@localhost
IDENTIFIED BY 'pa55word';
