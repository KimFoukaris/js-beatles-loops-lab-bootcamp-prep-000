function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i=0; i<4; i++){
    array[i] = musicians[i] + " plays " + instruments[i]
  }
  return array
}

function johnLennonFacts(facts) {
var array = []
counter = 0
while counter < facts.length {
  array[counter] = facts[counter] + "!!!"
}
return array
 }
}
