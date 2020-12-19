import React from 'react';

const Backgrounds = ({ children }) => {
  // const [offSetY, setOffSetY] = useState(0);

  // const handleScroll = () => setOffSetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div className="backgrounds">
      <div className="bg-planet1"></div>
      <div className="bg-gas"></div>
      <div className="bg-gas2"></div>
      <div className="bg-gas3"></div>
      <div className="bg-gas4"></div>
      <div className="bg-gas5"></div>
      <div className="bg-gas6"></div>
      {/* <div
        className="bg-sm-planet"
        // style={{
        //   transform: `translateY(${offSetY * 0.1}px)`,
        // }}
      ></div> */}
      {children}
    </div>
  );
};

export default Backgrounds;
