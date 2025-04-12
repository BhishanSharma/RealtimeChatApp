let io;

export const setSocketServerInstance = (ioInstance) => {
  io = ioInstance;
};

export const getSocketServerInstance = () => io;
