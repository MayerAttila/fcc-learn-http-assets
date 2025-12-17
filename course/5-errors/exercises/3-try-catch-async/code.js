try {
  const leaderboard = await fetchLeaderBoard();
  console.log(leaderboard);
} catch (error) {
  console.log("Failed to fetch leaderboard: " + error);
}

// don't touch below this line

async function fetchLeaderBoard() {
  const response = await fetch("https://fantasyquest.servers");
  return response.json();
}
