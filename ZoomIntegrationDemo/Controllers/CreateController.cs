using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Threading.Tasks;
using System;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.HttpsPolicy;
using RestSharp;
using Newtonsoft.Json.Linq;
using ZoomIntegrationDemo.Response;
using Microsoft.AspNetCore.Identity;
using System.Numerics;
using ZoomIntegrationDemo.Requests;
using ZoomNet;

namespace ZoomIntegrationDemo.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class CreateController : ControllerBase
    {
        string tokenString = "Your_Toek_Key_Here";
        string emailId = "Your_EmailId_Here";
        string apiSecretKey = "Your_JWT_SecretKey_Here";
        string apiKey = "Your_JWT_APIKey_Here";

        [HttpGet]
        // [Route("CreateMeeting")]
        public async Task<IActionResult> Get()
        {
            var tokenHandler = new System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler();
            var now = DateTime.UtcNow;

            byte[] symmetricKey = Encoding.ASCII.GetBytes(apiSecretKey);

            var tokenDec = new SecurityTokenDescriptor
            {
                Issuer = apiKey,
                Expires = now.AddMinutes(60),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(symmetricKey), SecurityAlgorithms.HmacSha256)
            };

            // var token = tokenHandler.CreateToken(tokenDec);
            // var tokenString = tokenHandler.WriteToken(token);


            var client = new RestClient("https://api.zoom.us/v2/users/" + emailId + "/meetings"); ;
            var request = new RestRequest();
            //request.RequestFormat = DateFormat.ROUND_TRIP;
            request.Method = Method.Post;
            request.AddJsonBody(new
            {
                topic = "Meeting with Mahmad Waani",
                duration = "10",
                start_time = DateTime.Now.AddMinutes(1),  //"2023-03-28T16:30:00",
                type = "2"
            });

            request.AddHeader("authorization",
                String.Format("Bearer {0}", tokenString));

            var response = await client.ExecuteAsync(request);

            var jObject = JObject.Parse(response.Content);
            string starturl = (string)jObject["start_url"];
            string joinurl = (string)jObject["join_url"];
            string meetingid = (string)jObject["id"];
            string password = (string)jObject["password"];

            return Ok(new ReturnData
            {
                startUrl = starturl,
                joinUrl = joinurl,
                Message = "New Meeting Link has been Created",
                MeetingId = meetingid,
                Password = password,
            });
        }

        [HttpPost]
        public async Task<IActionResult> Post(SignInDTO signIn)
        {
            var client = new RestClient("https://api.zoom.us/v2/users/email");
            var request = new RestRequest();
            request.Method = Method.Get;
            request.AddParameter("email", signIn.EmailId);
            request.AddHeader("authorization",
                String.Format("Bearer {0}", tokenString));

            var response = await client.ExecuteAsync(request);

            return Ok(new ReturnData
            {
                IsLoggedIn = response.StatusCode == System.Net.HttpStatusCode.OK ? true : false
            });
        }

        [HttpPut]
        public async Task<IActionResult> Put(SignInDTO signIn)
        {

            //var zoom = new ZoomClient();
            //var meeting = new Meeting
            //{
            //    Topic = "My Zoom Meeting",
            //    Type = MeetingType.Scheduled,
            //    StartTime = DateTime.UtcNow.AddMinutes(5),
            //    Duration = 30,
            //    Settings = new MeetingSettings
            //    {
            //        JoinBeforeHost = true,
            //        HostVideo = true,
            //        ParticipantVideo = true,
            //        AudioType = MeetingAudioType.VoIP
            //    }
            //};
            //var result = await zoom.Meetings.CreateMeetingAsync(meeting);
            //Console.WriteLine(result.JoinUrl);
            return Ok(new ReturnData
            {
                IsLoggedIn = true
            });
        }
    }
}
