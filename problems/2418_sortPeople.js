var sortPeople = function(names, heights) {
    const length = names.length;
    let output = [];
  
    for (let i = 0; i < length; i++) {
      output.push({ name: names[i], height: heights[i] });
    }
  
    output.sort((a, b) => b.height - a.height);
  
    return output.map(person => person.name);
  };