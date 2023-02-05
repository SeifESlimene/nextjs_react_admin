import dynamic from "next/dynamic";

const App = dynamic(() => import("../src/admin/App"), { ssr: false });

const Admin = () => {
  return <App />;
};

export default Admin;