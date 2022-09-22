let peçaDeXadrez = 'KING' 

 switch (peçaDeXadrez.toLowerCase()) {
  case 'pawn':
  console.log('Pawns move forward one square.');
  break;

  case 'bishop':
  console.log('Bishops move diagonally any number of squares.');
  break;

  case 'rook':
  console.log('Rooks move horizontally or vertically any number of squares.');
  break;

  case 'king':
  console.log('Kings move one square in any direction. ');
  break;

  case 'queen':
  console.log('Queens move diagonally, horizontally, or vertically any number of squares.');
  break;

  case 'knight':
    console.log('Knights moves in an L shape, two squares in a horizontal or vertical direction, then move one square horizontally or vertically.');
    break;

  default:
    console.log('Sorry, not a chess piece!');
    break;
}

