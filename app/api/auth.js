const API_BASE_URL = process.env.NEXT_PUBLIC_API;

// تسجيل الدخول
export const login = async (username, password) => {
  try {
    const res = await fetch(`${API_BASE_URL}/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Client-Domain': window?.location?.host
      },
      credentials: 'include',
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      const error = await res.json();
      throw error;
    }

    return await res.json();
  } catch (error) {
    throw error.message ? error : { message: 'Login failed' };
  }
};
export const signup = async ({ firstName, lastName, email, phone, password }) => {
  try {
    const res = await fetch(`${API_BASE_URL}/signup/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Client-Domain': window?.location?.host
      },
      credentials: 'include',
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phoneNumber: phone,
        password,
        passwordConfermation: password,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Signup failed');
    }

    return await res.json();
  } catch (error) {
    throw error?.message ? error : { message: 'Signup failed' };
  }
};

//Google
export const signupWithProvider = async (provider, token, userType) => {
  try {
    const res = await fetch(`${API_BASE_URL}/sign-up/${provider}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Client-Domain': window?.location?.host
      },
      credentials: 'include',
      body: JSON.stringify({ token, userType }),
    });

    if (!res.ok) {
      const error = await res.json();
      throw error;
    }

    return await res.json();
  } catch (error) {
    throw error.message ? error : { message: 'Provider signup failed' };
  }
};

export const fetchInfo = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/account/info/`, {
      headers: {
        'Content-Type': 'application/json',
        'X-Client-Domain': window?.location?.host
      },
      credentials: 'include',
    });

    if (!res.ok) {
      const error = await res.json();
      throw error;
    }

    return await res.json();
  } catch (error) {
    throw error.message ? error : { message: 'Refresh token failed' };
  }
};

// إعادة تعيين كلمة السر
export const resetPassword = async (email) => {
  try {
    const res = await fetch(`${API_BASE_URL}/reset-password/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      const error = await res.json();
      throw error;
    }

    return await res.json();
  } catch (error) {
    throw error.message ? error : { message: 'Reset password failed' };
  }
};

export async function updateSettings({
  firstName,
  lastName,
  email,
  file
}) {
  try {
    let options = {
      method: "POST",
      credentials: "include",
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-Client-Domain': window?.location?.host
      },
    };

    if (file) {
      // multipart/form-data request
      const formData = new FormData();
      formData.append("file", file);
      const jsonData = JSON.stringify({
        firstName,
        lastName,
        email,
      });
      formData.append("json_data", jsonData);
      options.body = formData;
    } else {
      // JSON-only request
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify({
        firstName,
        lastName,
        email,
      });
    }

    const response = await fetch(`${API_BASE_URL}/account/update/`, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Request failed");
    }

    console.log("✅ Success:", data);
    return data;
  } catch (error) {
    console.error("❌ Error updating settings:", error);
    return { type: "error", message: error.message };
  }
}