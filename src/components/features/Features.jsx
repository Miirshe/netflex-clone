import DamyData from '../../content/features.json';
import Feature from './Feature';
const Features = () => {
  return (
    <div>
        {
            DamyData.map(feature =>{
                return <Feature key={feature.id} feature={feature} />
            })
        }
    </div>
  )
}

export default Features