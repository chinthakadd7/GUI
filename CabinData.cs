using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace driveCom
{
    public class Cabin
    {
        public int Id { get; set; }
        public string CabinName { get; set; }
        public DateTime CheckIn { get; set; }
        public DateTime CheckOut { get; set; }
        public string Name { get; set; }
        public int PhoneNo { get; set; }
    }

    public static class CarData
    {

        public static ObservableCollection<Cabin> Cabins { get; set; } = new ObservableCollection<Cabin>();
    }

}