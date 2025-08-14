import config from '../config/config.json';

const userApiService = {
  RegisterFarmer: async function (farmerformData) {
    try {
      const response = await fetch(`${config.API_HOST_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(farmerformData),
        mode: "cors",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);

      if (data?.id) {
        window.alert("Farmer Registration successful");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("Oops, something went wrong");
    }
  },

  RegisterMerchant: async function (merchantFormData) {
    try {
      const response = await fetch(`${config.API_HOST_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(merchantFormData),
        mode: "cors",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);

      if (data?.id) {
        window.alert("Merchant Registration successful");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("Oops, something went wrong");
    }
  },

  loginFarmer: async function (credentials, gotoDashboard) {
    try {
      const response = await fetch(
        `${config.API_HOST_URL}/users?email=${encodeURIComponent(credentials.email)}&password=${encodeURIComponent(credentials.password)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
          mode: "cors",
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        gotoDashboard(data);
      } else {
        window.alert("Invalid username or password");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("Oops, something went wrong during login");
    }
  },
};

export { userApiService };
