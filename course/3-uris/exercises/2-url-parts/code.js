function printURLParts(urlString) {
  const urlObj = new URL(urlString);

  const parts = [
    "href",
    "protocol",
    "username",
    "password",
    "hostname",
    "port",
    "pathname",
    "search",
    "hash",
  ];

  parts.forEach((part) => {
    console.log(`${part}:`, urlObj[part]);
  });
}

// don't touch below this line

const fantasyQuestURL =
  "http://dragonslayer:pwn3d@fantasyquest.com:8080/maps?sort=rank#id";
printURLParts(fantasyQuestURL);
