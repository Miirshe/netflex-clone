const FooterLinks = ({ data }) => {
  return (
    <div className="flex flex-col space-y-4">
      {data?.map((link , index) => {
        return <a href="#" key={index}>{link}</a>;
      })}
    </div>
  );
};

export default FooterLinks;
