import recipes from '../recipes.json';
import { RecipeList } from './RecipeList';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
// import { Test } from './Test';

export const App = () => {
  return (
    <Layout>
      <RecipeList items={recipes} />
      <GlobalStyle />
      {/* <Test /> */}
    </Layout>
  );
};
