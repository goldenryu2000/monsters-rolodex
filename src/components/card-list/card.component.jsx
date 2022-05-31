import './card.styles.css'

const Card = ({monster}) => {
        const {name,email,id} = monster;
        return (
            <div className='card-container'>
                <img alt={`monster ${name}`}  src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
}


// class Card extends Component {

//     render(){
//         const {monster} = this.props;
//         const {name,email} = monster;
//         return (
//             <div className='card-container'>
//                 <img alt={`monster ${name}`}  src={`https://robohash.org/${name}`}/>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         )
//     }
// }

export default Card