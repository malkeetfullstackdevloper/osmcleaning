import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Services from "./components/Services";
import Footer from "./components/Footer";
import CleaningServicePage from "./components/CleaningServicePage";
import AbousUs from "./components/AboutUs";
import ContactPage from "./components/ContactUs";
import GetQuotePage from "./components/GetQuotePage";
import AdminPosts from "./admin/AdminPosts";
import ContactForm2 from "./components/ContactForm2";
import Commercial from "./services/Commercial";
import EndOfLeaseCleaning from "./services/EndofLeaseCleaning";
import CarpetCleaning from "./services/CarpetCleaning";
import CarpetCleaningQuote from "./components/CarpetCleaningQuote";
import LeaseCleaningQuote from "./components/LeaseCleaningQuote";
import ExitClean from "./services/exit_clean";
import OfficeCleaning from "./services/Office_cleaning";
import WindowCleaning from "./services/window_cleaning";
import CarpetCleaningContact from "./components/CarpetCleaningContact";
import BondClean from "./services/BondClean";
import MoveOutClean from "./services/MoveOutClean";
import MoveInClean from "./services/MoveInClean";
import NewHomeBuilderClean from "./services/NewHomeBuilderClean";
import UpholsteryCleaning from "./services/UpholsteryCleaning";
import RugCleaning from "./services/RugCleaning";
import CleaningCouch from "./services/CleaningCouch";
import MattressCleaning from "./services/MattressCleaning";
import TileGroutCleaning from "./services/TileGroutCleaning";
import Eglenelg from "./services/end-of-lease-cleaning-glenelg";
import Eburnside from "./services/end-of-lease-cleaning-burnside";
import Egoodwood from "./services/end-of-lease-cleaning-goodwood";
import Ehenley from "./services/end-of-lease-cleaning-henley";
import Eprospect from "./services/end-of-lease-cleaning-prospect";
import Enorwood from "./services/end-of-lease-cleaning-norwood";
import Esemaphore from "./services/end-of-lease-cleaning-semaphore";
import Vacate from "./services/vacate-cleaning-adelaide";
import Unley from "./services/end-of-lease-cleaning-unley";
import Mawson from "./services/end-of-lease-cleaning-mawson";
import Porta from "./services/end-of-lease-cleaning-port-adelaide";
import South from "./services/end-of-lease-cleaning-south-adelaide";
import Mitchell from "./services/end-of-lease-cleaning-mitchell-park";
import Magill from "./services/end-of-lease-cleaning-magill";
import West from "./services/end-of-lease-cleaning-west-adelaide";
import Morphett from "./services/end-of-lease-cleaning-morphett";
import EndMawson from "./services/mawson-end-of-lease-cleaning";
import Campbelltown from "./services/end-of-lease-cleaning-campbelltown";
import Brighton from "./services/end-of-lease-cleaning-brighton";
import Lunley from "./services/lease-cleaning-unley";
import Thanks from "./services/thank-you";
import Thanksyou from "./services/thanks-you";


import Landingpage from "./services/Landingpage";
import Exitcarpetprospect from "./services/exit-carpet-cleaning-prospect";
import Bondcarpetcleaninggoodwood from "./services/bond-carpet-cleaning-goodwood";
import Bondcarpetcleaningunley from "./services/bond-carpet-cleaning-unley";
import Bondcarpetcleaningparkside from "./services/bond-carpet-cleaning-parkside";
import Bondcarpetcleaningnorwood from "./services/bond-carpet-cleaning-norwood";
import Bondcarpetcleaningosmond from "./services/bond-carpet-cleaning-osmond";
import Bondcarpetcleaninburnside from "./services/bond-carpet-cleaning-burnside";
import Bondcarpetcleaninglen from "./services/bond-carpet-cleaning-glen";
import Bondcarpetcleaninmagill from "./services/bond-carpet-cleaning-magill";



import Homepage from "./components/new-homepage";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
      <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/post" element={<AdminPosts />} />
        <Route path="users" element={<Users />} />
        <Route path="contactform" element={<ContactForm2 />} />
        <Route path="carpetcleaningcontact" element={<CarpetCleaningContact />} />
        <Route path="new-homepage" element={<Homepage />} />
        <Route path="commercial" element={<Commercial />} />
        <Route path="end_of_lease_cleaning" element={<EndOfLeaseCleaning />} />
        <Route path="carpet-cleaning" element={<CarpetCleaning />} />
        <Route path="exitclean" element={<ExitClean />} />
        <Route path="end-of-lease-cleaning-glenelg" element={<Eglenelg />} />
        <Route path="end-of-lease-cleaning-burnside" element={<Eburnside />} />
        <Route path="end-of-lease-cleaning-goodwood" element={<Egoodwood />} />
        <Route path="end-of-lease-cleaning-henley" element={<Ehenley />} />
        <Route path="end-of-lease-cleaning-prospect" element={<Eprospect />} />
        <Route path="end-of-lease-cleaning-norwood" element={<Enorwood />} />
        <Route path="end-of-lease-cleaning-semaphore" element={<Esemaphore />} />
        <Route path="vacate-cleaning-adelaide" element={<Vacate />} />
        <Route path="end-of-lease-cleaning-unley" element={<Unley />} />
        <Route path="end-of-lease-cleaning-mawson" element={<Mawson />} />
        <Route path="end-of-lease-cleaning-port-adelaide" element={<Porta />} />
        <Route path="end-of-lease-cleaning-south-adelaide" element={<South />} />
        <Route path="end-of-lease-cleaning-mitchell-park" element={<Mitchell />} />
        <Route path="end-of-lease-cleaning-magill" element={<Magill />} />
        <Route path="end-of-lease-cleaning-west-adelaide" element={<West />} />
        <Route path="end-of-lease-cleaning-morphett" element={<Morphett />} />
        <Route path="mawson-end-of-lease-cleaning" element={<EndMawson />} />
        <Route path="end-of-lease-cleaning-campbelltown" element={<Campbelltown />} />
        <Route path="end-of-lease-cleaning-brighton" element={<Brighton />} />
        <Route path="lease-cleaning-unley" element={<Lunley />} />


        <Route path="thank-you" element={<Thanks />} />
        <Route path="thanks-you" element={<Thanksyou />} />
        

        <Route path="bondclean" element={<BondClean />} />
        <Route path="move_inclean" element={<MoveInClean />} />
        <Route path="move_outclean" element={<MoveOutClean />} />
        <Route path="new_home_builder_clean" element={<NewHomeBuilderClean />} />
        <Route path="office_cleaning" element={<OfficeCleaning />} />
        <Route path="upholstery_cleaning" element={<UpholsteryCleaning />} />
        <Route path="rugcleaning" element={<RugCleaning />} />
        <Route path="cleaning_couch" element={<CleaningCouch />} />
        <Route path="mattress_cleaning" element={<MattressCleaning />} />
        <Route path="tile_grout_cleaning" element={<TileGroutCleaning />} />
        <Route path="window_cleaning" element={<WindowCleaning />} />
        <Route path="carpet_cleaning_quote" element={<CarpetCleaningQuote />} />
        <Route path="lease_cleaning_quote" element={<LeaseCleaningQuote />} />
        
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} /> */}

        <Route path="/dashboard" element={<Dashboard />} />

        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/services/:title" element={<Services />} />
        <Route path="/" element={<CleaningServicePage />} />
        <Route path="/aboutus" element={<AbousUs />} />
        <Route path="/contactus" element={<ContactPage />} />
        <Route path="/getquote" element={<GetQuotePage />} />

        <Route path="/carpet-cleaning-deals" element={<Landingpage />} />

        <Route path="/exit-carpet-cleaning-prospect" element={<Exitcarpetprospect />} />
        <Route path="/bond-carpet-cleaning-goodwood" element={<Bondcarpetcleaninggoodwood />} />  
        <Route path="/bond-carpet-cleaning-unley" element={<Bondcarpetcleaningunley />} /> 
        <Route path="/bond-carpet-cleaning-parkside" element={<Bondcarpetcleaningparkside />} /> 
        <Route path="/bond-carpet-cleaning-norwood" element={<Bondcarpetcleaningnorwood />} />
        <Route path="/bond-carpet-cleaning-osmond" element={<Bondcarpetcleaningosmond />} />
        <Route path="/bond-carpet-cleaning-burnside" element={<Bondcarpetcleaninburnside />} />
        <Route path="/bond-carpet-cleaning-glen" element={<Bondcarpetcleaninglen />} />  
        <Route path="/bond-carpet-cleaning-magill" element={<Bondcarpetcleaninmagill />} /> 


      </Routes>
    </Router>
  );
}

export default App;
