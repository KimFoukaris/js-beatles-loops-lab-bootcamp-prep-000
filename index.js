function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i=0; i<4; i++){
    array[i] = musicians[i] + " plays " + instruments[i]
  }
  return array
}

function johnLennonFacts(facts) {
  var array = []
  let counter = 5
  while (counter=>0) {
    array[counter] = facts[counter] + "!!!"
    counter = counter--
  }
  return array
  }
