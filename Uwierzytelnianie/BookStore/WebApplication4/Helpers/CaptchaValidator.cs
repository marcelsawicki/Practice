using System.Web.Mvc;
using BookStoreApp.Models;

namespace BookStoreApp.Helpers
{
    public class CaptchaValidatorAttribute: ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            //Pobranie modelu RegisterViewModel z parametrów kontekstu filtra
            RegisterViewModel model = filterContext.ActionParameters["model"] as RegisterViewModel;

            //Sprawdzenie, czy wynik działania arytmetycznego wpisany przez użytkownika (i zapisany w modelu) jest równy wynikowi zapisanemu w sesji
            if((filterContext.HttpContext.Session["Captcha"] == null) || (filterContext.HttpContext.Session["Captcha"].ToString() != model.Captcha))
            {
                filterContext.ActionParameters["captchaValid"] = false;
            }
            else
            {
                filterContext.ActionParameters["captchaValid"] = true;
            }

            base.OnActionExecuting(filterContext);
        }
    }
}