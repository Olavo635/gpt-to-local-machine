let lastMessage = ""; // memória temporária enquanto a função estiver ativa

exports.handler = async (event) => {
  let msg = "";

  if(event.httpMethod === "POST") {
    try {
      const data = JSON.parse(event.body);
      msg = data.msg || "";
    } catch(e) {
      return { statusCode: 400, body: "Invalid JSON" };
    }
  } else if(event.httpMethod === "GET") {
    msg = event.queryStringParameters?.msg || "";
  }

  if(msg.trim() !== "") lastMessage = msg;

  return {
    statusCode: 200,
    body: JSON.stringify({ msg: lastMessage })
  };
};
