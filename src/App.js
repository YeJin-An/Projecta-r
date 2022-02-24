import { Navigate, Route, Routes } from 'react-router-dom';

import Footer from 'components/Footer';
import PageNoticeDetail from './pages/notice/PageNoticeDetail';
import PageNoticeForm from './pages/notice/PageNoticeForm';
import PageNoticeIndex from 'pages/notice/PageNoticeIndex';
import PageLogin from 'pages/accounts/PageLogin';
import PageNewsActivateDetail from 'pages/activate/PageNewsActivateDetail';
import PageNewsActivateForm from 'pages/activate/PageNewsActivateForm';
import PageActivateIndex from 'pages/activate/PageActivateIndex';
import PageProfile from 'pages/accounts/PageProfile';
import Navgation from 'components/Navgation';
import PageSignup from 'pages/accounts/PageSignup';

function App() {
  return (
    <div className="container mx-auto px-2">
      <Navgation />

      <Routes>
        <Route path="/" element={<Navigate to="/notice/" />} />
        <Route path="/accounts/login/" element={<PageLogin />} />
        <Route path="/accounts/signup/" element={<PageSignup />} />
        <Route path="/accounts/profile/" element={<PageProfile />} />
        <Route path="/notice/" element={<PageNoticeIndex />} />
        <Route path="/notice/new/" element={<PageNoticeForm />} />
        <Route path="/notice/:noticeId/" element={<PageNoticeDetail />} />
        <Route path="/notice/:noticeId/edit/" element={<PageNoticeForm />} />
        <Route path="/activate/" element={<PageActivateIndex />} />
        <Route path="/activate/new/" element={<PageNewsActivateForm />} />
        <Route
          path="/activate/:activateId/"
          element={<PageNewsActivateDetail />}
        />
        <Route
          path="/activate/:activateId/edit/"
          element={<PageNewsActivateForm />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
