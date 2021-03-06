// https://v1.tailwindcss.com/components/buttons

// simple, fill, outline, bordered, disabled, 3d, elevated, icons

const COLORS = {
  primary: 'bg-blue-500 hover:bg-blue-700 text-white',
  success: 'bg-green-500 hover:bg-green-700 text-white',
  // TODO: 다양한 스타일 추가
};

function Button({ type, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${COLORS[type]} font-bold py-1 px-3 mr-1 rounded mb-1 ml-2 mt-2`}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'primary',
};

export default Button;
