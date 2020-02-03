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
        var checker = {A: 0, T: 0, C: 0, G: 0}

        // console.log(gene.slice(i, j))
        // console.log(j)
        console.log(gene.slice(i, j))
        
        for (k=0; k<gene.length; k++) {
          var kRecord =  0
          if (checker[gene[k]] < 2) {
            checker[gene[k]] += 1
            kRecord += 1

            if (kRecord > record) {
              record = kRecord
            }
          }

        }

      }
    }

    return record

}

steadyGene("GAAATAAA")