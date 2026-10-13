export const site = {
  name: "The Maharashtra Foods",
  shortName: "TMF",
  tagline: "Tasty, Healthy & Chatpata Snacks",
  since: 2000,
  // WhatsApp enquiry recipient (Nilesh — Orders & Enquiries), international format without '+'
  whatsappNumber: "919220904845",
  email: "maharashtrafood@yahoo.com",
  address:
    "Survey No. 130, Near Jain Temple, Mahajan Pada, At Poman Village, Post Kaman, Vasai (E) – 401208",
  gstin: "27CGSPS1030E1ZD",
  contacts: [
    { name: "Namdeo Shigvan", role: "Customer Care", phone: "9821858261" },
    { name: "Nilesh Shigvan", role: "Orders & Enquiries", phone: "9220904845" },
    { name: "Mangesh Shigvan", role: "Manufacturing", phone: "8451094191" },
    { name: "Dinesh Shigvan", role: "Sales & Delivery", phone: "9222851875" },
    { name: "Arpita", role: "Manufacturing", phone: "8625883384" },
  ],
};

export const waLink = (message) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const generalEnquiryLink = () =>
  waLink(
    `Hello ${site.name}! I would like to enquire about your snacks. Please share details.`
  );

export const productEnquiryLink = (productName, category) =>
  waLink(
    `Hello ${site.name}! I would like to enquire about: ${productName} (${category}). Please share price, pack sizes and availability.`
  );

export const telLink = (phone) => `tel:+91${phone}`;
