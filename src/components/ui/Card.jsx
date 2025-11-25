const Card = ({ children }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            {children}
        </div>
    );
};

export default Card;
