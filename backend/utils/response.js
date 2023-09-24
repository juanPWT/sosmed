const response = (statusCode, data, messege, res) => {
  res.status(statusCode).json({
    payload: {
      status_code: statusCode,
      datas: data,
      messege: messege,
    },
  });
};

export default response;
