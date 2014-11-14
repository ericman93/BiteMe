using Foddies.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Foddies.Controllers
{
    public class StaticValuesController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<string> Get([FromUri] string listName)
        {
            if(listName.ToUpper() == "FOODTYPE")
            {
                return FoodTypes.FoodTypeList;
            }
            else if (listName.ToUpper() == "RESTURANTS")
            {
                return Resturants.ResturantsList;
            }
            else if (listName.ToUpper() == "BRANCH")
            {
                return Resturants.BranchList;
            }

            return Enumerable.Empty<string>();
        }
    }
}