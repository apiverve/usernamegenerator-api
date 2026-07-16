using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.UsernameGenerator
{
    /// <summary>
    /// Query options for the Username Generator API
    /// </summary>
    public class UsernameGeneratorQueryOptions
    {
        /// <summary>
        /// The email address to generate usernames from
        /// </summary>
        [JsonProperty("email")]
        public string Email { get; set; }

        /// <summary>
        /// The number of usernames to generate
        /// </summary>
        [JsonProperty("count")]
        public int? Count { get; set; }
    }
}
