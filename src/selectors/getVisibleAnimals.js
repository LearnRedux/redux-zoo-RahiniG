// export default state => state.animals;
// const commandsFiltered = commands.filter((c) => c.isSelected); 
// export default state => state.animals.filter((a) => a.present);
/* export default state => {
    state.animals.present ? state.animals.filter((a) => a.present) : state.animals
};

const listItems = numbers.map((number) =>
  <li>{number}</li>
); 

export default state => state.animals.map((a) =>
  a.present ? a.present : a
); */ 

// export default state => state.presenceFilter ? ((state.presenceFilter === 'present') ? state.animals.filter((a) => a.present) : state.animals.filter((a) => !(a.present)) : state.animals;

/* export default state => state.presenceFilter ? if (state.presenceFilter === 'present') { state.animals.filter((a) => a.present)
} else if (state.presenceFilter === 'absent') { state.animals.filter((a) => !(a.present))
} : state.animals; */


/* const result = if (state.presenceFilter === 'present') 
                {
                    return state.animals.filter((a) => a.present)
                } else if (state.presenceFilter === 'absent') { return state.animals.filter((a) => !(a.present))
} else { return state.animals }; */


export default state => state.presenceFilter ? ((state.presenceFilter === 'present') ? (state.animals.filter((a) => a.present)) : state.animals.filter((a) => !(a.present))) : state.animals;
