exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    console.log("Received from n8n:", data);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Success", received: data }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
