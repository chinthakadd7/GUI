using System;
using System.Collections.Generic;
using System.Linq;
using driveCom;
using System.Windows;
using System.Windows.Controls;
using Microsoft.EntityFrameworkCore;

namespace DesktopApp
{
    public partial class CDedit : Window
    {
        public List<Cabin> DatabaseCabins { get; private set; }

        public CDedit()
        {
            InitializeComponent();
            Read();  
        }

        public void Create()
        {
            using (var context = new AppDBContext())
            {
                try
                {
                    var Id = CabinIDSelectionBox.Text;
                    var cabinName = CabinSelectionBox.Text;
                    var checkIn = CheckInDatePicker.SelectedDate;
                    var checkOut = CheckOutDatePicker.SelectedDate;
                    var name = NameTextBox.Text;
                    var phoneNo = PhoneNoTextBox.Text;

                    if (!string.IsNullOrWhiteSpace(cabinName) && checkIn != null && checkOut != null &&
                        !string.IsNullOrWhiteSpace(name) && int.TryParse(phoneNo, out int phone))
                    {
                        var newCabin = new Cabin()
                        {
                            Id = Convert.ToInt32(Id),
                            CabinName = cabinName,
                            CheckIn = checkIn.Value,
                            CheckOut = checkOut.Value,
                            Name = name,
                            PhoneNo = phone
                        };

                        context.Cabins.Add(newCabin);
                        context.SaveChanges();
                        Read();  
                        ClearFields();
                    }
                    else
                    {
                        MessageBox.Show("Please enter valid data.");
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Error: " + ex.Message);
                }
            }
        }

        public void Read()
        {
            using (var context = new AppDBContext())
            {
                DatabaseCabins = context.Cabins.ToList();
                ItemList.ItemsSource = DatabaseCabins;

            }
        }

        public void Update()
        {
            using (var context = new AppDBContext())
            {
                try
                {
                    if (int.TryParse(CabinIDSelectionBox.Text, out int cabinId))
                    {
                        var cabin = context.Cabins.Find(cabinId);
                        if (cabin != null)
                        {
                            var Id = CabinIDSelectionBox.Text;
                            var cabinName = CabinSelectionBox.Text;
                            var checkIn = CheckInDatePicker.SelectedDate;
                            var checkOut = CheckOutDatePicker.SelectedDate;
                            var name = NameTextBox.Text;
                            var phoneNo = PhoneNoTextBox.Text;

                            if (!string.IsNullOrWhiteSpace(cabinName) && checkIn != null && checkOut != null &&
                                !string.IsNullOrWhiteSpace(name) && int.TryParse(phoneNo, out int phone))
                            {
                                cabin.Id = cabinId;
                                cabin.CabinName = cabinName;
                                cabin.CheckIn = checkIn.Value;
                                cabin.CheckOut = checkOut.Value;
                                cabin.Name = name;
                                cabin.PhoneNo = phone;

                                context.SaveChanges();
                                Read();  
                                ClearFields();
                            }
                            else
                            {
                                MessageBox.Show("Please enter valid data.");
                            }
                        }
                        else
                        {
                            MessageBox.Show("Cabin not found.");
                        }
                    }
                    else
                    {
                        MessageBox.Show("Invalid Cabin ID.");
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Error: " + ex.Message);
                }
            }
        }

        public void Delete()
        {
            using (var context = new AppDBContext())
            {
                try
                {
                    if (int.TryParse(CabinIDSelectionBox.Text, out int cabinId))
                    {
                        var cabin = context.Cabins.Find(cabinId);
                        if (cabin != null)
                        {
                            context.Cabins.Remove(cabin);
                            context.SaveChanges();
                            Read();  
                            ClearFields();
                        }
                        else
                        {
                            MessageBox.Show("Cabin not found.");
                        }
                    }
                    else
                    {
                        MessageBox.Show("Invalid Cabin ID.");
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Error: " + ex.Message);
                }
            }
        }

        private void CreateButton_Click(object sender, RoutedEventArgs e)
        {
            Create();
        }

        private void ReadButton_Click(object sender, RoutedEventArgs e)
        {
            Read();
        }

        private void UpdateButton_Click(object sender, RoutedEventArgs e)
        {
            Update();
        }

        private void DeleteButton_Click(object sender, RoutedEventArgs e)
        {
            Delete();
        }
        private void CancelButton_Click(object sender, RoutedEventArgs e)
        {
            this.Close();
        }

         
        private void ItemList_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (ItemList.SelectedItem is Cabin selectedCabin)
            {
                CabinIDSelectionBox.Text = selectedCabin.Id.ToString();
                CabinSelectionBox.Text = selectedCabin.CabinName;
                CheckInDatePicker.SelectedDate = selectedCabin.CheckIn;
                CheckOutDatePicker.SelectedDate = selectedCabin.CheckOut;
                NameTextBox.Text = selectedCabin.Name;
                PhoneNoTextBox.Text = selectedCabin.PhoneNo.ToString();
            }
        }

         
        private void ClearFields()
        {
            CheckInDatePicker.SelectedDate = null;
            CheckOutDatePicker.SelectedDate = null;
            NameTextBox.Clear();
            PhoneNoTextBox.Clear();
        }

        private void ClearTextBox(object sender, RoutedEventArgs e)
        {
            if (sender is TextBox textBox)
            {
                textBox.Clear();
            }
        }
    }
}
