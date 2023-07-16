import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Body from "./Components/Body";

function App() {
  const priceCart = [
    {
      heading: "Free",
      price: "$0",
      data: [
        { classlist: "", icon: "bi bi-checkfstyle", value: "Single User" },
        { classlist: "", icon: "bi bi-check-lg", value: "5GB Storage" },
        {
          classlist: "",
          icon: "bi bi-check-lg",
          value: "Unlimited Public Projects",
        },
        { classlist: "", icon: "bi bi-check-lg", value: "Community Access" },
        {
          classlist: "text-muted",
          icon: "bi bi-x-lg",
          value: "Unlimited Private Projects",
        },
        {
          classlist: "text-muted",
          icon: "bi bi-x-lg",
          value: "Dedicated Phone Support",
        },
        {
          classlist: "text-muted",
          icon: "bi bi-x-lg",
          value: "Free Subdomain",
        },
        {
          classlist: "text-muted",
          icon: "bi bi-x-lg",
          value: "Monthly Status Reports",
        },
      ],
    },
    {
      heading: "Plus",
      price: "$9",
      data: [
        { classlist: "", icon: "bi bi-check-lg", value: "5 Users" },
        { classlist: "", icon: "bi bi-check-lg", value: "50GB Storage" },
        {
          classlist: "",
          icon: "bi bi-check-lg",
          value: "Unlimited Public Projects",
        },
        { classlist: "", icon: "bi bi-check-lg", value: "Community Access" },
        {
          classlist: "",
          icon: "bi bi-check-lg",
          value: "Unlimited Private Projects",
        },
        {
          classlist: "",
          icon: "bi bi-check-lg",
          value: "Dedicated Phone Support",
        },
        { classlist: "", icon: "bi bi-check-lg", value: "Free Subdomain" },
        {
          classlist: "text-muted",
          icon: "bi bi-x-lg",
          value: "Monthly Status Reports",
        },
      ],
    },
    {
      heading: "Pro",
      price: "$49",
      data: [
        { classlist: "", icon: "bi bi-check-lg", value: "Unlimited Users" },
        { classlist: "", icon: "bi bi-check-lg", value: "150GB Storage" },
        {
          classlist: "",
          icon: "bi bi-check-lg",
          value: "Unlimited Public Projects",
        },
        { classlist: "", icon: "bi bi-check-lg", value: "Community Access" },
        {
          classlist: "",
          icon: "bi bi-check-lg",
          value: "Unlimited Private Projects",
        },
        {
          classlist: "",
          icon: "bi bi-check-lg",
          value: "Dedicated Phone Support",
        },
        {
          classlist: "",
          icon: "bi bi-check-lg",
          value: "Unlimited Free Subdomains",
        },
        {
          classlist: "",
          icon: "bi bi-check-lg",
          value: "Monthly Status Reports",
        },
      ],
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className="cart-area">
        {priceCart.map((details, idx) => (
          <Body
            key={idx}
            title={details.heading}
            price={details.price}
            data={details.data}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
