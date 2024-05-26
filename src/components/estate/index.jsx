import './style.css'

export const Estate = (props) => {
    return(
      <div className='estate'>
        
        <h1 className='estate__title'>{props.title}</h1>

        <div className='estate__details'>
            <div className='estate__text'>
                <p className='estate__description'>{props.text}</p>
                <p className='estate__price'>Cena: {props.price} Kč</p>
                <div className='estate__contact'>
                    <h2>Kontakt:</h2>
                    <p>{props.contactName}</p>
                    <p>email: {props.contactEmail}</p>
                    <p>tel: {props.contactPhone}</p>
                </div>
            </div>

            <div>
                <image className='estate__image' src={props.photoSrc}/>
            </div>

        </div>
 
      </div>
    )
}