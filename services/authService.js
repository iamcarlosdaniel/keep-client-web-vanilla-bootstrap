const signUp = async (userData) => {
  try {
    const response = await axiosInstance.post("/auth/sign-up", userData);
    return {
      status: response.status,
      message: response.data.message,
    };
  } catch (error) {
    console.error("Error signing up:", error.response.data.error[0].message);
    throw (
      error.response.data.error[0].message ||
      "An error occurred during sign in."
    );
  }
};

const resendOTP = async (email) => {
  try {
    const response = await axiosInstance.post("/auth/sign-up/otp/resend", {
      email,
    });
    return {
      status: response.status,
      message: response.data.message,
    };
  } catch (error) {
    console.error("Error resending OTP:", error.response.data.error[0].message);
    throw (
      error.response.data.error[0].message ||
      "An error occurred during sign in."
    );
  }
};

const confirmAccount = async (email, otp) => {
  try {
    const response = await axiosInstance.post("/auth/sign-up/confirm", {
      email,
      otp,
    });
    return {
      status: response.status,
      message: response.data.message,
    };
  } catch (error) {
    console.error(
      "Error confirming account:",
      error.response.data.error[0].message
    );
    throw (
      error.response.data.error[0].message ||
      "An error occurred during sign in."
    );
  }
};

const signIn = async (email, password) => {
  try {
    const response = await axiosInstance.post("/auth/sign-in", {
      email,
      password,
    });
    return {
      status: response.status,
      message: response.data.message,
    };
  } catch (error) {
    console.log("Error signing in:", error.response.data.error[0].message);
    throw (
      error.response.data.error[0].message ||
      "An error occurred during sign in."
    );
  }
};

const authStatus = async () => {
  try {
    const response = await axiosInstance.get("/auth/status");

    return {
      status: response.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error(
      "Error fetching auth status:",
      error.response.data.error[0].message
    );

    throw (
      error.response.data.error[0].message ||
      "An error occurred during sign in."
    );
  }
};
