const createTag = async (tag) => {
  try {
    const response = await axiosInstance.post("/tags", tag);
    return {
      status: response.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error("Error creating tag:", error.response.data.error[0].message);
    throw (
      error.response.data.error[0].message ||
      "An error occurred while creating the tag."
    );
  }
};

const getTags = async () => {
  try {
    const response = await axiosInstance.get("/tags");
    return {
      status: response.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error("Error fetching tags:", error.response.data.error[0].message);
    throw (
      error.response.data.error[0].message ||
      "An error occurred while fetching the tags."
    );
  }
};

const updateTagById = async (tagId, tag) => {
  try {
    const response = await axiosInstance.put(`/tags/${tagId}`, tag);
    return {
      status: response.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error("Error updating tag:", error.response.data.error[0].message);
    throw (
      error.response.data.error[0].message ||
      "An error occurred while updating the tag."
    );
  }
};

const deleteTagById = async (tagId) => {
  try {
    const response = await axiosInstance.delete(`/tags/${tagId}`);
    return {
      status: response.status,
      message: response.data.message,
    };
  } catch (error) {
    console.error("Error deleting tag:", error.response.data.error[0].message);
    throw (
      error.response.data.error[0].message ||
      "An error occurred while deleting the tag."
    );
  }
};
