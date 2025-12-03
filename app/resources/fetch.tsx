export async function getCoffeesData() {
    const res = await fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json");
    const coffes = await res.json();
    return coffes;
}