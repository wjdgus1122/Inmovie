import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>In Movie | {title}</title>
    </Helmet>
  );
};
