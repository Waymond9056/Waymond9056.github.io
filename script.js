
function addTableRow(teamData) {
    const table = document.getElementById('dataTable');
    const tbody = table.querySelector('tbody');
    const newRow = document.createElement('tr');
    teamData.forEach((value, index) => {
      const cell = document.createElement('td');
      cell.textContent = value;
      newRow.appendChild(cell);
    });
    tbody.appendChild(newRow);
}

function guessAttempted() {
  document.getElementById("input").size = 0;
    const input = document.getElementById("input").value;

    addTableRow(
        [
            input,
            input, 
            input, 
            input, 
            input
        ]
    )
}

function addOptions() {
  var dataAsArray = [
    {
      "team_number": 1002,
      "nickname": "CircuitRunners Robotics",
      "city": "Marietta",
      "state": "Georgia",
      "rookie_year": 2003,
      "school_name": "Joseph Wheeler High School",
      "number_of_awards": 33
    },
    {
      "team_number": 1051,
      "nickname": "Technical Terminators",
      "city": "Mullins",
      "state": "South Carolina",
      "rookie_year": 2003,
      "school_name": "Academy for Careers and Technology",
      "number_of_awards": 5
    },
    {
      "team_number": 1102,
      "nickname": "M'Aiken Magic",
      "city": "Aiken",
      "state": "South Carolina",
      "rookie_year": 2003,
      "school_name": "MAiken Magic STEM Foundation & Aiken High School",
      "number_of_awards": 28
    },
    {
      "team_number": 1261,
      "nickname": "Robo Lions",
      "city": "Suwanee",
      "state": "Georgia",
      "rookie_year": 2004,
      "school_name": "Peachtree Ridge High School",
      "number_of_awards": 46
    },
    {
      "team_number": 1287,
      "nickname": "Aluminum Assault",
      "city": "Myrtle Beach",
      "state": "South Carolina",
      "rookie_year": 2004,
      "school_name": "Academy of Arts Science & Tech",
      "number_of_awards": 14
    },
    {
      "team_number": 1293,
      "nickname": "Pandamaniacs",
      "city": "Columbia",
      "state": "South Carolina",
      "rookie_year": 2004,
      "school_name": "Irmo, Chapin, Dutch Fork & Spring Hill High Schools",
      "number_of_awards": 3
    },
    {
      "team_number": 1311,
      "nickname": "Kell Robotics",
      "city": "Kennesaw",
      "state": "Georgia",
      "rookie_year": 2004,
      "school_name": "Kell High School",
      "number_of_awards": 39
    },
    {
      "team_number": 1319,
      "nickname": "Flash",
      "city": "Mauldin",
      "state": "South Carolina",
      "rookie_year": 2004,
      "school_name": "Brashier Mid College Chtr HS & Mauldin High School",
      "number_of_awards": 61
    },
    {
      "team_number": 1414,
      "nickname": "IHOT",
      "city": "Atlanta",
      "state": "Georgia",
      "rookie_year": 2004,
      "school_name": "Atlanta International School",
      "number_of_awards": 34
    },
    {
      "team_number": 1539,
      "nickname": "Clover Eagle Robotics",
      "city": "Clover",
      "state": "South Carolina",
      "rookie_year": 2005,
      "school_name": "Clover High School",
      "number_of_awards": 9
    },
    {
      "team_number": 1648,
      "nickname": "G3 Robotics",
      "city": "Atlanta",
      "state": "Georgia",
      "rookie_year": 2005,
      "school_name": "Midtown High School",
      "number_of_awards": 32
    },
    {
      "team_number": 1683,
      "nickname": "Techno Titans",
      "city": "Johns Creek",
      "state": "Georgia",
      "rookie_year": 2005,
      "school_name": "Northview High School",
      "number_of_awards": 37
    },
    {
      "team_number": 1746,
      "nickname": "FC - Team OTTO",
      "city": "Cumming",
      "state": "Georgia",
      "rookie_year": 2006,
      "school_name": "Forsyth Central High School",
      "number_of_awards": 46
    },
    {
      "team_number": 1758,
      "nickname": "Technomancers",
      "city": "Florence",
      "state": "South Carolina",
      "rookie_year": 2006,
      "school_name": "Florence Career Center",
      "number_of_awards": 8
    },
    {
      "team_number": 1771,
      "nickname": "North Gwinnett Robotics",
      "city": "Suwanee",
      "state": "Georgia",
      "rookie_year": 2006,
      "school_name": "Family/Community & North Gwinnett High School",
      "number_of_awards": 43
    },
    {
      "team_number": 1795,
      "nickname": "Carver Clutch",
      "city": "Atlanta",
      "state": "Georgia",
      "rookie_year": 2006,
      "school_name": "Carver Early College High Sch",
      "number_of_awards": 3
    },
    {
      "team_number": 2415,
      "nickname": "WiredCats",
      "city": "Atlanta",
      "state": "Georgia",
      "rookie_year": 2008,
      "school_name": "Westminster School",
      "number_of_awards": 57
    },
    {
      "team_number": 281,
      "nickname": "The GreenVillains",
      "city": "Greenville",
      "state": "South Carolina",
      "rookie_year": 1999,
      "school_name": "Greenville Tech Charter HS & Green Charter Sch-Greenville & Sterling School & Mauldin High School & Eastside High School & Blue Ridge High School",
      "number_of_awards": 41
    },
    {
      "team_number": 2815,
      "nickname": "Blue Devil Mechanics",
      "city": "Columbia",
      "state": "South Carolina",
      "rookie_year": 2009,
      "school_name": "Dreher High School",
      "number_of_awards": 16
    },
    {
      "team_number": 2974,
      "nickname": "Walton Robotics",
      "city": "Marietta",
      "state": "Georgia",
      "rookie_year": 2009,
      "school_name": "Walton High School",
      "number_of_awards": 72
    },
    {
      "team_number": 3091,
      "nickname": "100 Scholars",
      "city": "Atlanta",
      "state": "Georgia",
      "rookie_year": 2009,
      "school_name": "100 Black Men of Atlanta",
      "number_of_awards": 9
    },
    {
      "team_number": 3318,
      "nickname": "RoboDragons",
      "city": "Lawrenceville",
      "state": "Georgia",
      "rookie_year": 2010,
      "school_name": "Gwinnett Sch Math Sci & Tech",
      "number_of_awards": 2
    },
    {
      "team_number": 3329,
      "nickname": "Wildbots",
      "city": "Kingsland",
      "state": "Georgia",
      "rookie_year": 2010,
      "school_name": "Camden Co High School",
      "number_of_awards": 14
    },
    {
      "team_number": 3344,
      "nickname": "Space Dragons",
      "city": "Fayetteville",
      "state": "Georgia",
      "rookie_year": 2010,
      "school_name": "Whitewater High School",
      "number_of_awards": 5
    },
    {
      "team_number": 342,
      "nickname": "Burning Magnetos",
      "city": "North Charleston",
      "state": "South Carolina",
      "rookie_year": 2000,
      "school_name": "Fort Dorchester High",
      "number_of_awards": 60
    },
    {
      "team_number": 343,
      "nickname": "Metal-In-Motion",
      "city": "Seneca",
      "state": "South Carolina",
      "rookie_year": 2000,
      "school_name": "Metal in Motion - FIRST Robotics Team 343 & TriCounty Technical College",
      "number_of_awards": 64
    },
    {
      "team_number": 3489,
      "nickname": "Category 5",
      "city": "Summerville",
      "state": "South Carolina",
      "rookie_year": 2011,
      "school_name": "Family/Community & Home School",
      "number_of_awards": 34
    },
    {
      "team_number": 3490,
      "nickname": "Viper Drive",
      "city": "Summerville",
      "state": "South Carolina",
      "rookie_year": 2011,
      "school_name": "Cane Bay High School",
      "number_of_awards": 13
    },
    {
      "team_number": 3581,
      "nickname": "THINC Robotics Alliance",
      "city": "Lagrange",
      "state": "Georgia",
      "rookie_year": 2011,
      "school_name": "Thinc Academy",
      "number_of_awards": 6
    },
    {
      "team_number": 3635,
      "nickname": "Flying Legion",
      "city": "Warner Robins",
      "state": "Georgia",
      "rookie_year": 2011,
      "school_name": "Houston Co Career Academy & Veterans High School & Warner Robins High School & Northside High School & Houston Co High School & Perry High School",
      "number_of_awards": 11
    },
    {
      "team_number": 3651,
      "nickname": "TRIBE",
      "city": "Travelers Rest",
      "state": "South Carolina",
      "rookie_year": 2011,
      "school_name": "Travelers Rest High School",
      "number_of_awards": 1
    },
    {
      "team_number": 3815,
      "nickname": "NF Raiders",
      "city": "Cumming",
      "state": "Georgia",
      "rookie_year": 2011,
      "school_name": "North Forsyth High School",
      "number_of_awards": 1
    },
    {
      "team_number": 3976,
      "nickname": "Electric Hornets",
      "city": "Hopkins",
      "state": "South Carolina",
      "rookie_year": 2012,
      "school_name": "Lower Richland High School",
      "number_of_awards": 1
    },
    {
      "team_number": 4026,
      "nickname": "Decatur Robotics",
      "city": "Decatur",
      "state": "Georgia",
      "rookie_year": 2012,
      "school_name": "Family/Community & Decatur High School",
      "number_of_awards": 26
    },
    {
      "team_number": 4073,
      "nickname": "RoboKatz",
      "city": "Myrtle Beach",
      "state": "South Carolina",
      "rookie_year": 2012,
      "school_name": "Carolina Forest High School",
      "number_of_awards": 7
    },
    {
      "team_number": 4074,
      "nickname": "Shark Bytes",
      "city": "Murrells Inlet",
      "state": "South Carolina",
      "rookie_year": 2012,
      "school_name": "St James High School",
      "number_of_awards": 0
    },
    {
      "team_number": 4083,
      "nickname": "The Iron Wolverines",
      "city": "Dorchester",
      "state": "South Carolina",
      "rookie_year": 2012,
      "school_name": "Woodland High School",
      "number_of_awards": 11
    },
    {
      "team_number": 4112,
      "nickname": "EagleBots",
      "city": "Cumming ",
      "state": "Georgia",
      "rookie_year": 2012,
      "school_name": "South Forsyth High School",
      "number_of_awards": 17
    },
    {
      "team_number": 4188,
      "nickname": "Columbus Space Program",
      "city": "Columbus",
      "state": "Georgia",
      "rookie_year": 2012,
      "school_name": "Columbus High School",
      "number_of_awards": 56
    },
    {
      "team_number": 4189,
      "nickname": "Chargers",
      "city": "Jefferson",
      "state": "Georgia",
      "rookie_year": 2012,
      "school_name": "Jefferson High School",
      "number_of_awards": 19
    },
    {
      "team_number": 4240,
      "nickname": "TroTek Warriors",
      "city": "Albany",
      "state": "Georgia",
      "rookie_year": 2012,
      "school_name": "Dougherty Comprehensive HS",
      "number_of_awards": 3
    },
    {
      "team_number": 4451,
      "nickname": "ROBOTZ Garage",
      "city": "Fountain Inn",
      "state": "South Carolina",
      "rookie_year": 2013,
      "school_name": "Fountain Inn HS & Laurens District High School",
      "number_of_awards": 41
    },
    {
      "team_number": 4459,
      "nickname": "LeoTechs",
      "city": "Lithia Springs",
      "state": "Georgia",
      "rookie_year": 2013,
      "school_name": "Lithia Springs High School",
      "number_of_awards": 4
    },
    {
      "team_number": 4468,
      "nickname": "Fernbank LINKS",
      "city": "Atlanta",
      "state": "Georgia",
      "rookie_year": 2013,
      "school_name": "Fernbank Science Center",
      "number_of_awards": 18
    },
    {
      "team_number": 4509,
      "nickname": "Mechanical Bulls",
      "city": "Sugar Hill",
      "state": "Georgia",
      "rookie_year": 2013,
      "school_name": "Lanier High School",
      "number_of_awards": 12
    },
    {
      "team_number": 4516,
      "nickname": "Hyperion",
      "city": "Roswell",
      "state": "Georgia",
      "rookie_year": 2013,
      "school_name": "Blessed Trinity Catholic HS",
      "number_of_awards": 7
    },
    {
      "team_number": 4533,
      "nickname": "Phoenix",
      "city": "Mount Pleasant",
      "state": "South Carolina",
      "rookie_year": 2013,
      "school_name": "East Cooper Center for Advanced Studies",
      "number_of_awards": 10
    },
    {
      "team_number": 4582,
      "nickname": "Robohawks",
      "city": "Myrtle Beach",
      "state": "South Carolina",
      "rookie_year": 2013,
      "school_name": "Myrtle Beach High School",
      "number_of_awards": 0
    },
    {
      "team_number": 4701,
      "nickname": "Warriors (Team W.I.R.E.)",
      "city": "Savannah",
      "state": "Georgia",
      "rookie_year": 2013,
      "school_name": "Herchel V Jenkins High School",
      "number_of_awards": 10
    },
    {
      "team_number": 4730,
      "nickname": "Terminators",
      "city": "Albany",
      "state": "Georgia",
      "rookie_year": 2013,
      "school_name": "Monroe Comprehensive HS",
      "number_of_awards": 6
    },
    {
      "team_number": 4748,
      "nickname": "Bulldog (Auto)'bots",
      "city": "Charleston",
      "state": "South Carolina",
      "rookie_year": 2013,
      "school_name": "Burke High School",
      "number_of_awards": 1
    },
    {
      "team_number": 4823,
      "nickname": "Metal Manes",
      "city": "Loris",
      "state": "South Carolina",
      "rookie_year": 2013,
      "school_name": "Loris High School",
      "number_of_awards": 0
    },
    {
      "team_number": 4847,
      "nickname": "Techno-Logic Trojans",
      "city": "Green Sea",
      "state": "South Carolina",
      "rookie_year": 2013,
      "school_name": "Green Sea Floyds High School",
      "number_of_awards": 0
    },
    {
      "team_number": 4910,
      "nickname": "East Cobb Robotics",
      "city": "Marietta",
      "state": "Georgia",
      "rookie_year": 2014,
      "school_name": "Neighborhood Group",
      "number_of_awards": 32
    },
    {
      "team_number": 4941,
      "nickname": "RoboBibb",
      "city": "Macon",
      "state": "Georgia",
      "rookie_year": 2014,
      "school_name": "Rutland High School & Central High School & Howard High School",
      "number_of_awards": 14
    },
    {
      "team_number": 4965,
      "nickname": "FIRE",
      "city": "Anderson",
      "state": "South Carolina",
      "rookie_year": 2014,
      "school_name": "Family/Community",
      "number_of_awards": 12
    },
    {
      "team_number": 5063,
      "nickname": "BuzzBots",
      "city": "Galivants Ferry",
      "state": "South Carolina",
      "rookie_year": 2014,
      "school_name": "Aynor High School",
      "number_of_awards": 0
    },
    {
      "team_number": 5074,
      "nickname": "RoboMustangs",
      "city": "Norcross",
      "state": "Georgia",
      "rookie_year": 2014,
      "school_name": "Meadowcreek High School",
      "number_of_awards": 6
    },
    {
      "team_number": 5109,
      "nickname": "Gladiator Robotics",
      "city": "Johns Creek",
      "state": "Georgia",
      "rookie_year": 2014,
      "school_name": "Johns Creek High School",
      "number_of_awards": 16
    },
    {
      "team_number": 5130,
      "nickname": "Undercogs",
      "city": "LIttle River",
      "state": "South Carolina",
      "rookie_year": 2014,
      "school_name": "North Myrtle Beach High School",
      "number_of_awards": 2
    },
    {
      "team_number": 5219,
      "nickname": "TeknoSquad",
      "city": "Atlanta",
      "state": "Georgia",
      "rookie_year": 2014,
      "school_name": "Future Seekers, Inc.",
      "number_of_awards": 3
    },
    {
      "team_number": 5293,
      "nickname": "Metal Crusaders",
      "city": "Duluth",
      "state": "Georgia",
      "rookie_year": 2014,
      "school_name": "Duluth High School",
      "number_of_awards": 9
    },
    {
      "team_number": 5332,
      "nickname": "Toaster Tech",
      "city": "Decatur",
      "state": "Georgia",
      "rookie_year": 2014,
      "school_name": "Family/Community",
      "number_of_awards": 9
    },
    {
      "team_number": 5608,
      "nickname": "Lassiter Robotics",
      "city": "Marietta",
      "state": "Georgia",
      "rookie_year": 2015,
      "school_name": "Lassiter High School",
      "number_of_awards": 3
    },
    {
      "team_number": 5632,
      "nickname": "The Asimovians",
      "city": "Appling",
      "state": "Georgia",
      "rookie_year": 2015,
      "school_name": "Columbia County 4-H Robotics",
      "number_of_awards": 8
    },
    {
      "team_number": 5651,
      "nickname": "Maynard Jackson RoboJags",
      "city": "Atlanta",
      "state": "Georgia",
      "rookie_year": 2015,
      "school_name": "Maynard Jackson High School",
      "number_of_awards": 4
    },
    {
      "team_number": 5828,
      "nickname": "Flying Riots",
      "city": "Albany",
      "state": "Georgia",
      "rookie_year": 2016,
      "school_name": "Westover Comprehensive HS",
      "number_of_awards": 5
    },
    {
      "team_number": 5840,
      "nickname": "Shock Wave",
      "city": "Dawson",
      "state": "Georgia",
      "rookie_year": 2016,
      "school_name": "Terrell Middle High School",
      "number_of_awards": 4
    },
    {
      "team_number": 5848,
      "nickname": "ROBO C3",
      "city": "Edison",
      "state": "Georgia",
      "rookie_year": 2016,
      "school_name": "Calhoun Co High School",
      "number_of_awards": 4
    },
    {
      "team_number": 5900,
      "nickname": "Career Blazer Robotics - The Fighting Mongooses",
      "city": "Dalton",
      "state": "Georgia",
      "rookie_year": 2016,
      "school_name": "Whitfield County Career Academy",
      "number_of_awards": 23
    },
    {
      "team_number": 6023,
      "nickname": "DISCBOTS",
      "city": "Atlanta",
      "state": "Georgia",
      "rookie_year": 2016,
      "school_name": "Family/Community",
      "number_of_awards": 4
    },
    {
      "team_number": 6139,
      "nickname": "ThunderBotz",
      "city": "Dublin",
      "state": "Georgia",
      "rookie_year": 2016,
      "school_name": "West Laurens High School & East Laurens High School & Dublin High School & Trinity Christian School & Heart of Georgia College & Career Academy",
      "number_of_awards": 0
    },
    {
      "team_number": 6167,
      "nickname": "CB Bearbots",
      "city": "Hemingway",
      "state": "South Carolina",
      "rookie_year": 2016,
      "school_name": "Carvers Bay High School",
      "number_of_awards": 1
    },
    {
      "team_number": 6177,
      "nickname": "Atomic-Robotic-Dogs",
      "city": "Atlanta",
      "state": "Georgia",
      "rookie_year": 2016,
      "school_name": "Booker Washington High School",
      "number_of_awards": 6
    },
    {
      "team_number": 6340,
      "nickname": "The Marist Manatees",
      "city": "Atlanta",
      "state": "Georgia",
      "rookie_year": 2017,
      "school_name": "Marist School",
      "number_of_awards": 24
    },
    {
      "team_number": 6341,
      "nickname": "Firestorm Robotics",
      "city": "Acworth",
      "state": "Georgia",
      "rookie_year": 2017,
      "school_name": "Family/Community & Marietta High School & Etowah High School",
      "number_of_awards": 9
    },
    {
      "team_number": 6366,
      "nickname": "RAM Rodz Robotics",
      "city": "Simpsonville",
      "state": "South Carolina",
      "rookie_year": 2017,
      "school_name": "Hillcrest High School",
      "number_of_awards": 12
    },
    {
      "team_number": 6471,
      "nickname": "Lee County High School Trobots",
      "city": "Leesburg",
      "state": "Georgia",
      "rookie_year": 2017,
      "school_name": "Lee Co High School",
      "number_of_awards": 7
    },
    {
      "team_number": 6626,
      "nickname": "Robohana",
      "city": "Andrews",
      "state": "South Carolina",
      "rookie_year": 2017,
      "school_name": "Andrews High School",
      "number_of_awards": 2
    },
    {
      "team_number": 6693,
      "nickname": "TrailBLAZERS",
      "city": "Columbia",
      "state": "South Carolina",
      "rookie_year": 2017,
      "school_name": "Ridge View High School",
      "number_of_awards": 0
    },
    {
      "team_number": 6705,
      "nickname": "WildCat 5e",
      "city": "Dunwoody",
      "state": "Georgia",
      "rookie_year": 2017,
      "school_name": "Dunwoody High School",
      "number_of_awards": 20
    },
    {
      "team_number": 6712,
      "nickname": "Mountaineers",
      "city": "Chatsworth",
      "state": "Georgia",
      "rookie_year": 2017,
      "school_name": "North Murray High School",
      "number_of_awards": 4
    },
    {
      "team_number": 6829,
      "nickname": "Ignite Robotics",
      "city": "Suwanee",
      "state": "Georgia",
      "rookie_year": 2018,
      "school_name": "Family/Community",
      "number_of_awards": 27
    },
    {
      "team_number": 6887,
      "nickname": "Dalton Catabots",
      "city": "Dalton",
      "state": "Georgia",
      "rookie_year": 2018,
      "school_name": "Dalton High School",
      "number_of_awards": 6
    },
    {
      "team_number": 6905,
      "nickname": "Raiders of the ARC- TEAR-A-BYTE",
      "city": "Alpharetta",
      "state": "Georgia",
      "rookie_year": 2018,
      "school_name": "Alpharetta High School",
      "number_of_awards": 3
    },
    {
      "team_number": 6910,
      "nickname": "Mill Creek Steel Talons",
      "city": "Hoschton",
      "state": "Georgia",
      "rookie_year": 2018,
      "school_name": "Mill Creek High School",
      "number_of_awards": 2
    },
    {
      "team_number": 6919,
      "nickname": "The Commodores",
      "city": "Albany",
      "state": "Georgia",
      "rookie_year": 2018,
      "school_name": "Commodore Conyers College & Career Academy",
      "number_of_awards": 28
    },
    {
      "team_number": 6925,
      "nickname": "W.A.Robotics",
      "city": "College Park",
      "state": "Georgia",
      "rookie_year": 2018,
      "school_name": "Woodward Academy",
      "number_of_awards": 11
    },
    {
      "team_number": 6944,
      "nickname": "Wolverines",
      "city": "Cumming",
      "state": "Georgia",
      "rookie_year": 2018,
      "school_name": "West Forsyth High School",
      "number_of_awards": 0
    },
    {
      "team_number": 6961,
      "nickname": "SIbots",
      "city": "Chesnee",
      "state": "South Carolina",
      "rookie_year": 2018,
      "school_name": "Chesnee High School",
      "number_of_awards": 3
    },
    {
      "team_number": 7085,
      "nickname": "Wired Warriors",
      "city": "Pawleys Island",
      "state": "South Carolina",
      "rookie_year": 2018,
      "school_name": "Waccamaw High School",
      "number_of_awards": 0
    },
    {
      "team_number": 7104,
      "nickname": "The Bot Brothers",
      "city": "Savannah",
      "state": "Georgia",
      "rookie_year": 2018,
      "school_name": "Benedictine Military School",
      "number_of_awards": 3
    },
    {
      "team_number": 7315,
      "nickname": "Giga Knights",
      "city": "Albany",
      "state": "Georgia",
      "rookie_year": 2018,
      "school_name": "Deerfield Windsor School",
      "number_of_awards": 2
    },
    {
      "team_number": 7427,
      "nickname": "Protocol X Robotics",
      "city": "Milton",
      "state": "Georgia",
      "rookie_year": 2019,
      "school_name": "Family/Community",
      "number_of_awards": 5
    },
    {
      "team_number": 7449,
      "nickname": "Lithium Robotics",
      "city": "Acworth",
      "state": "Georgia",
      "rookie_year": 2019,
      "school_name": "Family/Community",
      "number_of_awards": 5
    },
    {
      "team_number": 7451,
      "nickname": "AvengerRobotics",
      "city": "Cumming",
      "state": "Georgia",
      "rookie_year": 2019,
      "school_name": "Alliance Academy for Innovation",
      "number_of_awards": 19
    },
    {
      "team_number": 7470,
      "nickname": "iRAMBOTS",
      "city": "Sylvester",
      "state": "Georgia",
      "rookie_year": 2019,
      "school_name": "Worth Co High School",
      "number_of_awards": 6
    },
    {
      "team_number": 7514,
      "nickname": "EVE Robotics",
      "city": "Atlanta",
      "state": "Georgia",
      "rookie_year": 2019,
      "school_name": "Family/Community",
      "number_of_awards": 7
    },
    {
      "team_number": 7538,
      "nickname": "Metal Mountain",
      "city": "Lawrenceville",
      "state": "Georgia",
      "rookie_year": 2019,
      "school_name": "Mountain View High School",
      "number_of_awards": 8
    },
    {
      "team_number": 7676,
      "nickname": "THS RoboDogs",
      "city": "Thomson",
      "state": "Georgia",
      "rookie_year": 2019,
      "school_name": "Thomson High School",
      "number_of_awards": 2
    },
    {
      "team_number": 7883,
      "nickname": "CCHS RazorBots",
      "city": "Augusta",
      "state": "Georgia",
      "rookie_year": 2019,
      "school_name": "Cross Creek High School",
      "number_of_awards": 3
    },
    {
      "team_number": 8080,
      "nickname": "Sequoyah Robotics",
      "city": "Canton",
      "state": "Georgia",
      "rookie_year": 2020,
      "school_name": "Sequoyah High School",
      "number_of_awards": 4
    },
    {
      "team_number": 8083,
      "nickname": "ALX Robotics",
      "city": "Douglasville",
      "state": "Georgia",
      "rookie_year": 2020,
      "school_name": "Alexander High School",
      "number_of_awards": 5
    },
    {
      "team_number": 8100,
      "nickname": "Grayson Robotics",
      "city": "Grayson",
      "state": "Georgia",
      "rookie_year": 2020,
      "school_name": "Grayson High School",
      "number_of_awards": 2
    },
    {
      "team_number": 8137,
      "nickname": "Byting Bulldogs",
      "city": "Georgetown",
      "state": "South Carolina",
      "rookie_year": 2020,
      "school_name": "Georgetown High School",
      "number_of_awards": 3
    },
    {
      "team_number": 8271,
      "nickname": "WESTSIDE 1002",
      "city": "Augusta",
      "state": "Georgia",
      "rookie_year": 2020,
      "school_name": "Westside High School",
      "number_of_awards": 0
    },
    {
      "team_number": 832,
      "nickname": "OSCAR",
      "city": "Roswell",
      "state": "Georgia",
      "rookie_year": 2002,
      "school_name": "Family/Community & Roswell High School",
      "number_of_awards": 30
    },
    {
      "team_number": 8575,
      "nickname": "The Due Westerners",
      "city": "Due West",
      "state": "South Carolina",
      "rookie_year": 2021,
      "school_name": "Due West Robotics",
      "number_of_awards": 16
    },
    {
      "team_number": 8577,
      "nickname": "Georgia Cyber Academy Champions",
      "city": "Atlanta",
      "state": "Georgia",
      "rookie_year": 2021,
      "school_name": "Georgia Cyber Academy",
      "number_of_awards": 4
    },
    {
      "team_number": 8579,
      "nickname": "Renegades of Archer Robotics!",
      "city": "Lawrenceville",
      "state": "Georgia",
      "rookie_year": 2021,
      "school_name": "Archer High School",
      "number_of_awards": 0
    },
    {
      "team_number": 8736,
      "nickname": "The Mechanisms",
      "city": "Marietta",
      "state": "Georgia",
      "rookie_year": 2022,
      "school_name": "Family/Community",
      "number_of_awards": 11
    },
    {
      "team_number": 8761,
      "nickname": "AHS TigerByte8761",
      "city": "Adairsville",
      "state": "Georgia",
      "rookie_year": 2022,
      "school_name": "Adairsville High School",
      "number_of_awards": 0
    },
    {
      "team_number": 8815,
      "nickname": "Barnstormers",
      "city": "Statesboro",
      "state": "Georgia",
      "rookie_year": 2022,
      "school_name": "Statesboro High School & Southeast Bulloch High School & Statesboro STEAM Ccat Academy & Trinity Christian School & Bulloch Academy",
      "number_of_awards": 3
    },
    {
      "team_number": 8849,
      "nickname": "Storm Robotics",
      "city": "Alpharetta",
      "state": "Georgia",
      "rookie_year": 2022,
      "school_name": "Family/Community",
      "number_of_awards": 8
    },
    {
      "team_number": 8865,
      "nickname": "Dacula Droids",
      "city": "Dacula",
      "state": "Georgia",
      "rookie_year": 2022,
      "school_name": "Dacula High School",
      "number_of_awards": 4
    },
    {
      "team_number": 8866,
      "nickname": "Innovation Robotics",
      "city": "Alpharetta",
      "state": "Georgia",
      "rookie_year": 2022,
      "school_name": "Innovation Academy Stem Magnet High School",
      "number_of_awards": 8
    },
    {
      "team_number": 9011,
      "nickname": "Orangeburg Robotics",
      "city": "Orangeburg",
      "state": "South Carolina",
      "rookie_year": 2023,
      "school_name": "The Able Influence of SC",
      "number_of_awards": 0
    },
    {
      "team_number": 9057,
      "nickname": "G.I.R.L.",
      "city": "Atlanta",
      "state": "Georgia",
      "rookie_year": 2023,
      "school_name": "Coretta Scott King Young women's Leadership Academy",
      "number_of_awards": 3
    },
    {
      "team_number": 9086,
      "nickname": "Wildcat Robotics",
      "city": "Richmond Hill",
      "state": "Georgia",
      "rookie_year": 2023,
      "school_name": "Richmond Hill High School",
      "number_of_awards": 4
    },
    {
      "team_number": 9260,
      "nickname": "Built4Bibb Robotics",
      "city": "Macon",
      "state": "Georgia",
      "rookie_year": 2023,
      "school_name": "Bibb County School District",
      "number_of_awards": 5
    },
    {
      "team_number": 9293,
      "nickname": "Caffeinated",
      "city": "Marietta",
      "state": "Georgia",
      "rookie_year": 2023,
      "school_name": "Family/Community",
      "number_of_awards": 5
    },
    {
      "team_number": 9315,
      "nickname": "Coding Comets",
      "city": "Columbia",
      "state": "South Carolina",
      "rookie_year": 2023,
      "school_name": "Family/Community",
      "number_of_awards": 3
    },
    {
      "team_number": 9477,
      "nickname": "Lambda (λ)",
      "city": "Suwanee",
      "state": "Georgia",
      "rookie_year": 2024,
      "school_name": "Lambert High School",
      "number_of_awards": 3
    },
    {
      "team_number": 9480,
      "nickname": "Gear Bears",
      "city": "Flowery Branch",
      "state": "Georgia",
      "rookie_year": 2024,
      "school_name": "Cherokee Bluff High School",
      "number_of_awards": 2
    },
    {
      "team_number": 9500,
      "nickname": "G28 Robotics",
      "city": "Atlanta",
      "state": "Georgia",
      "rookie_year": 2024,
      "school_name": "Family/Community",
      "number_of_awards": 4
    },
    {
      "team_number": 9507,
      "nickname": "Rothschild Leadership Academy",
      "city": "Columbus",
      "state": "Georgia",
      "rookie_year": 2024,
      "school_name": "Rothschild Leadership Academy",
      "number_of_awards": 0
    },
    {
      "team_number": 9522,
      "nickname": "Archimedes",
      "city": "Flowery Branch",
      "state": "Georgia",
      "rookie_year": 2024,
      "school_name": "Flowery Branch High School",
      "number_of_awards": 3
    },
    {
      "team_number": 9537,
      "nickname": "SCDS1",
      "city": "Savannah",
      "state": "Georgia",
      "rookie_year": 2024,
      "school_name": "Savannah Country Day School",
      "number_of_awards": 0
    },
    {
      "team_number": 9561,
      "nickname": "Dawson Dino Nuggets",
      "city": "Dawsonville",
      "state": "Georgia",
      "rookie_year": 2024,
      "school_name": "Dawson Co High School",
      "number_of_awards": 0
    },
    {
      "team_number": 9571,
      "nickname": "Patriot Prime",
      "city": "Greenville",
      "state": "South Carolina",
      "rookie_year": 2024,
      "school_name": "Powdersville High School",
      "number_of_awards": 3
    },
    {
      "team_number": 9582,
      "nickname": "HHS NASA Snaggbotics",
      "city": "Conyers",
      "state": "Georgia",
      "rookie_year": 2024,
      "school_name": "Heritage High School",
      "number_of_awards": 0
    },
    {
      "team_number": 9770,
      "nickname": "Victory Church of Christ Robo Knights",
      "city": "Atlanta",
      "state": "Georgia",
      "rookie_year": 2024,
      "school_name": "Family/Community",
      "number_of_awards": 1
    }
  ];
  // var dataAsArray = JSON.parse(data);
  var options = "<option value='' disabled selected hidden>FRC Team</option>";

  for (var i = 0; i < dataAsArray.length; i++) {
    options += "<option>" + dataAsArray[i].team_number + "</option>";
  }
  document.getElementById("input").innerHTML = options;
}





