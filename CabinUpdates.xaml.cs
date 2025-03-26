using DesktopApp;
using driveCom;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Windows;

namespace DesktopApp
{
    /// <summary>
    /// Interaction logic for CabinUpdates.xaml
    /// </summary>
    public partial class CabinUpdates : Window
    {
        
        public CabinUpdates()
        {
            InitializeComponent();
        }

        private void BackButton_Click(object sender, RoutedEventArgs e)
        {
            HomePage homepage = new HomePage();
            homepage.Show();
            this.Close();
            
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            LoadCabinData();
        }

        private void LoadCabinData()
        {
            try
            {
                using (var context = new AppDBContext())
                {
                    var cabins = context.Cabins.ToList();

                    if (cabins.Count == 0)
                    {
                        MessageBox.Show("No cabins found in the database.", "Info", MessageBoxButton.OK, MessageBoxImage.Information);
                    }

                    CabinDataGrid.ItemsSource = cabins;
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error loading data: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

         

        private void CabinDataGrid_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
        {

        }

        private void Reload_Click(object sender, RoutedEventArgs e)
        {
            LoadCabinData();
        }

        private void CabinIDTextBox_TextChanged(object sender, System.Windows.Controls.TextChangedEventArgs e)
        {

        }

        private void Edit_Click(object sender, RoutedEventArgs e)
        {
            CDedit cdedit = new CDedit();
            cdedit.Show();
        }


    }
}
