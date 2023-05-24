// Copyright (c) 2023 Tim Brady All rights reserved
//
// Created by: Tim Brady
// Created on: june 2023
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random() * 6) + 1

/**
 * This function updates the slider value.
 */
function myButtonClicked() {
  // input
  const numberGuessed = parseInt(
    document.getElementById("guessed-number").value
  )

  // process
  if (numberGuessed == randomNumber) {
    document.getElementById("answer").innerHTML =
      "The answer was, " + randomNumber + "!" + "You got it! Good job."
  }

  // block of code to be executed if condition1 is true
  if (numberGuessed != randomNumber) {
    document.getElementById("answer").innerHTML =
      "The answer was, " + randomNumber + "!" + "Nice guess, but try again."
  }
}