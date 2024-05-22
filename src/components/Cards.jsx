import { Button, Text, Title } from "../microComponents/MicroComp";

function Card() {
  return (
    <div
      className="card col-sm-12 col-md-6 col-lg-4 mx-4 border-0 pt-3 "
      style={{ width: "300px" }}
    >
      <img
        src="https://images.unsplash.com/photo-1551582045-6ec9c11d8697?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="rounded-top card-img-top"
        style={{ objectFit: "cover" }}
        alt="winter"
      />
      <div className="card-body text-center border rounded-bottom">
        <Title title="Card Title" size="h3 fw-bold" />
        <Text text="Some quick example text to build on the card title and make" />
        <div className="border-top">
          <Button
            colorBtn="btn btn-primary fw-bold mt-3"
            textBtn="Find Out More!"
          />
        </div>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="row justify-content-center">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Cards;
