const getAllNotes = async () => {
  try {
    const response = await axiosInstance.get("/notes");
    return {
      status: response.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error(
      "Error fetching notes:",
      error.response.data.error[0].message
    );
    throw (
      error.response.data.error[0].message ||
      "An error occurred while fetching the notes."
    );
  }
};

const getNoteById = async (noteId) => {
  try {
    const response = await axiosInstance.get(`/notes/${noteId}`);

    return {
      status: response.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error("Error fetching note:", error.response.data.error[0].message);
    throw (
      error.response.data.error[0].message ||
      "An error occurred while fetching the note."
    );
  }
};

const changeColor = async (noteId, colorId) => {
  try {
    const response = await axiosInstance.put(`/notes/${noteId}/color`, {
      color_id: colorId,
    });

    return {
      status: response.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error(
      "Error changing note color:",
      error.response.data.error[0].message
    );
    throw (
      error.response.data.error[0].message ||
      "An error occurred while changing the note color."
    );
  }
};

const createNote = async (nodeData) => {
  try {
    const response = await axiosInstance.post("/notes", nodeData);
    return {
      status: response.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error("Error creating note:", error.response.data.error[0].message);
    throw (
      error.response.data.error[0].message ||
      "An error occurred while creating the note."
    );
  }
};

const updateNote = async (noteId, nodeData) => {
  try {
    const response = await axiosInstance.put(`/notes/${noteId}`, nodeData);
    return {
      status: response.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error("Error updating note:", error.response.data.error[0].message);
    throw (
      error.response.data.error[0].message ||
      "An error occurred while updating the note."
    );
  }
};

const deleteNoteById = async (noteId) => {
  try {
    const response = await axiosInstance.delete(`/notes/${noteId}`);
    return {
      status: response.status,
      message: response.data.message,
    };
  } catch (error) {
    console.error("Error deleting note:", error.response.data.error[0].message);
    throw (
      error.response.data.error[0].message ||
      "An error occurred while deleting the note."
    );
  }
};

const shareNoteWithUser = async (noteId, payload) => {
  try {
    const response = await axiosInstance.post(`/notes/${noteId}/share`, {
      email: payload.email,
      permission: payload.permission,
    });
    return {
      status: response.status,
      message: response.data.message,
    };
  } catch (error) {
    console.error("Error sharing note:", error.response.data.error[0].message);
    throw (
      error.response.data.error[0].message ||
      "An error occurred while sharing the note."
    );
  }
};

const unshareNoteWithUser = async (noteId, email) => {
  try {
    const response = await axiosInstance.delete(`/notes/${noteId}/share`, {
      data: { email },
    });
    return {
      status: response.status,
      message: response.data.message,
    };
  } catch (error) {
    console.error(
      "Error unsharing note:",
      error.response.data.error[0].message
    );
    throw (
      error.response.data.error[0].message ||
      "An error occurred while unsharing the note."
    );
  }
};

const uploadImageApi = async (formData) => {
  try {
    const response = await axiosInstance.post(`/files/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return {
      status: response.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    const message =
      error?.response?.data?.error?.[0]?.message ||
      error?.message ||
      "Unexpected error occurred.";

    console.error("Error adding header image:", message);
    throw message;
  }
};

const addHeaderImage = async (noteId, imageId) => {
  try {
    const response = await axiosInstance.put(`/notes/${noteId}/header`, {
      imageId: imageId,
    });

    return {
      status: response.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    const message =
      error?.response?.data?.error?.[0]?.message ||
      error?.message ||
      "Unexpected error occurred.";

    console.error("Error adding header image:", message);
    throw message;
  }
};

const removeHeaderImage = async (noteId) => {
  try {
    const response = await axiosInstance.delete(`/notes/${noteId}/header`);
    return {
      status: response.status,
      message: response.data.message,
    };
  } catch (error) {
    const message =
      error?.response?.data?.error?.[0]?.message ||
      error?.message ||
      "Unexpected error occurred.";
    console.error("Error removing header image:", message);
    throw message;
  }
};

const addTagToNote = async (noteId, tagId) => {
  try {
    const response = await axiosInstance.post(`/notes/${noteId}/tags`, {
      tagId: tagId,
    });

    return {
      status: response.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error(
      "Error adding tag to note:",
      error.response.data.error[0].message
    );
    throw (
      error.response.data.error[0].message ||
      "An error occurred while adding the tag to the note."
    );
  }
};

const removeTagFromNote = async (noteId, tagId) => {
  try {
    const response = await axiosInstance.delete(`/notes/${noteId}/tags`, {
      data: { tagId: tagId },
    });

    return {
      status: response.status,
      message: response.data.message,
    };
  } catch (error) {
    console.error(
      "Error removing tag from note:",
      error.response.data.error[0].message
    );
    throw (
      error.response.data.error[0].message ||
      "An error occurred while removing the tag from the note."
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
