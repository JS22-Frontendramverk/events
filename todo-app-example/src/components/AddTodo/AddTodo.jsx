function AddTodo(props) {
    const { newTodo } = props;
    let todo = '';

    return (
        <section>
            <input type="text" placeholder="Ange todo"
            onChange={ (event) => { todo = event.target.value; console.log(todo) }} />
            <button onClick={ () => { newTodo(todo) }}>Lägg till</button>
        </section>
    )
}

export default AddTodo;