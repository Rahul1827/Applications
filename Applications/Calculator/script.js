'use strict';

document.getElementById("btn").addEventListener("click", function(event) {
    event.preventDefault();

    
    var n1 = parseInt(document.getElementById("h1").value);
    var n2 = parseInt(document.getElementById("e1").value);
    var n3 = parseInt(document.getElementById("m1").value);
    var n4 = parseInt(document.getElementById("p1").value);
    var n5 = parseInt(document.getElementById("c1").value);

    
    var result = n1 + n2 + n3 + n4 + n5;
    var percentage = Math.round(result / 5);

   
    let grade = "";
    let remarks = "";

    if (percentage < 35) {
        grade = "F";
        remarks = "You have failed. Please review the material and focus on improvement.";
    } else if (percentage < 50) {
        grade = "E";
        remarks = "You passed, but there's room for improvement. Keep working hard.";
    } else if (percentage < 60) {
        grade = "D";
        remarks = "Satisfactory performance. Consider putting in more effort to improve further.";
    } else if (percentage < 70) {
        grade = "C";
        remarks = "Good performance, but there's potential for greater achievement.";
    } else if (percentage < 80) {
        grade = "B";
        remarks = "Well done! You're performing well, keep up the effort.";
    } else if (percentage < 90) {
        grade = "A";
        remarks = "Excellent work! You're performing at a high level.";
    } else {
        grade = "A+";
        remarks = "Outstanding performance! Keep it up, you're excelling.";
    }

   
    document.getElementById("mark").innerHTML = `
        <p>Total Marks: ${result}</p>
        <p>Percentage: ${percentage}%</p>
        <p>Grade: <strong>${grade}</strong></p>
        <p>Remarks: ${remarks}</p>
    `;

   
    var ctx = document.getElementById('pieChart').getContext('2d');
    var pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Hindi', 'English', 'Maths', 'Physics', 'Chemistry'],
            datasets: [{
                label: 'Marks Distribution',
                data: [n1, n2, n3, n4, n5],  
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                borderColor: '#fff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ": " + tooltipItem.raw + " Marks";
                        }
                    }
                }
            }
        }
    });
});
