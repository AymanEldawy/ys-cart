import React from "react";

export const Copyright = () => {
  return (
    <div className="copyright">
      <p>© 2021 yeshtery, all rights reserved.</p>
      <div className="payment-status">
        <img src="images/cache.png" alt="Cache on delivery" />
        <img src="images/visa.png" alt="Visa" />
        <img src="images/master-card.png" alt="Master card" />
      </div>
      <div className="power-by">
        <span>Powered By</span>
        <img src="images/hasnav.svg" alt="hasnav" />
      </div>
    </div>
  );
};
