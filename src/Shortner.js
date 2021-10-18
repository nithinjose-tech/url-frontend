import React, { useState, useEffect } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Table,
  Button,
  ButtonGroup,
  ButtonToolbar,
  Form,
} from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";

function Shortner() {
  const [details, setDetails] = useState([]);
  const [newUrl, setNewUrl] = useState("");
  const history = useHistory();
  useEffect(() => {
    Axios.get("https://uri-short.herokuapp.com/").then((response) => {
      setDetails(response.data);
      console.log(response.data);
    });
  }, []);

  const passUrl = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        newUrl: newUrl,
      }),
    };
    await fetch("https://uri-short.herokuapp.com/shortUrls", requestOptions);
  };
  return (
    <div>
      <Container>
        <h1>URL Shrinker</h1>
        <Form size="lg" onSubmit={passUrl} className="mt-3">
          <label for="fullUrl" class="sr-only">
            Url
          </label>
          <input
            required
            placeholder="Url"
            type="url"
            name="fullUrl"
            id="fullUrl"
            onChange={(e) => setNewUrl(e.target.value)}
          />
          {/* <button className="btn btn-success ml-3" type="submit">
            Shrink
          </button> */}
          <Button variant="outline-success" type="submit">
            Shrink
          </Button>{" "}
        </Form>

        <Table striped bordered hover className="mt-5">
          <thead>
            <tr>
              <th>Full URL</th>
              <th>Short URL</th>
            </tr>
          </thead>
          <tbody>
            {details.map((val, key) => {
              return (
                <tr key={key}>
                  <td>
                    {" "}
                    <a href={val.full}>{val.full}</a>
                  </td>
                  <td>
                    {" "}
                    <a href={val.full}>{val.short}</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Shortner;
