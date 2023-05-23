using CalculatorClassLibrary.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalculatorClassLibrary.Implementations
{
    public class SimpleCalculator : ISimpleCalculator
    {
        public int Add(int start, int amount)
        {
            int result = start + amount;
            return result;
        }

        public int Subtract(int start, int amount)
        {
            int result = start - amount;
            return result;
        }
    }
}
