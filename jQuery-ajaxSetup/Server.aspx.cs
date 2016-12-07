using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Server : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            if (Request["id"] != null && !string.IsNullOrEmpty(Request["id"].ToString()))
            {
               //启用下面一行代码则会使ajax请求超时
               // System.Threading.Thread.Sleep(4000);
                Response.Write(GetData(Request["id"].ToString()));
            }
        }
    }

    protected string GetData(string id)
    {
        string str = string.Empty;
        switch (id)
        {
            case "1":
                str += "This is Number 1";
                break;
            case "2":
                str += "This is Number 2";
                break;
            case "3":
                str += "This is Number 3";
                break;
            default:
                str += "Warning Other Number!";
                break;
        }
        return str;
    }
}