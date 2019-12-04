using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ReactSetup.Models;

namespace ReactSetup.Controllers
{
    public class HomeController : Controller
    {
       private ChinookEntities db = new ChinookEntities();
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult GetArtist()
        {
            var getArtist = db.Artists.Select(x =>  new {x.ArtistId, x.Name  }).ToList();
            return Json(getArtist, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult DeleteArtist(int id)
        {
            var findArtist = db.Artists.Find(id);
            db.Artists.Remove(findArtist);
            db.SaveChanges();
            var getArtist = db.Artists.Select(x => new { x.ArtistId, x.Name }).ToList();
            return Json(getArtist, JsonRequestBehavior.AllowGet);
        }
    }
}