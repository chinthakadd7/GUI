using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace DesktopApp
{
    /// <summary>
    /// Interaction logic for HomePage.xaml
    /// </summary>
    public partial class HomePage : Window
    {
        public HomePage()
        {
            InitializeComponent();
        }
        private void CabinUpdates_Click(object sender, RoutedEventArgs e)
        {
            CabinUpdates cabinUpdates = new CabinUpdates();
            cabinUpdates.Show();
            this.Close();
        }

        private void FoodMenu_Click(object sender, RoutedEventArgs e)
        {
            FoodMenu menulist = new FoodMenu();
            menulist.Show();
            this.Close();

        }

        private void StaffManagement_Click(object sender, RoutedEventArgs e)
        {
            this.Close();
        }
        private void Login_Out(object sender, RoutedEventArgs e)
        {
            MessageBoxResult result = MessageBox.Show(
                "Do you want to logout?",   
                "Confirmation",                      
                MessageBoxButton.YesNo,             
                MessageBoxImage.Question);         

             
            if (result == MessageBoxResult.Yes)
            {
                MainWindow mainwindow = new MainWindow();
                mainwindow.Show();
                this.Close();

            }
        }

    }
}
