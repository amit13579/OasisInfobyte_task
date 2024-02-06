package com.student;

import java.util.ArrayList;
import java.util.Collections;

public class Utils {
    public static double computeAverage(ArrayList<Integer> grades) {
        if (grades.isEmpty()) {
            throw new IllegalStateException("No grades to compute average");
        }
        int sum = 0;
        for (int grade : grades) {
            sum += grade;
        }
        return (double) sum / grades.size();
    }

    public static String getHighest(ArrayList<String> students, ArrayList<Integer> grades) {
        if (grades.isEmpty()) {
            throw new IllegalStateException("No grades to compute highest");
        }
        int maxIndex = grades.indexOf(Collections.max(grades));
        return students.get(maxIndex) + " with a grade of " + grades.get(maxIndex);
    }

    public static String getLowest(ArrayList<String> students, ArrayList<Integer> grades) {
        if (grades.isEmpty()) {
            throw new IllegalStateException("No grades to compute lowest");
        }
        int minIndex = grades.indexOf(Collections.min(grades));
        return students.get(minIndex) + " with a grade of " + grades.get(minIndex);
    }
}
