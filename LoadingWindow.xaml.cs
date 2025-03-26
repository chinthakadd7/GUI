using System;
using System.Threading.Tasks;
using System.Windows;

namespace DesktopApp
{
    public partial class LoadingWindow : Window
    {
        public LoadingWindow()
        {
            InitializeComponent();
        }

        public async Task StartLoadingAsync()
        {
            await Task.Delay(2500);  
            this.Close();  
        }
    }
}
