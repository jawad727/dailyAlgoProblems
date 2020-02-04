  //GOAL: GAAATAAA to GAA TTCCG


//iterate through each letter and compare it to its direct siblings, 

// Complete the steadyGene function below.
function steadyGene(gene) {
    var record = 0
    // G A A A T A A A

    for (i=0; i<gene.length; i++){
      // console.log(i)
      for (j=gene.length; j>=0; j--) {
        var pushArray = []
        

        // console.log(gene.slice(i, j))
        // console.log(j)
        // console.log(gene.slice(i, j))
        var checker = {A: 0, T: 0, C: 0, G: 0}
        var kRecord =  0
        for (k=0; k<gene.length; k++) {

          
          // console.log(checker)
          // console.log(gene[k])
          if (checker[gene[k]] < 2) {
            checker[gene[k]] = checker[gene[k]] + 1
            kRecord += 1
          }
          // console.log(gene[k])
          // console.log(checker)
          // console.log(kRecord)
          // console.log("//")

          if (kRecord > record) {
            record = kRecord
          }
        }

        

      }
    }

    return record

}

steadyGene("GAAATAAA")