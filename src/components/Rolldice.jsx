import styled from "styled-components";

const Rolldice = ({ roledice, currentdice }) => {
  return (
    <Dicecontainer>
      <div className="dice" onClick={roledice}>
        <img
          src={`/images/diceimg/dice_${currentdice}.png`}
          alt="Dice one"
          className="dice_img"
        />
      </div>
      <p>click on dice to roll</p>
    </Dicecontainer>
  );
};

export default Rolldice;

const Dicecontainer = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }

  .dice_img {
    height: 200px;
    width: 200px;
  }
`;
