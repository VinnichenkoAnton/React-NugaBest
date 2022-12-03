// import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../layouts/Header/Header';
import GoBack from '../../components/GoBack/GoBack';
import SingleProduct from './sections/SingleProduct/SingleProduct';

import { firstTabList, secondTabList } from '../../data/data';

import { TabListTypes } from '../../types/GlobalTypes';

const SingleProductPage: React.FC = () => {
  const [singleProduct, setSingleProduct] = useState<TabListTypes | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const jointTabLists: TabListTypes[] = [...firstTabList, ...secondTabList];
    const filteredList: TabListTypes[] = jointTabLists.filter((item) => item.id === id);
    setSingleProduct(filteredList[0]);
  }, [id]);

  return (
    <>
      <Header />
      <GoBack />

      {singleProduct ? (
        <>
          {/* <Helmet>
            <meta
              name="description"
              content={`На цій сторінці ви можете більше дізнатися про нашу послугу ${singleProduct.title}`}
            />
            <title>{`Оберіг - ${singleProduct.title}`}</title>
          </Helmet> */}
          <SingleProduct
            id={singleProduct.id}
            img={singleProduct.img}
            gallery={singleProduct.gallery}
            title={singleProduct.title}
            subtitle={singleProduct.subtitle}
            description={singleProduct.description}
            additionalInfo={singleProduct.additionalInfo}
          />
        </>
      ) : null}
    </>
  );
};

export default SingleProductPage;
