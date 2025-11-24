exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);

    console.log("Received from n8n:", data);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Data received successfully." })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.toString() })
    };
  }
};
