import {Title, Text, Button } from '../microComponents/MicroComp'

function Jumbotron() {
  return (
    <div className="container my-3 bg-light py-5 px-3 rounded">
      <Title size='display-3 fw-semibold' title="A Warm Welcome!" />
      <Text text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias earum adipisci impedit distinctio. Sunt repudiandae consectetur sed explicabo impedit quisquam et quasi asperiores vero, aperiam exercitationem atque accusantium nemo at." />
      <Button textBtn="Call To Action!" colorBtn="btn btn-primary" />
    </div>
  );
}

export default Jumbotron;
