import { contactData } from "../../../data/contactData";
import "./Map.css";

const Map = () => {
  return (
    <div className="contact-map">
      <iframe
        title={`${contactData.businessName} location`}
        src="https://www.google.com/maps?q=Noida&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Map;