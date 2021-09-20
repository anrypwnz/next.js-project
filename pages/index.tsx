import { GetStaticProps } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { Button, Htag, Paragraph, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';


const Home = ({ menu }: HomeProps): JSX.Element => {
  const [srars, setSrars] = useState(4);
  return (
    <>
      <Htag tag='h2'>text</Htag>
      <Button appearance='primary' arrow='down'>btn</Button>
      <Button appearance='ghost'>btn 2</Button>
      <Paragraph size='l'>hello</Paragraph>
      <Tag size='s'>tagtag</Tag>
      <Tag size='m' color='red'>tagtag2</Tag>
      <Tag size='s' color='green'>tagtag</Tag>
      <Tag size='s' color='primary'>Red</Tag>
      <Rating rating={4} />
      <Rating rating={srars} isEditable setRating={setSrars} />


    </>
  );
};

export default withLayout(Home);


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
