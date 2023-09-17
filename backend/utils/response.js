const response = (statusCode, data, messege, res) => {
  res.json({
    payload: {
      status_code: statusCode,
      datas: data,
      messege: messege,
    },
  });
};

export default response;
