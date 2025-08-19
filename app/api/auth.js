const API_BASE_URL = 'https://comercifyapi.up.railway.app'; 

// تسجيل الدخول
export const login = async (username, password) => {
  try {
    const res = await fetch(`${API_BASE_URL}/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Client-Domain': 'https://planet.up.railway.app' // ✅ أضف هذا الهيدر
      },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      const error = await res.json();
      throw error;
    }

    return await res.json(); // يحتوي على: type, name, image (اختياري)
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
        'X-Client-Domain': 'https://planet.up.railway.app' // ✅ أضف هذا الهيدر
      },
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
      throw new Error(errorData.message || 'فشل التسجيل');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw error?.message ? error : { message: 'Signup failed' };
  }
};

 //Google
export const signupWithProvider = async (provider, token, userType) => {
  try {
    const res = await fetch(`${API_BASE_URL}/signup/${provider}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
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

// تحديث التوكن
export const refreshToken = async (refresh) => {
  try {
    const res = await fetch(`${API_BASE_URL}/refresh-token/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh }),
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
