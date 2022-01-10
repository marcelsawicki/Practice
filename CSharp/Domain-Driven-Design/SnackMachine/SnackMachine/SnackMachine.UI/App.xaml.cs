using SnackMachineApp.Logic;
using System.Windows;

namespace SnackMachineApp.UI
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : Application
    {
        public App()
        {
            Initer.Init(@"Server=.;Database=DddInPractice;Trusted_Connection=true");
        }
    }
}
