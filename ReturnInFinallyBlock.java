package demo;
public class CodeIssuesExample {

    public static void main(String[] args) {
        // Unused local variable issue
        int unusedVariable = 0;

        // Unconditional if statement issue
        // boolean condition = true;
        if (unusedVariable == 0) {
            unusedVariable++;
            // System.out.println("This condition always executes.");
            logger.info("Hello");
        }

        // Use of sysout issue
        // System.out.println("This is a sysout statement.");

        // Unused local variable issue
        // int unusedValue;

        // Unconditional if statement issue
        // boolean anotherCondition = false;
        // if (anotherCondition) {
            // System.out.println("This condition always executes as well.");
        // }

        // Use of sysout issue
        // System.out.println("Another sysout statement.");

        // Unused local variable issue
        // int someValue;

        // Unconditional if statement issue
        // boolean yetAnotherCondition = true;
        // if (yetAnotherCondition) {
            // System.out.println("Yet another condition that's always true.");
        // }

        // Use of sysout issue
        // System.out.println("One more sysout statement.");
    }
}