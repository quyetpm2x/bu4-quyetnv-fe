export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "some deploy url";

export const LOCAL_STORAGE_TOKEN_NAME = 'bookingHotel'