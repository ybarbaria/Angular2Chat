using Angular2Simple.Models.ViewModel;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular2Simple.Models.Mapping
{
    public static class InitializeAutoMapper
    {
        public static void Initialize()
        {
            CreateModelsToViewModels();
            CreateViewModelsToModels();
        }

        private static void CreateModelsToViewModels()
        {
           Mapper.CreateMap<Message, MessageVM>();
        }

        private static void CreateViewModelsToModels()
        {
           Mapper.CreateMap<MessageVM, Message>();
        }
    }
}