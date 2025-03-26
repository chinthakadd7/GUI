using System;
using System.Collections.Generic;
using System.Windows;

namespace DesktopApp
{
    public partial class FoodMenu : Window
    {

        private void BackButton_Click(object sender, RoutedEventArgs e)
        {
            
            HomePage homepage = new HomePage();
            homepage.Show();
            this.Close();
        }

       
        
    }

   
}
