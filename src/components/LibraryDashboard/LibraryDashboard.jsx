import LibraryForm from "../LibraryForm/LibraryForm";
import LibraryRecommended from "../LibraryRecommended/LibraryRecommended";
import css from "./LibraryDashboard.module.css";
const LibraryDashboard = () => {
  return (
    <div className={css.LibraryDashboardWrapper}>
      <LibraryForm />
      <LibraryRecommended />
    </div>
  );
};

export default LibraryDashboard;
