
import React, { useState } from 'react';
import './company_details.css'; 

const CompanyDetails = () => {
    const [showRelatedCompanies, setShowRelatedCompanies] = useState(false);

    const handleRelatedCompaniesToggle = () => {
        setShowRelatedCompanies(!showRelatedCompanies);
    };

    return (
        <div className="company-details-page">
         
            <button className="back-button" onClick={() => window.location.href='/company_search'}>Back</button>

       
            <div className="company-card main-card">
                <img src="/images/blue_dart.jpg" alt="Company Logo" className="company-logo" />
                <div className="company-info">
                    <h2>BLUE DART Pvt. Limited</h2>
                    <div className="rating">
                        <h4>Company Ratings </h4>
                        <span>⭐</span><span>⭐</span><span>⭐</span><span>☆</span><span>☆</span>
                    </div>
                    <p>Description: Blue Dart is a leading courier and logistics company in South Asia, specializing in express air and integrated transportation services. It offers reliable, time-bound deliveries for parcels, documents, and freight across domestic and international markets.

</p>
                </div>

                <div className="social-links">
                    <a href="https://www.instagram.com/official_bluedart" target="_blank" rel="noopener noreferrer">
                        <img src="/images/insta.jpg" alt="Instagram" className="social-icon" />
                        <span className="social-text">Instagram</span>
                    </a>
                    <a href="https://www.facebook.com/bluedart.official/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/facebook.jpg" alt="Facebook" className="social-icon" />
                        <span className="social-text">Facebook</span>
                    </a>
                    <a href="https://in.linkedin.com/company/bluedart" target="_blank" rel="noopener noreferrer">
                        <img src="/images/linkedin.jpg" alt="LinkedIn" className="social-icon" />
                        <span className="social-text">LinkedIn</span>
                    </a>
                </div>

                <button className="book-now" onClick={() => window.location.href='/shipment'}>BOOK</button>
            </div>

        
            <button className="related-companies-toggle" onClick={handleRelatedCompaniesToggle}>
                {showRelatedCompanies ? "Hide Related Companies" : "Show Related Companies"}
            </button>

            {showRelatedCompanies && (
                <div className="related-companies">
                    <div className="related-companies-list">
                        <div className="company-card">
                            <img src="/images/delhivery.jpg" alt="Company Logo" className="company-logo" />
                            <div className="company-info">
                                <h4>Delhivery Pvt. Limited</h4>
                                <div className="rating">
                                    <h3>Company Ratings </h3>
                                    <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>☆</span>
                                </div>
                                <p>Delhivery is a prominent logistics and supply chain company in India, providing parcel delivery, warehousing, and transportation solutions. It offers end-to-end services for e-commerce, businesses, and individuals, with a strong focus on technology-driven logistics.

</p>
                            </div>
                            <div className="social-links">
                                <a href="https://www.instagram.com/company_xyz" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/insta.jpg" alt="Instagram" className="social-icon" />
                                    <span className="social-text">Instagram</span>
                                </a>
                                <a href="https://www.facebook.com/company_xyz" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/facebook.jpg" alt="Facebook" className="social-icon" />
                                    <span className="social-text">Facebook</span>
                                </a>
                                <a href="https://www.linkedin.com/company/company_xyz" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/linkedin.jpg" alt="LinkedIn" className="social-icon" />
                                    <span className="social-text">LinkedIn</span>
                                </a>
                            </div>
                            <button className="book-now" onClick={() => window.location.href='/shipment'}>BOOK</button>
                        </div>

                        <div className="company-card">
                            <img src="/images/dhl.jpg" alt="Company Logo" className="company-logo" />
                            <div className="company-info">
                                <h4>DHL Pvt. Limited</h4>
                                <div className="rating">
                                    <h3>Company Ratings </h3>
                                    <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>☆</span>
                                </div>
                                <p>DHL is a global logistics company specializing in international shipping, courier services, and supply chain management. Founded in 1969, it operates in over 220 countries, offering solutions for express parcel delivery, freight transportation, and e-commerce logistics. Known for its efficiency and innovative approaches, DHL is a leader in the logistics industry.
</p>
                            </div>
                            <div className="social-links">
                                <a href="https://www.instagram.com/company_abc" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/insta.jpg" alt="Instagram" className="social-icon" />
                                    <span className="social-text">Instagram</span>
                                </a>
                                <a href="https://www.facebook.com/company_abc" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/facebook.jpg" alt="Facebook" className="social-icon" />
                                    <span className="social-text">Facebook</span>
                                </a>
                                <a href="https://www.linkedin.com/company/company_abc" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/linkedin.jpg" alt="LinkedIn" className="social-icon" />
                                    <span className="social-text">LinkedIn</span>
                                </a>
                            </div>
                            <button className="book-now" onClick={() => window.location.href='/shipment'}>BOOK</button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default CompanyDetails;
