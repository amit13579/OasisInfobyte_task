package guessingNumber;

import java.util.Scanner;
import java.util.Random;

public class GuessingNumberGame {

    public static void main(String[] args) {
        playGame();
    }

    public static int generateRandomNumber(int min, int max) {
        Random random = new Random();
        return random.nextInt(max - min + 1) + min;
    }

    public static void playGame() {
        Scanner scanner = new Scanner(System.in);
        int minRange = 1;
        int maxRange = 100;
        int totalRounds = 3;  // Number of rounds
        int maxAttemptsPerRound = 15;
        int totalAttempts = 0;
        int totalScore = 0;

        System.out.print("      -----------------------");
        System.out.print("Welcome to the Number Guessing Game!");
        System.out.println("-----------------------");
        
        for (int round = 1; round <= totalRounds; round++) {
            int targetNumber = generateRandomNumber(minRange, maxRange);
            int attempts = 0;

            System.out.println("\nRound " + round + ": Guess the number between " + minRange + " and " + maxRange);
            
            while (attempts < maxAttemptsPerRound) {
                System.out.println("Attempts remaining: " + (maxAttemptsPerRound - attempts) +
                                   ", Maximum attempts per round: " + maxAttemptsPerRound);
                System.out.print("Enter your guess: ");
                int userGuess = scanner.nextInt();
                attempts++;
                totalAttempts++;

                if (userGuess == targetNumber) {
                    int roundScore = calculateScore(attempts, round, maxAttemptsPerRound);
                    totalScore += roundScore;
                    System.out.print("      -----------------------");
                    System.out.println("Congratulations! You guessed the number in " + attempts + " attempts.");
                    System.out.println("-----------------------");
                    System.out.println("Round " + round + " Score: " + roundScore + " points");
                    break;
                } else if (userGuess < targetNumber) {
                    System.out.println("Too low. Enter the greater Number.");
                } else {
                    System.out.println("Too high.Enter the smaller number.");
                }
            }

            if (attempts == maxAttemptsPerRound) {
                System.out.println("Sorry, you've reached the maximum number of attempts for this round.");
            }
        }

        System.out.println("\nGame Over! Your total score is: " + totalScore + " points in " + totalAttempts + " attempts.");
        scanner.close();
    }

    public static int calculateScore(int attempts, int round, int maxAttempts) {
        
        return (10 - attempts) * round + (5 * maxAttempts); // Added maxAttempts to scoring logic
    }
}
