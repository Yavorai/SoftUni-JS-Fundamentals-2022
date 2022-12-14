function demo(
  lostFightsCount,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let expenses = 0;

  for (let i = 1; i <= lostFightsCount; i++) {
    if (i % 2 === 0) {
      expenses += helmetPrice;
    }
    if (i % 3 === 0) {
      expenses += swordPrice;
    }
    if (i % 6 === 0) {
      expenses += shieldPrice;
    }
    if (i % 12 === 0) {
      armorPrice;
    }
  }
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
demo(7, 2, 3, 4, 5);
demo(23, 12.5, 21.5, 40, 200);
