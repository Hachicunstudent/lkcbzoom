import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Hero from './pages/Hero';
import TargetAudience from './pages/TargetAudience';
import BenefitsSection from './pages/BenefitsSection';
import VideoSection from './pages/VideoSection';
import PricingSection from './pages/PricingSection';
import FAQSection from './pages/FAQSection';
import StatisticsSection from './pages/StatisticsSection';
import TestimonialsSection from './pages/TestimonialsSection';
import TimelineSection from './pages/TimelineSection';
import Result from './pages/Result';
import Form from './pages/Form';
import CoursesDetail from './pages/CoursesDetail';
import Footer from './pages/Footer';
import Teacher from './pages/Teacher';
import CountdownTimer from './components/CountdownTimer';
import ThankYou from './pages/ThankYou';
import SEO from './components/SEO';

function App() {
  const formRef = useRef(null);
  const resultRef = useRef(null);

  const handleRegisterClick = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewResultsClick = () => {
    if (resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
            <SEO
        title="Khóa học Lục Khí Cơ Bản"
        description="Khóa học Lục Khí giúp bạn tự chữa bệnh đơn giản, an toàn, hiệu quả bằng cách dán huyệt. Đăng ký ngay để tham gia."
        image="share.jpg" // Cập nhật đường dẫn tới ảnh của bạn
        url="https://luckhi.vn/lkcbzoom" // Cập nhật URL của trang web của bạn
      />

      <Routes>
        <Route path="/" element={
          <>
            <CountdownTimer onClose={() => console.log('Closed')} />
            <Hero onRegisterClick={handleRegisterClick} />
            <TargetAudience onRegisterClick={handleRegisterClick} />
            <CountdownTimer onClose={() => console.log('Closed')} />

            <BenefitsSection 
              onRegisterClick={handleRegisterClick}
              onViewResultsClick={handleViewResultsClick}
            />
            <TimelineSection onRegisterClick={handleRegisterClick} />
            <CoursesDetail />
            <CountdownTimer onClose={() => console.log('Closed')} />

            <div ref={formRef}>
              <Form />
            </div>
            <Teacher />
            <VideoSection onRegisterClick={handleRegisterClick} />

            <PricingSection onRegisterClick={handleRegisterClick} />

            <FAQSection onRegisterClick={handleRegisterClick} />
            <CountdownTimer onClose={() => console.log('Closed')} />

            <StatisticsSection onRegisterClick={handleRegisterClick} />
            <TestimonialsSection onRegisterClick={handleRegisterClick} />           
            <div ref={resultRef}>
              <Result onRegisterClick={handleRegisterClick} />
            </div>
            <CountdownTimer onClose={() => console.log('Closed')} />

            <Footer />
          </>
        } />
        <Route path="/result" element={<Result />} />
        <Route path="/registration" element={<Form />} />
        <Route path="/course-detail" element={<CoursesDetail />} />
        <Route path="/thankyou" element={<ThankYou />} />

      </Routes>
    </Router>
  );
}

export default App;
