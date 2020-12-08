import React from 'react';
//<i class="fas fa-star"></i> gemato
//<i class="far fa-star"></i> adeio
//<i class="fas fa-star-half-alt"></i>


const Rating = ({value,text}) => {
    return (
        <div>
            <span>
                <i className={
                    value>=1 ? 
                    'fas fa-star' 
                    : value>=0.5 
                    ? 'fas fa-star-half-alt'
                    : "far fa-star" } />
            </span>
            <span>
                <i className={
                    value>=2 ? 
                    'fas fa-star' 
                    : value>=1.5 
                    ? 'fas fa-star-half-alt'
                    : "far fa-star" } />
            </span>
            <span>
                <i className={
                    value>=3 ? 
                    'fas fa-star' 
                    : value>=2.5 
                    ? 'fas fa-star-half-alt'
                    : "far fa-star" } />
            </span>
            <span>
                <i className={
                    value>=4 ? 
                    'fas fa-star' 
                    : value>=3.5 
                    ? 'fas fa-star-half-alt'
                    : "far fa-star" } />
            </span>
            <span>
                <i className={
                    value>=5 ? 
                    'fas fa-star' 
                    : value>=4.5 
                    ? 'fas fa-star-half-alt'
                    : "far fa-star" } />
            </span>
            <span className="mx-1">
                {text && text}
            </span>
        </div>
    )
}

export default Rating