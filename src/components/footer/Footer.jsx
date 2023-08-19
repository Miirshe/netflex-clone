import FooterData from '../../content/footerLinks.json';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <div className='mt-10 mb-16 sm:mx-auto sm:max-w-screen-lg space-y-3'>
        <h1 className='ml-9'>Question ? Contact Us </h1>
        <div className='mx-10 grid grid-cols-2 sm:grid-cols-4'>
            {
                FooterData.columns.map((data , index)=>{
                   return <FooterLinks data={data} key={index}/>
                })
            }
        </div>
        <p className='ml-9'>netflex in somalia</p>
    </div>
  )
}

export default Footer