const Display = (props) => {
    const { data } = props
    return(<div>
    
    {data.map((recette,index)=>
        <p key={index}>{recette.title}</p>
    )}
    
    </div>)
}
export default Display