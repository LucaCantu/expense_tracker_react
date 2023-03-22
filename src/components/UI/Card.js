import './Card.css'

const Card= (props)=> {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}
// props.children è variabile, rappresenterà sempre ciò che viene messo nel tag Card

export default Card