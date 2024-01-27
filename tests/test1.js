"use strict"
let score = 0;
var questionBlock1Div = document.querySelector('div.questionBlock1');
var questionBlock2Div = document.querySelector('div.questionBlock2');
var questionBlock3Div = document.querySelector('div.questionBlock3');
var questionBlock4Div = document.querySelector('div.questionBlock4');
var questionBlock5Div = document.querySelector('div.questionBlock5');
var resultsDiv = document.querySelector('div.results')

// вопрос 1
document.querySelector('#q1a1').onclick = function(){
	score += 1;
	console.log(score);
	questionBlock1Div.style.display = "none";
	questionBlock2Div.style.display = "block";}
document.querySelector('#q1a2').onclick = function(){
	score += 0;
	console.log(score);
	questionBlock1Div.style.display = "none";
	questionBlock2Div.style.display = "block";}
document.querySelector('#q1a3').onclick = function(){
	score += 0;
	console.log(score);
	questionBlock1Div.style.display = "none";
	questionBlock2Div.style.display = "block";}

// вопрос 2
document.querySelector('#q2a3').onclick = function(){
	score += 1;
	console.log(score);
	questionBlock2Div.style.display = "none";
	questionBlock3Div.style.display = "block";}
document.querySelector('#q2a1').onclick = function(){
	score += 0;
	console.log(score);
	questionBlock2Div.style.display = "none";
	questionBlock3Div.style.display = "block";}
document.querySelector('#q2a2').onclick = function(){
	score += 0;
	console.log(score);
	questionBlock2Div.style.display = "none";
	questionBlock3Div.style.display = "block";}

// вопрос 3
document.querySelector('#q3a2').onclick = function(){
	score += 1;
	console.log(score);
	questionBlock3Div.style.display = "none";
	questionBlock4Div.style.display = "block";}
document.querySelector('#q3a1').onclick = function(){
	score += 0;
	console.log(score);
	questionBlock3Div.style.display = "none";
	questionBlock4Div.style.display = "block";}
document.querySelector('#q3a3').onclick = function(){
	score += 0;
	console.log(score);
	questionBlock3Div.style.display = "none";
	questionBlock4Div.style.display = "block";}

// вопрос 4
document.querySelector('#q4a3').onclick = function(){
	score += 1;
	console.log(score);
	questionBlock4Div.style.display = "none";
	questionBlock5Div.style.display = "block";}
document.querySelector('#q4a1').onclick = function(){
	score += 0;
	console.log(score);
	questionBlock4Div.style.display = "none";
	questionBlock5Div.style.display = "block";}
document.querySelector('#q4a2').onclick = function(){
	score += 0;
	console.log(score);
	questionBlock4Div.style.display = "none";
	questionBlock5Div.style.display = "block";}

// Вопрос 5
document.querySelector('#q5a2').onclick = function(){
	score += 1;
	console.log(score);
	questionBlock5Div.style.display = "none";
	resultsDiv.style.display = "block";
	document.getElementById("score").innerHTML = score;}
document.querySelector('#q5a1').onclick = function(){
	score += 0;
	console.log(score);
	questionBlock5Div.style.display = "none";
	resultsDiv.style.display = "block";
	document.getElementById("score").innerHTML = score;}
document.querySelector('#q5a3').onclick = function(){
	score += 1;
	console.log(score);
	questionBlock5Div.style.display = "none";
	resultsDiv.style.display = "block";
	document.getElementById("score").innerHTML = score;}
// Вывод результата