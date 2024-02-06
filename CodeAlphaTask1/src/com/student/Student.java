package com.student;

import java.util.ArrayList;

public class Student {
    private ArrayList<String> students;
    private ArrayList<Integer> grades;

    public Student() {
        students = new ArrayList<>();
        grades = new ArrayList<>();
    }

    public void addGrade(String student, int grade) {
        if (grade < 0 || grade > 100) {
            throw new IllegalArgumentException("Grade must be between 0 and 100");
        }
        students.add(student);
        grades.add(grade);
    }

    public ArrayList<String> getStudents() {
        return students;
    }

    public ArrayList<Integer> getGrades() {
        return grades;
    }
}
