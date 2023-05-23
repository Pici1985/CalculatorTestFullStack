using CalculatorClassLibrary.Interfaces;
using CalculatorClassLibrary.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CalculatorTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalculatorController : ControllerBase
    {
        private readonly ISimpleCalculator _simpleCalculator;
        public CalculatorController(ISimpleCalculator simpleCalculator)
        {
            _simpleCalculator = simpleCalculator;
        }

        [HttpPost]
        [Route("/add")]
        public IActionResult Add([FromBody] CalculatorInput input)
        {
            return Ok(_simpleCalculator.Add(input.Start, input.Amount));
        }

        [HttpPost]        
        [Route("/subtract")]
        public IActionResult Subtract([FromBody] CalculatorInput input)
        {
            return Ok(_simpleCalculator.Subtract(input.Start, input.Amount));
        }
    }
}
