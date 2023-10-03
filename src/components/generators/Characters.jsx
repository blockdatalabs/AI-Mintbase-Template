import React, { useState } from "react";
import Image from "next/image";
import { constants } from "@/utils/constants";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const getImages = async () => {
  const urlImages = "https://gardeners.pulsarforge.io/api/images";
  await delay(9000);
  const resp = await fetch(urlImages, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  });

  return resp.json();
};

function Characters() {
  const [queryPlanet, setQueryPlanet] = useState("");
  const [generation, setGeneration] = useState([]);
  const handleSubmitPlanets = async (event) => {
    event.preventDefault();

    // The base URL for our API
    const url = constants.apiFetchUrl;

    fetch(url, {
      method: "POST",
      body: JSON.stringify({ queryPlanet }),
      headers: {
        accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((response) => response)
      .catch((err) => console.log(err));

    const results = await getImages();
    setGeneration(results?.generations);
  };
  return (
    <section className="banner">
      <div className="container big">
        <div className="row">
          <h2>
            {" "}
            <br /> <br /> Your story start now, write it <br /> <br />{" "}
          </h2>
          <div className="col-md-12">
          <h4>3D Characters AI Trained Model</h4>
            <form onSubmit={handleSubmitPlanets} className="form-group">
              <input
                type="text"
                className="form-control"
                id="queryPlanet"
                name="queryPlanet"
                value={queryPlanet}
                placeholder="Write Your Prompt to discover places"
                onChange={(event) => setQueryPlanet(event.target.value)}
                style={{  width: 700, height: 100  }}
              />

              <br />
              <br />

              <button type="submit" className="btn btn-primary" style={{width: 400, padding: 25, marginRight: 20, borderRadius: 20}}>
                Create a new character archetype
              </button>

              <br />
              <br />
              <br />
              <h5>Wait around 12 seconds to get your results</h5>
            </form>
          </div>
        </div>
        <div className="row" style={{ marginTop: 80, marginBottom: 80 }}>
          {generation ? (
            <>
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <h4>Get your character here</h4>
                  <br />
                  <br />
                </div>
                <div className="col-md-2"></div>
              </div>
              <div className="row">
              {generation.map(
                  (leoImage, index) =>
                    index === 0 && (
                      <div className="row" key={index}>
                        {leoImage.generated_images.map((leoGenerate, idx) => (
                          <>
                            <div className="col-md-12" key={idx}>
                              <h2>Gen {idx + 1}</h2>
                              <Image
                                src={leoGenerate?.url}
                                style={{
                                  width: "95%",
                                  borderRadius: 40,
                                }}
                                alt="generations"
                              />
                            </div>
                          </>
                        ))}
                              <h5>
                                Previous Creator Prompt: {leoImage.prompt}
                              </h5>
                      </div>
                    ),
                )}
              </div>
            </>
          ) : (
            <h4>Submit, wait and get the species evolutions</h4>
          )}
      </div>
    </div>
    </section>
  );
}

export default Characters;
