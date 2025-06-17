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
