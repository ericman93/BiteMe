using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Foddies.Startup))]
namespace Foddies
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}