// import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../layouts/Header/Header';
import GoBack from '../../components/GoBack/GoBack';
import SingleProduct from '../../components/SingleProduct/SingleProduct';

import { firstTabList } from '../../data/data';
import { secondTabList } from '../../data/data';

const SingleProductPage = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const jointTabLists = [...firstTabList, ...secondTabList];
    const filteredList = jointTabLists.filter((item) => item.id === id);
    setSingleProduct(filteredList[0]);
  }, [id]);

  return (
    <>
      <Header screen="second" title="Our Coffee" />
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
            key={singleProduct.id}
            img={singleProduct.img}
            title={singleProduct.title}
            description={singleProduct.description}
            monthprice={singleProduct.monthprice}
            eqvprice={singleProduct.eqvprice}
          />
        </>
      ) : null}
    </>
  );
};

export default SingleProductPage;
