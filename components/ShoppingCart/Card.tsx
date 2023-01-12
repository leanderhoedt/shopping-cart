import {ReactNode} from 'react';

interface CardProps {
  children: ReactNode;
}

const Card = ({children}: CardProps) => {
  // max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl
  return (
    <div className="block p-6 max-w-sm bg-white w-80 rounded-lg border border-grey-200 shadow-md">
      {children}
    </div>
  )
}

export default Card;
