export default function Card({children}){
    const cardstyle = {
     width:'378px',
     height: '439px',
     border : '1px solid black',
     margin : '30px',
     backgroundColor: 'black',
     borderRadius: '4px',
     cursor:'pointer'
    }
    
    return (
        <div style={cardstyle}>
            {children}
        </div>
    )
}