function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i=0; i<4; i++){
    array[i] = musicians[i] + " plays " + instruments[i]
  }
  return array
}

function johnLennonFacts(facts) {
  var array = []
  let i=0
  while (facts[i]!=[]) {
    array[i]=facts[i] + "!!!"
    i=i+1
  }
  return array
}
