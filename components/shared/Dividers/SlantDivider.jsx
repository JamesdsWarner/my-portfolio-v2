import './dividers.module.css';

const SlantDivider = () => {
  return (
    <>
      <svg
        class="slant"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon points="0,100 100,0 100,100" />
      </svg>
    </>
  );
};

export default SlantDivider;
