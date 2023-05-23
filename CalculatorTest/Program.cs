using CalculatorClassLibrary.Interfaces;
using CalculatorClassLibrary.Implementations;
using Microsoft.Extensions.Configuration;
using System;
using Microsoft.OpenApi.Models;
using System.Configuration;
using System.Text;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<ISimpleCalculator, SimpleCalculator>();

// to use appsettings.json
var configuration = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .Build();

var app = builder.Build();

// CORS 
var corsSettings = configuration.GetSection("CorsSettings");

var section = corsSettings.GetSection("AllowedOrigin");

var allowedOrigin = section.Get<string[]>();

if (allowedOrigin != null)
{
    app.UseCors(options => options.WithOrigins(allowedOrigin)
                                                .AllowAnyHeader()
                                                .AllowAnyMethod()
                                                .AllowCredentials()
                                                );
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
