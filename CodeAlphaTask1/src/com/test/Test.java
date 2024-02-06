package com.test;

import com.student.Student;
import com.student.Utils;

import java.util.Scanner;

public class Test {
    public static void main(String[] args) {
        try {
            Student tracker = new Student();
            Scanner scanner = new Scanner(System.in);

            System.out.println("Enter student names and grades (enter 'finish' once done):");
            while (true) {
                System.out.print("Student name: ");
                String name = scanner.nextLine();
                if (name.equals("finish")) {
                    break;
                }
                System.out.print("Grade: ");
                int grade = scanner.nextInt();
                scanner.nextLine(); // consume newline left-over
                tracker.addGrade(name, grade);
            }

            System.out.println("Average: " + Utils.computeAverage(tracker.getGrades()));
            System.out.println("Highest: " + Utils.getHighest(tracker.getStudents(), tracker.getGrades()));
            System.out.println("Lowest: " + Utils.getLowest(tracker.getStudents(), tracker.getGrades()));

            System.out.println("\nAll Grades:");
            for (int i = 0; i < tracker.getStudents().size(); i++) {
                System.out.println("Student: " + tracker.getStudents().get(i) + ", Grade: " + tracker.getGrades().get(i));
            }
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        } catch (IllegalStateException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
