using CalculatorClassLibrary.Implementations;

namespace CalculatorTestProject
{
    public class FunctionalityTest
    {
        [Fact]
        public void Add_Returns_Correct_Value()
        {
            //Arrange 
            var mockCalculator = new SimpleCalculator();

            //Act

            //Assert
            Assert.Equal(3, mockCalculator.Add(1, 2));
        }
        
        [Fact]
        public void Subtract_Returns_Correct_Value()
        {
            //Arrange 
            var mockCalculator = new SimpleCalculator();

            //Act

            //Assert
            Assert.Equal(5, mockCalculator.Subtract(10, 5));
        }
    }
}